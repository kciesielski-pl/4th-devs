
# Review — komentarze inline anchored do tekstu (04_05_review)

Agent przegląda dokument blok po bloku; komentarze są zakotwiczone do dokładnych cytatów.

## 📝 Opis
Document-centered UI z tooltipami inline-komentarzy. Agent przegląda blokami (lub całość naraz), komentarze anchored do dokładnych fragmentów tekstu. Frontend Svelte 5, backend Node z agent loop. Proponowane zmiany można accept (patch MD), reject lub revert. Streaming progress przez NDJSON.

## 🎯 Zastosowania
- Recenzja dokumentacji technicznej / propozycji
- Korekta stylu i merytoryki z transparentną historią zmian
- QA dla treści marketingowej / blogposts

## 💡 Zapamiętaj
- Anchoring komentarzy do tekstu (nie do całego dokumentu) — UX win
- NDJSON streaming progress — alternative dla SSE
- Concurrency control przy blokowym przetwarzaniu

## 🔧 Szczegóły
- **Lekcja**: [S04E05 - Projektowanie rozwiązań wewnątrzfirmowych](../../index.html#S04E05)
- **Tagi**: `document-review`, `svelte-ui`, `agent-review`, `inline-comments`, `markdown-editing`
- **Narzędzia**: `remark`, `marked`, `OpenAI Responses API`, `gray-matter`, `Svelte 5`
- **Uruchomienie**: `npm run lesson20:review`

---

## 🛠️ Technical Details / Jak to działa

# 04_05_review

Markdown review lab. A document-centered UI with inline comment tooltips, powered by a review agent that anchors suggestions to exact text.

## Run

```bash
bun install
bun run start          # builds frontend + starts server
```

Opens at `http://127.0.0.1:4405`.

For development with HMR, run two terminals:

```bash
bun run dev:server     # backend on :4405
bun run dev:client     # vite on :5174, proxies /api → :4405
```

## How it works

Pick a document and a prompt, hit Run. The agent reviews block by block (or the whole document at once), adding comments anchored to exact quotes. Comments appear as inline highlights — click one or press `j`/`k` to navigate, and a tooltip shows the comment with accept/reject actions.

Accepting a suggestion patches the markdown file. Rejecting dismisses it. Revert undoes an accepted suggestion.

Prompts live in `workspace/prompts`. A prompt can also reference extra workspace files through frontmatter `contextFiles`, which is useful for assets such as internal-linking sitemaps.

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `j` / `k` | Next / previous comment |
| `a` | Accept current suggestion |
| `r` | Reject current comment |
| `u` | Revert accepted suggestion |
| `Esc` | Dismiss tooltip / cancel edit |
| `⌘↵` | Run review |

## Stack

**Backend:** Node server, agent loop with OpenAI Responses API, review engine with streaming NDJSON progress.

**Frontend:** Svelte 5 (runes), Vite, no runtime CSS framework.

**Parsing:** `remark` (unified + remark-gfm) for AST-based block detection, `marked` for inline HTML rendering.

## Structure

```text
04_05_review/
├── app.js                     # entry — starts server
├── src/                       # backend
│   ├── server.js              # HTTP + static file serving
│   ├── review-engine.js       # streaming review, accept/reject/revert
│   ├── agent.js               # tool-calling loop
│   ├── markdown.js            # remark parser + serializer
│   ├── tools.js               # add_comment definition + handler
│   └── store.js               # file-backed docs, prompts, reviews
├── frontend/                  # Svelte 5 source
│   ├── App.svelte
│   ├── components/            # TopBar, DocView, Block, CommentTooltip, StatusBar, Toasts
│   └── lib/                   # state (runes), api, keyboard, inline markdown
├── workspace/
│   ├── documents/             # markdown docs to review
│   ├── prompts/               # review prompts (frontmatter + body)
│   ├── reference/             # optional prompt context, e.g. fake sitemap files
│   ├── reviews/               # persisted review JSON
│   └── system/agents/         # reviewer agent profile
├── vite.config.js
└── public/                    # build output (served by backend)
```
