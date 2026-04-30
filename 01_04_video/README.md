
# Analiza Wideo (Video Understanding) (01_04_video)

Analiza, transkrypcja i ekstrakcja strukturalnych informacji z wideo.

## 📝 Opis
Agent mogący analizować video (lokalne lub YouTube URLs) przy użyciu Gemini. Ekstrahuje key claims, transkrybuje, analizuje wzorce. Saves JSON outputs do workspace/output/. REPL interface pozwala na multi-turn queries bez restartowania. Confirmation prompt na starcie ostrzega o tokenie cost.

## 🎯 Zastosowania
- Automatyczne generowanie shownotes z YouTube videos
- Ekstrakcja key moments i timestamps z recordingów
- Analiza mowy w video dla QA — tone analysis, filler words
- Crawling instructional videos do knowledge base generation

## 💡 Zapamiętaj
- Gemini video analysis — native support dla MP4, WebM, MPEG-DASH; też YouTube URLs
- Long context model — całe video w jednym requeście bez chunking
- Frame extraction via Gemini API — timestamps, visual analysis
- Combination s file tools (MCP) pozwala na save outputs w structured format

## 🔧 Szczegóły
- **Lekcja**: [S01E04 - Wsparcie multimodalności oraz załączników](../../index.html#S01E04)
- **Tagi**: `video`, `video-analysis`, `gemini`, `mcp`, `agent-loop`
- **Narzędzia**: `Gemini`, `@modelcontextprotocol/sdk`, `Node.js`
- **Uruchomienie**: `npm run lesson4:video`

---

## 🛠️ Technical Details / Jak to działa

# 01_04_video

Video analysis, transcription, extraction, and question answering with Gemini plus MCP file tools.

## Run

```bash
npm run lesson4:video
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Set `GEMINI_API_KEY` for video processing.
4. Put local videos in `workspace/input/` when not using YouTube URLs.

## What it does

1. Reads video files through `files-mcp`
2. Analyzes, transcribes, or extracts structured information from video
3. Saves JSON outputs to `workspace/output/` when requested
4. Supports both local video files and public YouTube URLs

## Notes

Use `clear` to reset the conversation and `exit` to quit the REPL.
