
# Macierz podobieństwa embedingów (REPL) (02_02_embedding)

Interaktywna macierz pokazująca, które teksty są do siebie semantycznie podobne.

## 📝 Opis
REPL umożliwiający eksperymentowanie z modelami embeddingu (text-embedding-3-small). Każdy wpisany tekst jest embeddowany, a po co najmniej dwóch wpisach pojawia się pełna macierz podobieństwa (cosine similarity). Kolory pokazują stopień podobieństwa: zielony (≥0.60), żółty (≥0.35), czerwony (<0.35). Łatwo widać, które wejścia grupują się razem.

## 🎯 Zastosowania
- Nauka semantyki wektorowej i miary podobieństwa
- Debugowanie jakości embeddingów dla własnych danych
- Testowanie klastrowania tekstów przed wdrożeniem w produkcji

## 💡 Zapamiętaj
- Cosine similarity to standardowa metryka podobieństwa wektorów
- Wizualizacja macierzy pomaga w intuicyjnym rozumieniu klastrów semantycznych
- Różne modele embeddingów dają różne wyniki — warto je porównywać

## 🔧 Szczegóły
- **Lekcja**: [S02E02 - Zewnętrzny kontekst — narzędzia i dokumenty](../../index.html#S02E02)
- **Tagi**: `embedding`, `vector-similarity`, `repl`, `visualization`
- **Narzędzia**: `text-embedding-3-small`, `OpenAI API`
- **Uruchomienie**: `npm run lesson7:embedding`

---

## 🛠️ Technical Details / Jak to działa

# 02_02_embedding

Interactive embedding demo with a pairwise similarity matrix.

## Run

```bash
npm run lesson7:embedding
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.

## What it does

1. Opens an interactive REPL
2. Each text you type is embedded with `text-embedding-3-small`
3. After two or more entries, prints a color-coded similarity matrix (cosine similarity)
4. Makes it easy to see which inputs cluster together

## Notes

Type `exit` or press Enter on an empty line to quit. The matrix uses green (≥ 0.60 similar), yellow (≥ 0.35 related), and red (< 0.35 distant) to visualize scores.
