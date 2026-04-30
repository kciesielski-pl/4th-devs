
# Generowanie Wideo (Frame-Based Animation) (01_04_video_generation)

Generowanie framów start/end i animacja do wideo via Kling i Replicate.

## 📝 Opis
Agent generuje start frame i end frame dla sceny używając OpenRouter/Gemini, następnie animuje transition via Kling (Replicate API). Workflow: template.json → copies to prompts/ → edit subject section → generate frames → animate. Saves do workspace/output/. REPL dla multi-turn prompting.

## 🎯 Zastosowania
- Generowanie product demo videos z text descriptions
- Story-driven content creation — scene transitions
- Marketing explainer videos bez scenarzystów
- Visual storyboarding tool dla filmowców

## 💡 Zapamiętaj
- Kling API dostępny przez Replicate — long context video, smooth transitions
- Dwa frame approach (start/end) lepszy niż single keyframe dla transition quality
- JSON prompts reusable — edit subject, style stays — token efficient
- Replicate polling pattern — wait for job completion asynchronously

## 🔧 Szczegóły
- **Lekcja**: [S01E04 - Wsparcie multimodalności oraz załączników](../../index.html#S01E04)
- **Tagi**: `video-generation`, `kling`, `replicate`, `image-generation`, `agent`
- **Narzędzia**: `replicate`, `@modelcontextprotocol/sdk`, `Gemini`, `OpenRouter`, `Node.js`
- **Uruchomienie**: `npm run lesson4:video_generation`

---

## 🛠️ Technical Details / Jak to działa

# 01_04_video_generation

Frame-based video generation with OpenRouter or Gemini for frames and Kling via Replicate for animation.

## Run

```bash
npm run lesson4:video_generation
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. For frame generation, set `OPENROUTER_API_KEY` or `GEMINI_API_KEY`.
4. Set `REPLICATE_API_TOKEN` for Kling video generation.

## What it does

1. Copies `workspace/template.json` into `workspace/prompts/`
2. Generates a start frame and an end frame for the same scene
3. Animates the transition into a video
4. Saves frames and videos to `workspace/output/`

## Notes

The best results come from using both start and end frames for the animation. `GEMINI_API_KEY` is still required if you want native video analysis, while frame generation prefers OpenRouter with `google/gemini-3.1-flash-image-preview` when both keys are present. Use `clear` to reset the conversation and `exit` to quit the REPL.
