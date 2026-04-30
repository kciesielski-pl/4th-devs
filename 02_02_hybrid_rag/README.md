
# Hybrydowy RAG (FTS5 + sqlite-vec) (02_02_hybrid_rag)

Łączenie wyszukiwania słów kluczowych (BM25) z wektorowym i fuzja przez Reciprocal Rank Fusion.

## 📝 Opis
System łączy dwa podejścia: wyszukiwanie pełnotekstowe (FTS5) dla trafności słów kluczowych i wektorowe (sqlite-vec) dla semantyki. Na etapie queryingu oba wyniki łączone są Reciprocal Rank Fusion (RRF) dla optymalnego rankingu. Dokumenty z workspace/ są automatycznie indeksowane w SQLite. Agent wykonuje agentic loop z historią konwersacji. Baza jest lokalna — bez dodatkowej infrastruktury.

## 🎯 Zastosowania
- Production RAG dla małych i średnich zbiorów dokumentów
- Wyszukiwanie o wysokiej precyzji w dokumentach korporacyjnych
- Systemy QA offline bez zależności od dedykowanej bazy wektorowej

## 💡 Zapamiętaj
- Hybrid search (keyword + vector) daje znacznie lepsze wyniki niż każda metoda osobno
- RRF jest eleganckim podejściem do fuzji rankingów z różnych źródeł
- SQLite wystarczy dla efektywnego RAG bez kosztów setupu dodatkowych baz

## 🔧 Szczegóły
- **Lekcja**: [S02E02 - Zewnętrzny kontekst — narzędzia i dokumenty](../../index.html#S02E02)
- **Tagi**: `hybrid-rag`, `sqlite`, `fts5`, `vector-search`, `rrf`
- **Narzędzia**: `better-sqlite3`, `sqlite-vec`, `@modelcontextprotocol/sdk`
- **Uruchomienie**: `npm run lesson7:hybrid_rag`

---

## 🛠️ Technical Details / Jak to działa

# 02_02_hybrid_rag

Hybrid RAG agent with SQLite FTS5 full-text search and sqlite-vec vector similarity.

## Run

```bash
npm run lesson7:hybrid_rag
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.

## What it does

1. Reads `.md`/`.txt` files from `workspace/`, chunks them, generates embeddings
2. Stores everything in SQLite with FTS5 full-text index and sqlite-vec vector index
3. At query time, combines BM25 keyword search with cosine vector similarity via Reciprocal Rank Fusion (RRF)
4. Runs an agentic loop with conversation history

## Notes

Documents in `workspace/` are indexed automatically on startup. Use `reindex` to re-scan, `clear` to reset conversation, and `exit` to quit.
