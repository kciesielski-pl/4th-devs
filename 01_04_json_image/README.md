
# Token-Efficient JSON Image Generation (01_04_json_image)

Generowanie obrazów z reusable JSON prompt templates zamiast raw text.

## 📝 Opis
Agent zarządza JSON prompt templates zamiast pisać raw text cada raz. Workflow: copy template.json → edit subject section → generate from full JSON. Pozwala na structured, token-efficient prompting — zmienia się jedynie subject, reszta (style, medium, lighting) preserved. Demo queries oraz MCP file tools.

## 🎯 Zastosowania
- Batch generowanie obrazów z konsistentnym stylem across assets
- Prompt engineering — JSON struktura clarity vs raw prompt ambiguity
- Multi-user systems — każdy user ma own template, edit flow consistent
- A/B testing — vary JSON sections, track quality metrics

## 💡 Zapamiętaj
- JSON struktury prompts bardziej readable, maintainable, modular niż raw text
- Parametryzacja: subject vs. style vs. lighting vs. composition — każdy section tunable
- Parsing JSON w prompt na Gemini side (str → JSON via gemini-think czy explicit parse)
- Template cloning before edit — prevents overwriting base template

## 🔧 Szczegóły
- **Lekcja**: [S01E04 - Wsparcie multimodalności oraz załączników](../../index.html#S01E04)
- **Tagi**: `image-generation`, `json-prompts`, `token-efficiency`, `gemini`, `prompting`
- **Narzędzia**: `Gemini`, `OpenRouter`, `@modelcontextprotocol/sdk`, `Node.js`
- **Uruchomienie**: `npm run lesson4:json_image`

---

## 🛠️ Technical Details / Jak to działa

# 01_04_json_image

Token-efficient image generation from JSON prompt templates.

## Run

```bash
npm run lesson4:json_image
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. For image generation, set `OPENROUTER_API_KEY` or `GEMINI_API_KEY`.

## What it does

1. Copies `workspace/template.json` into `workspace/prompts/`
2. Edits only the subject section of the copied JSON
3. Generates an image from the full JSON prompt
4. Saves outputs to `workspace/output/`

## Notes

This example is built around reproducible prompt files rather than one-off raw prompts. If both keys are present, image generation prefers OpenRouter with `google/gemini-3.1-flash-image-preview`. Use `clear` to reset the conversation and `exit` to quit the REPL.
