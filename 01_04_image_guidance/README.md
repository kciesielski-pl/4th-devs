
# Pose-Guided Image Generation (01_04_image_guidance)

Generowanie obrazów z kontrolą pozy przez reference image.

## 📝 Opis
Agent czyta pose reference (walking, running) z workspace/reference/, edytuje subject section w JSON template, generuje finalny obraz w controlled pose. Pozwala na reproducible generations z consistent framing. Workflow: copy template → edit subject → load reference → generate with guidance.

## 🎯 Zastosowania
- Generowanie fashion lookbooks z consistent poses
- Character design sheets z różnymi postawami
- Video asset generation — consistent characters across frames
- E-commerce product shots — items w standardowych pozach

## 💡 Zapamiętaj
- Pose-guided generation — reference image wpływa na output pose bez full inpainting
- JSON template reusability — zmienia się tylko subject, style preserved
- Comparison reference ↔ output — agent może iterate jeśli pose nie pasuje
- Base64 encoding reference images — inline w API requests

## 🔧 Szczegóły
- **Lekcja**: [S01E04 - Wsparcie multimodalności oraz załączników](../../index.html#S01E04)
- **Tagi**: `image-generation`, `pose-guided`, `gemini`, `mcp`, `controlled-generation`
- **Narzędzia**: `Gemini`, `OpenRouter`, `@modelcontextprotocol/sdk`, `Node.js`
- **Uruchomienie**: `npm run lesson4:image_guidance`

---

## 🛠️ Technical Details / Jak to działa

# 01_04_image_guidance

Pose-guided image generation from JSON templates and reference images.

## Run

```bash
npm run lesson4:image_guidance
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. For image generation, set `OPENROUTER_API_KEY` or `GEMINI_API_KEY`.
4. Add pose reference files to `workspace/reference/`.
5. Keep `workspace/template.json` as the base style template.

## What it does

1. Copies `workspace/template.json` into `workspace/prompts/`
2. Edits only the subject section of the copied JSON
3. Uses a pose reference image from `workspace/reference/`
4. Generates final images to `workspace/output/`

## Notes

The default workflow expects a walking pose reference such as `workspace/reference/walking-pose.png`. If both keys are present, image generation prefers OpenRouter with `google/gemini-3.1-flash-image-preview`. Use `clear` to reset the conversation and `exit` to quit the REPL.
