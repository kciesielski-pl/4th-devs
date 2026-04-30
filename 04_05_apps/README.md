
# MCP Apps — sandboxowane UI w iframe'ach (04_05_apps)

Remote MCP zwraca ui:// resources, host montuje aplikacje w sandboxowanych iframe'ach.

## 📝 Opis
Architektura z trzema rolami: MCP server (rejestruje tools + UI resources), browser host (renderuje czat i montuje apki w iframe'ach), embedded apps (SDK MCP Apps, działają lokalnie w iframe). Zamiast płaskiej listy tooli, operacje grupowane są w workflowy biznesowe (kampanie, kupony, newslettery, sales, Stripe).

## 🎯 Zastosowania
- Marketing-ops dashboardy w czacie (todo, newslettery, sale)
- Zarządzanie zamówieniami / kuponami / Stripe przez agenta
- Workflow-focused interfejsy zamiast listy 100 tooli

## 💡 Zapamiętaj
- Rozdzielenie tooli app-only od model-visible — czystszy system prompt
- AppBridge: kanał host ↔ app dla state sync
- Sandboxing iframes = bezpieczna domyślna izolacja UI

## 🔧 Szczegóły
- **Lekcja**: [S04E05 - Projektowanie rozwiązań wewnątrzfirmowych](../../index.html#S04E05)
- **Tagi**: `mcp-apps`, `embedded-ui`, `sandboxing`, `marketing-ops`, `iframes`
- **Narzędzia**: `MCP Apps SDK`, `@modelcontextprotocol/ext-apps`, `Zod`, `AppBridge`
- **Uruchomienie**: `npm run lesson20:apps`

---

## 🛠️ Technical Details / Jak to działa

# 04_05 Apps

`04_05_apps` is a workflow-first MCP Apps example for the course.

It shows how to combine:

- a browser chat host
- a remote HTTP MCP server
- embedded MCP Apps focused on business workflows

Instead of exposing raw tools as a flat list, the example groups actions around
real work such as campaign review, sales monitoring, coupon management, product
updates, and follow-up todos.

## Architecture

There are 3 clear roles in this example:

1. `mcp/`
   Standalone HTTP MCP server. It registers tools and `ui://` resources with
   `registerAppTool()` and `registerAppResource()`.

2. `public/` + `src/`
   Browser host. The host renders chat responses, mounts embedded apps in
   sandboxed iframes, and proxies app requests with `AppBridge`.

3. `mcp/src/interfaces/*`
   Embedded MCP Apps. Each app uses the `App` SDK inside the iframe and can:
   read tool input/results, call server tools, update model context, and request
   host actions such as opening external links.

## Start

Start the remote MCP server first:

```bash
bun run start:mcp
```

Then start the browser host:

```bash
bun run start:host
```

Open the host URL printed in the terminal. By default:

```text
http://127.0.0.1:4406
```

The remote MCP server runs by default at:

```text
http://127.0.0.1:4410/mcp
```

## What To Look At

If you want to understand the full MCP Apps flow, start here:

- `mcp/src/core/marketing-server.js`
  Tool/resource registration and app-only vs model-visible tools.

- `public/host.js`
  Host-side mounting, sandboxing, `AppBridge`, and request forwarding.

- `mcp/src/interfaces/todo-app.js`
  Smallest embedded app that still shows the main MCP Apps lifecycle.

- `mcp/src/interfaces/newsletter-app.js`
  Richer workflow app with app-driven follow-up actions and context updates.

## Canonical Flow

1. The agent calls a tool such as `open_todo_board` or `compare_campaigns`.
2. The MCP server returns normal text plus structured data and a linked
   `ui://...` resource.
3. The browser host reads that resource and mounts it inside a sandboxed iframe.
4. The embedded app connects with the MCP Apps SDK and receives tool input and
   tool result from the host.
5. The user can continue working inside the embedded app without manually
   switching between multiple services.

## Why This Example Exists

This example is meant to show that MCP Apps are most useful when chat alone is
not enough:

- when context comes from many services
- when the user needs a scoped interface, not raw JSON
- when some operations should stay app-driven and not be fully delegated to the
  model

The same remote MCP server can be connected to other MCP Apps-capable clients,
not just this browser host.
