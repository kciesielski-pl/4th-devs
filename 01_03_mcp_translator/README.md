
# Automatyczny Tłumacz MCP (01_03_mcp_translator)

Agent monitorujący folder i tłumaczący pliki na angielski przez MCP z HTTP API.

## 📝 Opis
Łączy files-mcp do obsługi systemu plików z translation loop. Agent skanuje `workspace/translate/` za plikami, przetłumacza je na angielski z Open AI, zapisuje do `workspace/translated/`. Exponuje też HTTP API na porcie 3000 do on-demand translacji. Pokazuje praktyczną automatyzację: watch folder → read files via MCP → translate → write results.

## 🎯 Zastosowania
- Automatyczne tłumaczenie dokumentacji między czterema językami
- Obsługa wielojęzycznego contentu w aplikacjach SaaS
- Pipeline ETL który przetwarza pliki po ich pojawieniu się
- Integracja tłumaczenia w workflow GitHub Actions lub cron jobs

## 💡 Zapamiętaj
- Stdio transport MCP dla files-mcp — dziecko proces komunikuje przez stdin/stdout
- Watch loop + HTTP serwer — dwie niezależne pętle, wspólny MCP client
- Graceful shutdown: `SIGINT`, `SIGTERM` handlers zamykają MCP i server
- Config w `mcp.json` — deklaratywne, nie w kodzie

## 🔧 Szczegóły
- **Lekcja**: [S01E03 - Projektowanie API dla efektywnej pracy z modelem](../../index.html#S01E03)
- **Tagi**: `mcp`, `file-watcher`, `translation`, `agent-loop`, `http-server`
- **Narzędzia**: `@modelcontextprotocol/sdk`, `OpenAI`, `Node.js`, `consola`, `file-mcp`
- **Uruchomienie**: `npm run lesson3:mcp_translator`

---

## 🛠️ Technical Details / Jak to działa

# 01_03_mcp_translator

Translation agent built on `files-mcp` that watches a folder and writes English versions of incoming files.

## Run

```bash
npm run lesson3:mcp_translator
```

## Example curl

```bash
curl -X POST "http://localhost:3000/api/translate" -H "Content-Type: application/json" -d '{"text":"To jest przykladowy tekst po polsku."}'
```

## What it does

1. Connects to the `files` MCP server defined in `mcp.json`
2. Watches `workspace/translate/` for supported files
3. Saves translated output to `workspace/translated/`
4. Exposes `POST /api/chat` and `POST /api/translate`

## Tools

| Tool | Description |
|------|-------------|
| `fs_read` | Read files and explore directories |
| `fs_search` | Find files and search content |
| `fs_write` | Create and update files |
| `fs_manage` | Structural file operations |

## Notes

Put source files in `workspace/translate/`. The example creates missing directories on startup.
