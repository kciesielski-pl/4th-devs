
# Rozpoznawanie Obrazów (Vision Classification) (01_04_image_recognition)

Klasyfikacja obrazów poprzez analizę wizualną i matching do character profiles.

## 📝 Opis
Agent czyta character descriptions z knowledge/, analizuje każdy obraz w images/, porównuje widoczne cechy do profilów, sortuje do images/organized/<category>/. Non-interactive — uruchamia klasyfikacje, zapisuje wyniki.

## 🎯 Zastosowania
- E-commerce — automatyczne kategoryzowanie produktów z zdjęć
- Character recognition w anime/gry — match walkers do character database
- Document OCR + classification — identyfikuj typ dokumentu
- Visual inventory management — sort items by appearance

## 💡 Zapamiętaj
- Vision LLM — Gemini 1.5 Pro natively rozumie obrazy bez external vision APIs
- Knowledge base design — konkretne profile (height, color, personality) vs. vague descriptions
- File copy to organized/ — agent musi czytać, tworzyć foldery, kopiować
- Batch processing — handle hundreds of images bez context overflow

## 🔧 Szczegóły
- **Lekcja**: [S01E04 - Wsparcie multimodalności oraz załączników](../../index.html#S01E04)
- **Tagi**: `vision`, `image-classification`, `character-matching`, `mcp`, `agent`
- **Narzędzia**: `Gemini`, `@modelcontextprotocol/sdk`, `Node.js`
- **Uruchomienie**: `npm run lesson4:image_recognition`

---

## 🛠️ Technical Details / Jak to działa

# 01_04_image_recognition

Vision-based image classification using MCP file operations and a native image-understanding tool.

## Run

```bash
npm run lesson4:image_recognition
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Put source images in `images/`.
4. Keep character profiles in `knowledge/`.

## What it does

1. Reads the character descriptions from `knowledge/`
2. Analyzes each file in `images/`
3. Matches visible traits against the profiles
4. Sorts files into `images/organized/<category>/`

## Notes

Use `knowledge/*.md` to define the classification rules before running the example.
