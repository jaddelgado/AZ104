(() => {
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

  const init = window.wpProQuizInitList?.[0]?.init;
  const correctMap = init?.json || {};
  const quiz = document.querySelector(".wpProQuiz_content");
  const quizId = quiz?.id?.replace("wpProQuiz_", "") || "";
  const practiceSet =
    [...document.querySelectorAll("h2,h3,h4,p,div")].find((e) =>
      /^Practice Set \d+/i.test(e.textContent.trim())
    )?.textContent.trim() || "Practice Set";
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
        if (v) correctLetters.push(String.fromCharCode(65 + i));
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
    pageUrl: location.href,
    practiceSet,
    quizId,
    totalQuestions: questions.length,
    questions,
  };
})();
