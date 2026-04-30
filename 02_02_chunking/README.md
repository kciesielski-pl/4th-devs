
# Strategie chunkowania tekstu (02_02_chunking)

Cztery strategie dzielenia tekstów na fragmenty dla baz wektorowych — porównanie side-by-side.

## 📝 Opis
Projekt porównuje cztery podejścia do chunkowania: stałej długości (characters), separatory strukturalne (headings, paragraphs), kontekst wzbogacony przez LLM (context-enriched) oraz tematyczne granice znalezione przez AI (topics). Każda strategia zapisywana jest w JSONL. Pierwsze dwie są lokalne, ostatnie dwie zużywają tokeny API. Rezultaty zawierają metadata o sekcji i indeksach.

## 🎯 Zastosowania
- Optymalizacja RAG przez eksperymentację ze strategiami chunkowania
- Poprawa jakości retrieval dla specjalistycznych dokumentów (manuały, naukowe)
- Benchmark różnych technik fragmentacji dla oceny coverage i relevance

## 💡 Zapamiętaj
- Chunking semantyczny zwykle daje lepsze wyniki niż stały rozmiar
- LLM-generated kontekstowe prefiksy pomagają w retrievalu
- Wybór strategii wpływa drastycznie na jakość odpowiedzi systemu RAG

## 🔧 Szczegóły
- **Lekcja**: [S02E02 - Zewnętrzny kontekst — narzędzia i dokumenty](../../index.html#S02E02)
- **Tagi**: `chunking`, `text-processing`, `semantic`, `rag-prep`
- **Narzędzia**: `OpenAI API`, `LLM enrichment`, `JSONL`
- **Uruchomienie**: `npm run lesson7:chunking`

---

## 🛠️ Technical Details / Jak to działa

# 02_02_chunking

Four text chunking strategies compared side-by-side.

## Run

```bash
npm run lesson7:chunking
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY` (needed for context-enriched and topic-based strategies).

## What it does

1. Reads `workspace/example.md`
2. Runs four chunking strategies on the same text:
   - **Characters** — fixed-size windows with overlap
   - **Separators** — splits on headings and paragraph boundaries
   - **Context** — separator-based chunks enriched with an LLM-generated context prefix
   - **Topics** — LLM identifies logical topic boundaries and groups text accordingly
3. Saves each result as JSONL in `workspace/example-[strategy].jsonl`

## Notes

The character and separator strategies are purely local. The context and topic strategies call the LLM, so they consume tokens. Pre-generated outputs are already present in `workspace/`.
