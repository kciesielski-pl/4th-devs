
# Generowanie PDF Raportów (01_04_reports)

Generowanie PDF raportów z HTML, embeddowanych assets i AI-generated images.

## 📝 Opis
Agent interaktywny czyta `workspace/template.html` i `workspace/style-guide.md`, generuje pracujące pliki HTML, opcjonalnie generuje obrazy via OpenRouter/Gemini, konwertuje do PDF via Puppeteer. Workflow: HTML generation → image generation → CSS styling → Puppeteer headless Chrome → PDF write.

## 🎯 Zastosowania
- Automatyczne raporty z custom branding i visual assets
- Batch generowanie invoices / certificates z variable data
- E-learning materials z ilustracjami generowanymi AI
- Compliance reports w wielu formatach (PDF + HTML archival)

## 💡 Zapamiętaj
- Puppeteer launch headless Chrome — używa isHeadless: true, executablePath fallback
- CSS inlining dla email/PDF — external stylesheets nie renderują
- AI image generation in loop — cada image call czeka na completion
- PDF dimensions kontrolowane przez CSS @page, margins, paper-size

## 🔧 Szczegóły
- **Lekcja**: [S01E04 - Wsparcie multimodalności oraz załączników](../../index.html#S01E04)
- **Tagi**: `pdf-generation`, `puppeteer`, `html-to-pdf`, `genai`, `report-generation`
- **Narzędzia**: `puppeteer`, `@google/genai`, `@modelcontextprotocol/sdk`, `Node.js`
- **Uruchomienie**: `npm run lesson4:reports`

---

## 🛠️ Technical Details / Jak to działa

# 01_04_reports

PDF report generation from HTML, local assets, and AI-generated images.

## Run

```bash
npm run lesson4:reports
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. For AI image generation inside reports, set `OPENROUTER_API_KEY` or `GEMINI_API_KEY`.
4. Put local assets in `workspace/input/` when needed.

## What it does

1. Reads `workspace/template.html` and `workspace/style-guide.md`
2. Writes working HTML files to `workspace/html/`
3. Optionally generates images with OpenRouter or Gemini
4. Converts the final HTML to PDF in `workspace/output/`

## Notes

If both keys are present, report image generation prefers OpenRouter with `google/gemini-3.1-flash-image-preview`. Use `clear` to reset the conversation and `exit` to quit the REPL.
