
# Agenci RAG z grafem wiedzy (Neo4j) (02_03_graph_agents)

Wyszukiwanie przez graf: znalezienie encji, eksploracja sąsiadów, odkrycie ścieżek między pojęciami.

## 📝 Opis
System indeksuje dokumenty w Neo4j, wyodrębniając encje i relacje za pomocą LLM. Oferuje hybrydowe wyszukiwanie (full-text + vector) z wyznaczaniem encji oraz eksplorację grafu poprzez: search, explore (sąsiedzi), connect (ścieżki), cypher (zapytania), learn/forget (dodawanie/usuwanie), merge_entities (kuratowanie). Wymaga Neo4j 5.11+ dla indeksów wektorowych.

## 🎯 Zastosowania
- Systemy odkrywania złożonych relacji pomiędzy konceptami
- Analiza sieci w domenach specjalistycznych (medycyna, prawo, nauka)
- Inteligentna eksploracja grafów dla rekomendacji i odkrywania powiązań

## 💡 Zapamiętaj
- Graf wiedzy umożliwia odkrywanie powiązań niedostrzegalnych w klasycznym RAG
- Entity extraction i relationship mapping wymagają zaawansowanego promptingu
- Traversal grafu pozwala systemowi na wieloskokowe rozumowanie

## 🔧 Szczegóły
- **Lekcja**: [S02E03 - Dokumenty oraz pamięć długoterminowa jako narzędzia](../../index.html#S02E03)
- **Tagi**: `graph-rag`, `neo4j`, `entity-extraction`, `knowledge-graph`
- **Narzędzia**: `neo4j-driver`, `Neo4j 5.11+`, `LLM entity extraction`
- **Uruchomienie**: `npm run lesson8:graph_agents`

---

## 🛠️ Technical Details / Jak to działa

# 02_03_graph_agents

Graph RAG agent backed by a Neo4j knowledge graph with hybrid search and entity exploration.

## Run

```bash
npm run lesson8:graph_agents
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Run **Neo4j 5.11+** (needed for vector index support):

```bash
docker run -d --name neo4j -p 7474:7474 -p 7687:7687 -e NEO4J_AUTH=neo4j/password neo4j:5
```

4. Add Neo4j credentials to the local `.env`:

```bash
NEO4J_URI=bolt://localhost:7687
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=password
```

## What it does

1. Indexes `.md`/`.txt` files from `workspace/` — chunks text, extracts entities and relationships via LLM, embeds everything, writes to Neo4j
2. **search** — hybrid full-text + vector retrieval with entity mentions
3. **explore** — traverse an entity's neighborhood in the graph
4. **connect** — find shortest paths between two entities
5. **cypher** — read-only Cypher queries for structural questions
6. **learn / forget** — add or remove documents at runtime
7. **audit / merge_entities** — graph quality maintenance

## Notes

Documents are indexed automatically on startup. Use `reindex` to re-scan (`--force` to wipe and rebuild), `clear` to reset conversation, and `exit` to quit.
