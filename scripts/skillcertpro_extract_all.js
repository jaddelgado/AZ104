async function extractAllPages() {
  function htmlToMd(html) {
    if (!html) return "";
    let s = html;
    s = s.replace(/<br\s*\/?>/gi, "\n");
    s = s.replace(/<\/p>/gi, "\n\n");
    s = s.replace(/<\/li>/gi, "\n");
    s = s.replace(/<li>/gi, "- ");
    s = s.replace(/<h[1-6][^>]*>/gi, "\n\n### ");
    s = s.replace(/<\/h[1-6]>/gi, "\n\n");
    s = s.replace(/<strong>(.*?)<\/strong>/gi, "**$1**");
    s = s.replace(/<[^>]+>/g, "");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/\n{3,}/g, "\n\n");
    return s.trim();
  }

  function parseCorrectMap(html) {
    const marker = "json:";
    const start = html.indexOf(marker);
    if (start < 0) return {};
    let i = start + marker.length;
    while (html[i] && html[i] !== "{") i++;
    if (html[i] !== "{") return {};

    let depth = 0;
    let inString = false;
    let escaped = false;
    for (let j = i; j < html.length; j++) {
      const ch = html[j];
      if (inString) {
        if (escaped) escaped = false;
        else if (ch === "\\") escaped = true;
        else if (ch === '"') inString = false;
        continue;
      }
      if (ch === '"') inString = true;
      else if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) {
          try {
            return JSON.parse(html.slice(i, j + 1));
          } catch {
            return {};
          }
        }
      }
    }
    return {};
  }

  function extractFromHtml(html, pageUrl) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const correctMap = parseCorrectMap(html);
    const quiz = doc.querySelector(".wpProQuiz_content");
    if (!quiz) return null;

    const practiceSetMatch = html.match(/Practice Set\s*\d+/i);
    const practiceSet = practiceSetMatch
      ? practiceSetMatch[0].replace(/\s+/g, " ").trim()
      : "Practice Set";

    const qItems = quiz.querySelectorAll(".wpProQuiz_list > li.wpProQuiz_listItem");
    const questions = [...qItems].map((item, idx) => {
      const num =
        item.querySelector(".wpProQuiz_header span")?.textContent?.trim() ||
        String(idx + 1);
      const qHtml = item.querySelector(".wpProQuiz_question_text")?.innerHTML || "";
      const qId = item.querySelector(".wpProQuiz_questionList")?.dataset?.question_id;
      const options = [...item.querySelectorAll(".wpProQuiz_questionListItem")].map(
        (li, i) => {
          const label = li.querySelector("label");
          const input = li.querySelector("input");
          const text = label ? label.textContent.trim() : "";
          const isCorrectClass = li.classList.contains("wpProQuiz_answerCorrect");
          return {
            letter: String.fromCharCode(65 + i),
            text,
            value: input?.value,
            isCorrectClass,
          };
        }
      );
      const meta = qId && correctMap[qId] ? correctMap[qId] : null;
      let correctLetters = [];
      if (meta?.correct) {
        meta.correct.forEach((v, i) => {
          if ( v) correctLetters.push(String.fromCharCode(65 + i));
        });
      } else {
        correctLetters = options.filter((o) => o.isCorrectClass).map((o) => o.letter);
      }
      const correctDiv = item.querySelector(".wpProQuiz_correct");
      const explanation = htmlToMd(correctDiv?.innerHTML || "");
      return {
        num,
        qId,
        question: htmlToMd(qHtml),
        options: options.map(({ letter, text, value }) => ({ letter, text, value })),
        correct: correctLetters,
        explanation,
      };
    });

    return {
      pageUrl,
      practiceSet,
      quizId: quiz.id?.replace("wpProQuiz_", "") || "",
      totalQuestions: questions.length,
      questions,
    };
  }

  const base = "https://skillcertpro.com/az-104-exam-questions/";
  const results = [];
  const errors = [];

  for (let page = 1; page <= 22; page++) {
    const url = page === 1 ? base : `${base}${page}/`;
    try {
      const html = await fetch(url).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.text();
      });
      const data = extractFromHtml(html, url);
      if (!data) {
        errors.push({ page, url, error: "No quiz found" });
        continue;
      }
      results.push({ page, ...data });
    } catch (e) {
      errors.push({ page, url, error: e.message });
    }
  }

  return {
    extractedAt: new Date().toISOString(),
    totalPages: results.length,
    totalQuestions: results.reduce((s, r) => s + r.totalQuestions, 0),
    errors,
    pages: results,
  };
}

return extractAllPages();
