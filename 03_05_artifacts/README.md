
# Artifacts — agent tworzenia artefaktów z live preview (03_05_artifacts)

CLI tworzący artefakty (Preact, Chart.js, D3, Tailwind) z live preview przez WebSocket.

## 📝 Opis
Otwiera kartę przeglądarki i streamuje stan apki przez WebSocket. Trasuje prompty między tools chat i create/edit artifact. Generuje artefakty z capability packs (Preact, Chart.js, D3, Tailwind, Zod, day.js, papaparse, xlsx). Wsparcie search/replace dla edycji istniejących artefaktów. Agent celowo żąda packs based on wymagania artefaktu.

## 🎯 Zastosowania
- Generowanie interaktywnych wizualizacji danych w czacie
- Tworzenie dashboardów i raportów ad-hoc
- Real-time iteracja nad artefaktami z preview

## 💡 Zapamiętaj
- Capability packs — modularny, opt-in zestaw bibliotek dla artefaktów
- WebSocket sync dla real-time preview bez page reload
- Search/replace edit pattern dla inkrementacyjnych zmian

## 🔧 Szczegóły
- **Lekcja**: [S03E05 - Niedeterministyczna natura modeli jako przewaga](../../index.html#S03E05)
- **Tagi**: `artifacts`, `live-preview`, `websocket`, `capability-packs`, `preact`, `charts`
- **Narzędzia**: `Preact`, `D3`, `Chart.js`, `Tailwind`, `papaparse`, `xlsx`, `OpenAI / OpenRouter`
- **Uruchomienie**: `npm run lesson15:artifacts`

---

## 🛠️ Technical Details / Jak to działa

# 03_05_artifacts

CLI artifact agent with live browser preview, WebSocket sync, and capability packs.

## Run

```bash
npm run lesson15:artifacts
```

Type your prompt in the CLI. Type `exit` to stop.

Dataset visualization demo (seeds business data, picks a random dataset, renders a chart):

```bash
cd 03_05_artifacts && bun run demo
```

Optionally force a dataset: `DEMO_DATASET_FILE=sales-activities.csv bun run demo`.

## Required setup

1. Copy `.env.example` to `.env` and fill in any needed values.
2. Optionally set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY` (without a key, artifact generation falls back to a local placeholder renderer).

## What it does

1. Opens a browser tab automatically and streams app state via WebSocket in real time
2. Routes prompts between chat and create/edit artifact tools
3. Generates artifacts using capability packs (Preact, Chart.js, D3, Tailwind, Zod, day.js, etc.)
4. Supports search/replace editing of existing artifacts

## Notes

Available capability packs: `core`, `preact`, `validation`, `date`, `sanitize`, `charts`, `viz`, `csv`, `xlsx`, `tailwind`. The agent requests packs intentionally based on the artifact requirements.
