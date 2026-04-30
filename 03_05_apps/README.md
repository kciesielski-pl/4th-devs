
# Apps — MCP app server z UI w przeglądarce (03_05_apps)

Serwer MCP z app-enabled tool — agent otwiera UI w przeglądarce do edycji list MD.

## 📝 Opis
Uruchamia dwa serwery: UI server (otwierany w przeglądarce) i MCP server z app-enabled narzędziem oraz UI resource. Gdy agent wybiera narzędzie open_list_manager, otwiera się UI. UI edytuje pliki markdown (todo.md, shopping.md), pokazując jedną aktywną listę. Pliki tworzą się automatycznie.

## 🎯 Zastosowania
- Interaktywne zarządzanie listami zadań i zakupów przez czat
- Agent delegujący żmudną pracę edycyjną do UI dla użytkownika
- Live preview integracji MCP apps

## 💡 Zapamiętaj
- MCP apps extension to most między CLI agentem a interaktywnym UI
- Dual-server architecture (UI + MCP) skalowalnie rozdziela odpowiedzialności
- Markdown-driven persistence — proste i odporne

## 🔧 Szczegóły
- **Lekcja**: [S03E05 - Niedeterministyczna natura modeli jako przewaga](../../index.html#S03E05)
- **Tagi**: `mcp`, `apps-extension`, `ui`, `todo`, `shopping-list`, `live-preview`
- **Narzędzia**: `MCP SDK`, `@modelcontextprotocol/ext-apps`, `Vite`, `Tailwind`, `Zod`
- **Uruchomienie**: `npm run lesson15:apps`

---

## 🛠️ Technical Details / Jak to działa

# 03_05_apps

MCP app server with CLI agent, todo/shopping list UI, and live browser preview.

## Run

```bash
npm run lesson15:apps
```

Then ask in the CLI, for example: `open todo manager`, `manage my shopping list`.

## Required setup

1. Copy `.env.example` to `.env` and fill in any needed values.
2. Optionally set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY` (without a key, the app still works with deterministic routing).

## What it does

1. Runs two servers: a local UI server (opens in browser) and an MCP server exposing an app-enabled tool + UI resource
2. When the agent chooses the `open_list_manager` tool, it opens the browser UI
3. The UI edits and saves markdown files (`todo.md`, `shopping.md`), showing one active list at a time

## Notes

Both markdown files are created automatically if they don't exist. Run `cd 03_05_apps && bun run build:ui` to rebuild the UI bundle from `ui/` sources.
