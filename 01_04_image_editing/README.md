
# Image Generation & Editing z Quality Checks (01_04_image_editing)

Generowanie i edytowanie obrazów z automatyczną analizą jakości i adherence.

## 📝 Opis
Agent czyta style-guide.md, generuje nowe obrazy lub edytuje reference images, następnie automatycznie analizuje rezultat pod kątem zgodności z prompt i problemów jakościowych (blocking issues, style consistency). Iteruje jeśli trzeba. Saves do workspace/output/.

## 🎯 Zastosowania
- QA pipeline dla AI-generated assets przed publikacją
- Iterative design — agent edytuje aż do spełnienia kryteriów
- Brand consistency checks — obrazy muszą pasować do style guide
- Content moderation — detekt inappropriate visual elements

## 💡 Zapamiętaj
- Quality check loop: generate → analyze → if (issues) iterate else save
- Vision analysis post-generation — Gemini ewaluuje output, daje feedback
- Style guide reading upfront — agent zna kryteria zanim generuje
- Fallback to text report jeśli visual analysis fails — graceful degradation

## 🔧 Szczegóły
- **Lekcja**: [S01E04 - Wsparcie multimodalności oraz załączników](../../index.html#S01E04)
- **Tagi**: `image-editing`, `image-generation`, `quality-check`, `gemini`, `agent`
- **Narzędzia**: `Gemini`, `OpenRouter`, `@modelcontextprotocol/sdk`, `Node.js`
- **Uruchomienie**: `npm run lesson4:image_editing`

---

## 🛠️ Technical Details / Jak to działa

# 01_04_image_editing

Interactive image generation and editing with quality checks.

## Run

```bash
npm run lesson4:image_editing
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. For image generation and editing, set `OPENROUTER_API_KEY` or `GEMINI_API_KEY`.
4. Add optional source images to `workspace/input/`.

## What it does

1. Reads `workspace/style-guide.md` before generation
2. Generates new images or edits reference images
3. Analyzes the result for prompt adherence and quality issues
4. Saves final files to `workspace/output/`

## Notes

If both keys are present, image generation prefers OpenRouter with `google/gemini-3.1-flash-image-preview`. Use `clear` to reset the conversation and `exit` to quit the REPL.
