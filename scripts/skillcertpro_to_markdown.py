#!/usr/bin/env python3
"""Convert SkillCertPro quiz JSON (from browser CDP extraction) to Markdown."""

import json
import re
import sys
from pathlib import Path


def clean_explanation(text: str) -> str:
    if not text:
        return ""
    text = re.sub(r"^(Correct|Incorrect)\s+", "", text.strip(), flags=re.MULTILINE)
    text = re.sub(r"\t+", "", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def question_to_markdown(q: dict) -> str:
    lines = [f"### Question {q['num']}", "", q["question"], ""]
    lines.append("**Options:**")
    lines.append("")
    correct = set(q.get("correct", []))
    for opt in q.get("options", []):
        marker = " ✅" if opt["letter"] in correct else ""
        lines.append(f"- **{opt['letter']}.** {opt['text']}{marker}")
    lines.append("")
    if correct:
        ans = ", ".join(sorted(correct))
        lines.append(f"**Correct answer:** {ans}")
        lines.append("")
    explanation = clean_explanation(q.get("explanation", ""))
    if explanation:
        lines.append("**Explanation:**")
        lines.append("")
        lines.append(explanation)
    lines.append("")
    lines.append("---")
    lines.append("")
    return "\n".join(lines)


def quiz_to_markdown(data: dict) -> str:
    practice_set = data.get("practiceSet", "Practice Set")
    total = data.get("totalQuestions", len(data.get("questions", [])))
    page_url = data.get("pageUrl", "")

    lines = [
        f"# {practice_set}",
        "",
        f"Source: [{page_url}]({page_url})",
        f"Total questions: {total}",
        "",
        "---",
        "",
    ]
    for q in data.get("questions", []):
        lines.append(question_to_markdown(q))
    return "\n".join(lines)


def load_quiz_data(path: Path) -> dict:
    raw = json.loads(path.read_text(encoding="utf-8"))
    if "result" in raw and "value" in raw.get("result", {}):
        return raw["result"]["value"]
    return raw


def main() -> None:
    if len(sys.argv) < 3:
        print("Usage: skillcertpro_to_markdown.py <input.json> <output.md>")
        sys.exit(1)

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    data = load_quiz_data(input_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(quiz_to_markdown(data), encoding="utf-8")
    print(f"Wrote {output_path} ({len(data.get('questions', []))} questions)")


if __name__ == "__main__":
    main()
