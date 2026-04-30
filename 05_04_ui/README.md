
# Platform UI — Svelte 5 + Tiptap + command palette (05_04_ui)

Frontend Svelte 5 dla platform API: Tiptap editor, MCP management UI, command palette.

## 📝 Opis
Frontend dla 05_04_api. Svelte 5 + Vite. Multi-tenant auth, workspace switching, streamed responses przez SSE. Tiptap editor z mention (@agent) i file paste. Command palette (conversations, agents, MCP, tools, workspaces). UI do zarządzania MCP serverami. Virtual list dla długich historii.

## 🎯 Zastosowania
- Frontend dla własnej AI platformy (Cursor/Linear-style UX)
- Edytor wiadomości z mention agentów i plików (TipTap)
- MCP server management bez ręcznej edycji JSON

## 💡 Zapamiętaj
- Tiptap extensions to potężna baza pod AI-aware editor
- Virtual scrolling dla wydajności w długich wątkach
- Command palette (Ctrl+K) — must-have UX dla power-userów

## 🔧 Szczegóły
- **Lekcja**: [S05E04 - Produkcja](../../index.html#S05E04)
- **Tagi**: `svelte-ui`, `tiptap-editor`, `mcp-management`, `multi-tenant`, `command-palette`
- **Narzędzia**: `Svelte 5`, `Tiptap`, `Tailwind CSS`, `Vite`, `Biome`
- **Uruchomienie**: `npm run lesson24:ui`

---

## 🛠️ Technical Details / Jak to działa

# 05_04_ui

Svelte 5 streaming chat frontend that connects to the `05_04_api` backend via SSE and REST.

## Run

```bash
bun install
bun run dev
```

Opens the Vite dev server on `http://localhost:5173`. API calls are proxied to the backend at `http://127.0.0.1:3000` (override with `VITE_BACKEND_ORIGIN`).

Production build:

```bash
bun run build
bun run start
```

## Required setup

1. Start the `05_04_api` backend first — the UI is a pure frontend with no server of its own.
2. Optionally set `VITE_API_BASE_URL` and `VITE_API_TENANT_ID` in a local `.env` file.

## What it does

1. Multi-tenant auth with email/password login and workspace switching
2. Streamed assistant responses via SSE with rAF-batched event materialisation
3. Tool call / result cards, thinking blocks, artifact previews, web search blocks, delegation blocks
4. Tiptap-based prompt editor with agent mentions, file mentions, and image paste
5. Command palette (conversations, agents, MCP servers, tool profiles, workspaces)
6. MCP server management (stdio + streamable HTTP, OAuth, tool assignment)
7. Agent and tool profile CRUD forms
8. Lightbox for images, virtual message list for long histories, keyboard shortcuts

## Notes

The frontend is framework-only — all AI, tool execution, and MCP orchestration happens in `05_04_api`. Tests run with `bun run test` (Vitest). Linting and formatting use Biome (`bun run lint` / `bun run format`).
