
# Platform API — multi-tenant + Drizzle + MCP (05_04_api)

Backend API z multi-tenantem, MCP server registration, Drizzle ORM, Langfuse tracing.

## 📝 Opis
Aplikacja platform na Hono z multi-tenant architekturą. Drizzle ORM do migracji DB (SQLite). MCP server registration dla tools/resources per tenant. Multi-provider (OpenAI/Google), memory compaction, Langfuse tracing. Bearer token + X-Tenant-Id auth. Seed tworzy main account z credentials manifest.

## 🎯 Zastosowania
- Budowanie własnej AI platform (SaaS) z izolacją klientów
- Multi-tenant chat backend z dynamicznymi MCP servers per workspace
- Production-grade architektura z tracingiem

## 💡 Zapamiętaj
- Multi-tenant isolation od dnia zero — później bardzo trudna do dorzucenia
- .mcp-servers.json per-projekt = pluggable narzędzia
- Database-backed agent state + Langfuse tracing = obserwable produkcyjnie

## 🔧 Szczegóły
- **Lekcja**: [S05E04 - Produkcja](../../index.html#S05E04)
- **Tagi**: `platform-api`, `multi-tenant`, `drizzle-orm`, `mcp-server`, `hono`, `langfuse`
- **Narzędzia**: `Hono`, `Drizzle ORM`, `MCP SDK`, `better-sqlite3`, `Langfuse`, `Zod`
- **Uruchomienie**: `npm run lesson24:api`
