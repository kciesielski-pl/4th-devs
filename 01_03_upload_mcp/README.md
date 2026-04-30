
# Upload Agent (Wieloserwerowy MCP) (01_03_upload_mcp)

Agent łączący local files-mcp (stdio) z remote uploadthing-mcp (HTTP).

## 📝 Opis
Demonstruje bardziej zaawansowaną setup: agent połączony z dwoma MCP serverami jednocześnie — local files via stdio, remote upload service via HTTP. Tools są prefixowane nazwą serwera (`files__fs_read`, `uploadthing__upload_files`). Agent czyta pliki z workspace, przesyła je via uploadthing, zapisuje wyniki do `uploaded.md`. Pokazuje OAuth flow dla HTTP servers wymagających auth.

## 🎯 Zastosowania
- Systemy CDN/storage gdzie trzeba połączyć local filesystem z remote upload API
- Batch processing plików z trakowaniem which were already uploaded
- Multi-tenant systems gdzie każdy tenant ma inny upload server
- Backup solution z local read + remote write

## 💡 Zapamiętaj
- Wieloserwerowa MCP: stdio i HTTP transport naraz, prefixed tool names
- ConfigurationError dla validation — sprawdzaj URL placeholder w mcp.json
- OAuth flow automatic: server vrti 401 → OAuth URL → callback handler → tokens saved
- `{{file:path}}` placeholder dla base64 resolution — agent nie koduje ręcznie

## 🔧 Szczegóły
- **Lekcja**: [S01E03 - Projektowanie API dla efektywnej pracy z modelem](../../index.html#S01E03)
- **Tagi**: `mcp`, `multiple-servers`, `http-mcp`, `file-upload`, `agent`
- **Narzędzia**: `@modelcontextprotocol/sdk`, `OpenAI`, `Node.js`, `consola`
- **Uruchomienie**: `npm run lesson3:upload_mcp`

---

## 🛠️ Technical Details / Jak to działa

# 01_03_upload_mcp

Upload assistant that combines a local file MCP server with a remote upload MCP server.

## Run

```bash
npm run lesson3:upload_mcp
```

## Required setup

Before running, edit `mcp.json` and replace:

```json
"url": "https://URL_TO_YOUR_MCP_SERVER/mcp"
```

with the real URL of the MCP deployment you created in the AI_devs lesson, for example:

```json
"url": "https://your-domain.example/mcp"
```

If you leave the placeholder value in place, the example will stop with a validation error.

## What it does

1. Connects to the MCP servers listed in `mcp.json`
2. Lists files in `workspace/`
3. Uploads files that are not already recorded
4. Saves results to `uploaded.md`

## Tools

| Server | Tool | Description |
|--------|------|-------------|
| `files` (stdio) | `fs_read`, `fs_search`, `fs_write`, `fs_manage` | Local file operations in `workspace/` |
| `uploadthing` (http) | *(from your deployment)* | Upload files to the configured remote server |

## Notes

Place files to upload in `workspace/`. The agent skips `uploaded.md` and previously uploaded entries.
