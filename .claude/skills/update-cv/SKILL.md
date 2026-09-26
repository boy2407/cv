---
name: update-cv
description: Update Nguyen Trong Nghia's CV from the current version with new information (new job, experience, project, dates, links, skills, target company/role) and export a 1-page PDF. Use when the user says "update CV", "cập nhật CV", "thêm kinh nghiệm/dự án vào CV", "sửa CV", or wants to tailor the CV for a company.
---

# Update CV

The CV exists in two languages next to this file:

- `cv.html` — English (main version)
- `cv-vi.html` — Vietnamese

They are the source of truth — always **edit them**, never rewrite from scratch, and keep their styles. **Every change must be applied to both files** so they stay in sync (same sections, same order, same facts).

## Workflow

1. Read `cv.html` and `cv-vi.html` to see the current content.
2. Collect the new information from the user. If something essential is missing (dates, project type, what they actually did), ask — do not guess.
3. If a project repo is given (GitHub URL or local path), read its README, dependency file (pom.xml, requirements.txt, *.csproj, package.json) and main code/commits before writing bullets. Only describe features that exist and that the user says they built.
4. If a target company is given, research it briefly (website, products, tech) and tailor the title, summary and project order to that role.
5. Edit `cv.html`, then apply the same change to `cv-vi.html`.
6. Render both PDFs (from the cv folder):
   - `bash .claude/skills/update-cv/render.sh B24_JavaBackend_NguyenTrongNghia.pdf`
   - `bash .claude/skills/update-cv/render.sh B24_JavaBackend_NguyenTrongNghia_VI.pdf cv-vi.html`

   Each prints the page count and a preview screenshot path — Read the screenshots to check layout. Both must be **1 page**; if not, shorten bullets in both files.
7. Report to the user (in Vietnamese): what changed, and any placeholders still missing (e.g. `Link` without URL).

## Writing rules

- `cv.html` in **English**; `cv-vi.html` in natural **Vietnamese** (keep tech terms, job titles and project names in English; dates as `MM/YYYY`, "Hiện tại", "Dự án cá nhân", "Đồ án môn học"). Talk to the user in **Vietnamese**.
- **Plain, everyday wording in both languages.** Write the way a hiring manager talks: short sentences, common words, one idea per bullet, start each bullet with a simple verb. Say what was built and why it matters, not how impressive it sounds.
  - English: prefer Built, Added, Worked on, Fixed, Wrote, Ran, Used, Integrated, Documented. Avoid stiff or buzzword verbs (Leveraged, Spearheaded, Orchestrated, Architected, Facilitated) and jargon a reader would have to decode — e.g. "Vietnamese product search (with or without accents)" instead of listing extension names.
  - Vietnamese: natural spoken-professional Vietnamese, not administrative style. Prefer Xây dựng, Làm chức năng, Tham gia phát triển, Tìm và sửa lỗi, Viết, Chạy, Tích hợp, Áp dụng. Avoid heavy Sino-Vietnamese phrasing ("trong công tác", "tài liệu hóa", "tuân thủ", "khắc phục") and word-by-word translation. Keep "tại ngũ", "Khóa luận tốt nghiệp", "ĐHQG TP.HCM", "quản trị viên".
  - Both files say the same thing; translate meaning, not words.
- The candidate is early-career (a bit above fresher). Use **safe wording**: Developed, Implemented, Contributed to, Supported, Applied. Avoid "Junior", "Architected", "Led", "high-performance", and any metric the user has not confirmed.
- Concise and professional: summary 2 sentences; 2–4 bullets per project; last bullet is `Tech Stack: ...`.
- Project header format:
  `<div class="item">NAME <span>| <a href="URL"><u>Link</u></a> | <i>Personal Project · Mon YYYY – Mon YYYY</i></span></div>`
  (type is `Personal Project` or `Course Project`; use plain `<u>Link</u>` if no URL yet).
- Section order: Career Summary → Skills → Experience → Projects → Education.
- Experience: company header with dates, then an italic sub-heading per project (`<div class="sub">`).
- Put projects matching the target role's main language first (Java role → Spring Boot projects first).
- Do not add back removed items (Dong An college degree, "warrior" wording) unless asked.

## Facts to keep consistent

- Current job: Software Engineer · wearesection, May 2026 – Present (AEM Java backend + bugfix; Katalon test automation).
- Education: VNUHCM – UIT, June 2022 – 2027, GPA 3.5. Thesis (VietJobs, group project, ongoing): one line only under Education — occupation classification and salary estimation from Vietnamese job postings (PhoBERT, Python). Do not list it under Projects for backend roles.
- SaigonDepot: personal, Jul 2026 – Aug 2026 (Spring Boot, PostgreSQL). E-Commerce-API: course, Feb 2026 – May 2026 (.NET, RAG AI search). Bookstore API: course, Sep 2022 – Dec 2022 (Django, VNPAY) — https://github.com/boy2407/django-api-bookstore.
