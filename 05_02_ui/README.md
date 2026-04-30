
# Chat UI — Svelte 5 z SSE streamingiem (05_02_ui)

Production-ready Svelte 5 chat z streamingiem SSE, tool cards, artifact preview, virtual list.

## 📝 Opis
Zaawansowany frontend dla długich historii czatu z event-sourced renderingiem. Serwer Bun streamuje tury asystenta przez SSE. UI obsługuje tool calls, thinking blocks, artifact previews. Wirtualizacja konwersacji dla wydajności. Seeding długich wątków do testów. Domyślny model gpt-4.1, override przez LIVE_UI_MODEL.

## 🎯 Zastosowania
- Bazowy chat UI dla własnego AI agenta
- Streaming odpowiedzi LLM z tool cards i artifactami
- Wsparcie długich konwersacji bez zamulenia UI

## 💡 Zapamiętaj
- Event-sourced materialization — odporność na network blips
- SSE > WebSocket dla większości chat UI (prostsza infrastruktura)
- Wirtualizacja listy wiadomości dla performance

## 🔧 Szczegóły
- **Lekcja**: [S05E02 - Zestaw narzędzi](../../index.html#S05E02)
- **Tagi**: `svelte-ui`, `sse-streaming`, `chat-interface`, `tool-cards`, `virtualization`
- **Narzędzia**: `Svelte 5`, `Vite`, `Bun`, `markdown-it`, `highlight.js`, `DOMPurify`
- **Uruchomienie**: `npm run lesson22:ui`

---

## 🛠️ Technical Details / Jak to działa

# 05_02_ui

A focused example of a **high-quality Svelte 5 chat UI** backed by a **simple Bun-powered streaming server**.

The goal is to prove the front-end architecture for:

- very long chat histories
- streamed assistant text
- tool call / tool result cards
- artifact previews
- event-sourced rendering

## What is included

- `server/index.ts`
  - minimal HTTP server
  - JSON snapshot endpoint for hydration
  - SSE chat endpoint for streaming the newest assistant turn
  - fake tool side effects that write files into `.data/`
- `server/mock.ts`
  - deterministic mock scenarios for sales, email, artifact, and research turns
  - history seeding so the UI can test long threads
- `src/lib/runtime/materialize.ts`
  - pure event-to-block materializer
- `src/lib/components/*`
  - production-minded Svelte components for streamed text, tool interactions, thinking, artifacts, and errors
- `src/lib/stores/chat-store.ts`
  - client-side event log management and SSE consumption

## Run

```bash
bun install
bun run dev
```

This starts:

- the Bun API server on `http://localhost:3300`
- the Vite dev server on `http://localhost:5173`

## Build

```bash
bun run build
bun run start
```

## Notes

- The server is intentionally **mock-first** so the UI can be tuned without paying provider latency or token cost.
- The conversation list is rendered through a lightweight virtualization strategy plus resize measurement.
- Historical messages are hydrated first; only the newest assistant turn streams live.
