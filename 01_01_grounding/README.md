
# Grounding i Deduplikacja (01_01_grounding)

Osadzanie odpowiedzi modelu w faktach z wyszukiwania oraz unikanie powtórzeń poprzez deduplikację.

## 📝 Opis
Przykład pokazuje pełny pipeline przetwarzania notatek: ekstraktuje koncepty z tekstu, grupuje synonimowe terminy pod kanoniczne etykiety (deduplikacja), wyszukuje źródła faktów w sieci, a następnie osadza te informacje w interaktywnym HTML z tooltipami. Każdy etap działa w równoległych partiach i cachuje wyniki, umożliwiając szybkie przebudowania. Całość integruje Responses API z wyszukiwaniem webowym i strukturyzowanymi outputami.

## 🎯 Zastosowania
- Walidacja faktów w generowanych newsletterach lub artykułach
- Automatyczne tworzenie zasobów edukacyjnych z referencjami źródłowymi
- Zwiększenie zaufania użytkowników poprzez transparentne pokazanie źródeł informacji
- Dedupliciranje podobnych konceptów w dużych bazach wiedzy

## 💡 Zapamiętaj
- Structured Output z `response_format: json_schema` daje 100% przewidywalny, typowany output
- Deduplikacja syntetyczna (grupowanie aliasów) zmniejsza szum i umożliwia bardziej precyzyjne sourcing
- Przetwarzanie batch'ami z cachowaniem pozwala na skalowanie bez nadmiernego zużycia tokenów
- Web search może być zintegrowany bezpośrednio w pipelinę do fact-checkingu w locie

## 🔧 Szczegóły
- **Lekcja**: [S01E01 - Sterowanie zachowaniem modelu z pomocą kodu](../../index.html#S01E01)
- **Tagi**: `structured-output`, `fact-checking`, `web-search`, `openai`, `node`, `deduplication`
- **Narzędzia**: `OpenAI Responses API`, `Structured Output`, `web search`, `Node.js`, `fetch`
- **Uruchomienie**: `npm run lesson1:grounding`

---

## 🛠️ Technical Details / Jak to działa

# 01_01_grounding

Transforms markdown notes into interactive HTML with fact-checked, source-annotated concepts using structured outputs and web search.

## Run

```bash
npm run lesson1:grounding
```

Pass arguments after `--`:

```bash
npm run lesson1:grounding -- my-note.md
npm run lesson1:grounding -- --force
npm run lesson1:grounding -- my-note.md --force
```

## How it works

```
INPUT:  Markdown file (notes/ folder)
  ↓
1. EXTRACT  — 1 paragraph = 1 API call → concepts.json
  ↓
2. DEDUPE   — group synonyms under canonical labels → dedupe.json
  ↓
3. SEARCH   — 1 concept = 1 API call + web search → search_results.json
  ↓
4. GROUND   — 1 paragraph = 1 API call → grounded.html
```

Each stage runs in parallel batches and caches results. Use `--force` to rebuild from scratch.

## Output

All files written to `output/`:

| File | Content |
|------|---------|
| `concepts.json` | Extracted concepts per paragraph with scores |
| `dedupe.json` | Grouped canonical concepts with aliases |
| `search_results.json` | Web search summaries and sources |
| `grounded.html` | Final interactive HTML with tooltips |

## Configuration

Edit `src/config.js` to change models, timeouts, or retry settings.
