
# Render — guardrailed rendering UI z component packs (03_05_render)

Agent generuje strukturyzowane specy UI ograniczone do dozwolonych komponentów analitycznych.

## 📝 Opis
Otwiera browser preview z WebSocket state sync. Trasuje prompty między chat i render intent. Generuje strukturyzowane UI specs ograniczone do allowed component packs (analytics-core, analytics-viz, analytics-table, analytics-insight, analytics-controls). Renderuje specs SSR-em dla deterministycznego preview z inspectable JSON. Output ograniczony do katalogów komponentów — agent nie tworzy dowolnego HTML.

## 🎯 Zastosowania
- Generowanie dashboardów analitycznych z ograniczonego designu
- Deterministyczne UI rendering bez ryzyka HTML injection
- Brand-safe component selection dla aplikacji firmowych

## 💡 Zapamiętaj
- Component guardrails (whitelist) > swobodny HTML — bezpieczeństwo i konsystencja
- Server-side rendering specs daje deterministyczny output
- Structured specs z Zod — walidacja przed renderem

## 🔧 Szczegóły
- **Lekcja**: [S03E05 - Niedeterministyczna natura modeli jako przewaga](../../index.html#S03E05)
- **Tagi**: `component-guardrails`, `live-preview`, `structured-specs`, `analytics`, `zod`
- **Narzędzia**: `Zod`, `OpenAI / OpenRouter`
- **Uruchomienie**: `npm run lesson15:render`

---

## 🛠️ Technical Details / Jak to działa

# 03_05_render

Component-guardrailed rendering agent with live preview and structured specs.

## Run

```bash
npm run lesson15:render
```

Type your prompt in the CLI. Type `exit` to stop.

Dataset demo (seeds business data, picks a random dataset, renders a dashboard):

```bash
cd 03_05_render && bun run demo
```

Optionally force a dataset: `DEMO_DATASET_FILE=sales-activities.csv bun run demo`.

## Required setup

1. Copy `.env.example` to `.env` and fill in any needed values.
2. Optionally set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY` (without a key, rendering falls back to a local synthetic preview).

## What it does

1. Opens a browser preview with WebSocket state sync
2. Routes prompts between chat and render intent
3. Generates structured UI specs constrained to allowed component packs (`analytics-core`, `analytics-viz`, `analytics-table`, `analytics-insight`, `analytics-controls`)
4. Renders specs to HTML server-side for deterministic preview with an inspectable JSON view

## Notes

Output is constrained to the component catalog — the agent cannot produce arbitrary HTML. This ensures consistent, predictable rendering across runs.
