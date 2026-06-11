#!/usr/bin/env python3
"""Build per-page and combined Markdown from extracted SkillCertPro JSON."""

import json
import re
import sys
from pathlib import Path

from skillcertpro_to_markdown import question_to_markdown, quiz_to_markdown, load_quiz_data


def clean_practice_set(name: str, page_num: int) -> str:
    m = re.search(r"Practice Set\s*\d+", name, re.IGNORECASE)
    if m:
        return re.sub(r"\s+", " ", m.group(0)).strip()
    return f"Practice Set {page_num}"


def slugify(name: str) -> str:
    m = re.search(r"(\d+)", name)
    num = m.group(1) if m else "00"
    return f"practice-set-{num.zfill(2)}"


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: build_skillcertpro_markdown.py <all_pages.json>")
        sys.exit(1)

    input_path = Path(sys.argv[1])
    raw = json.loads(input_path.read_text(encoding="utf-8"))

    if "result" in raw and "value" in raw.get("result", {}):
        payload = raw["result"]["value"]
    else:
        payload = raw

    out_dir = Path(__file__).resolve().parent.parent / "skillcertpro-questions"
    out_dir.mkdir(parents=True, exist_ok=True)

    combined_lines = [
        "# AZ-104 SkillCertPro Practice Questions",
        "",
        f"Extracted: {payload.get('extractedAt', 'unknown')}",
        f"Total pages: {payload.get('totalPages', 0)}",
        f"Total questions: {payload.get('totalQuestions', 0)}",
        "",
        "## Practice Sets",
        "",
    ]

    for page_data in payload.get("pages", []):
        practice_set = clean_practice_set(
            page_data.get("practiceSet", "Practice Set"),
            page_data.get("page", 0),
        )
        page_data = {**page_data, "practiceSet": practice_set}
        slug = slugify(practice_set)
        md_path = out_dir / f"{slug}.md"
        md_path.write_text(quiz_to_markdown(page_data), encoding="utf-8")
        combined_lines.append(f"- [{practice_set}]({slug}.md) — {page_data.get('totalQuestions', 0)} questions")
        print(f"Wrote {md_path}")

    combined_path = out_dir / "00-AZ-104_SkillCertPro_All_Practice_Sets.md"
    combined_lines.extend(["", "---", ""])

    for page_data in payload.get("pages", []):
        practice_set = clean_practice_set(
            page_data.get("practiceSet", "Practice Set"),
            page_data.get("page", 0),
        )
        combined_lines.append(f"## {practice_set}")
        combined_lines.append("")
        combined_lines.append(f"Source: {page_data.get('pageUrl', '')}")
        combined_lines.append("")
        for q in page_data.get("questions", []):
            combined_lines.append(question_to_markdown(q))

    combined_path.write_text("\n".join(combined_lines), encoding="utf-8")
    print(f"Wrote {combined_path}")

    if payload.get("errors"):
        print("Errors:", payload["errors"], file=sys.stderr)


if __name__ == "__main__":
    main()
