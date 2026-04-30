
# Przetwarzanie Dźwięku (Speech-to-Text) (01_04_audio)

Transkrypcja i analiza audio oraz text-to-speech integrujące Gemini z MCP file tools.

## 📝 Opis
Agent interaktywny (REPL) mogący transkrybować audio, analizować treść dźwiękową, generować speech-to-text. Integruje Gemini do obsługi audio, ElevenLabs do TTS, MCP files-mcp do czytania/pisania z workspace/input/ i workspace/output/. Obsługuje zarówno lokalne pliki jak YouTube URLs. Każdy query resetuje conversation context, można wyjść lub wyczyścić.

## 🎯 Zastosowania
- Asystenci mogący analizować call recordings dla QA
- Systemy note-taking które konwertują voice memos do tekstu i streszczenia
- Generowanie podcastów z napisów — text-to-speech dla różnych głosów
- Analiza meeting recordings automatycznie ekstrahuje action items

## 💡 Zapamiętaj
- Gemini nativnie wspiera audio analysis — nie trzeba whisper → parse pipeline
- ElevenLabs TTS — naturalny głos, ponad 500 voice'ów, streaming
- REPL interface z `clear` i `exit` commands — użytkownik controls flow
- MCP files tool obsługuje YouTube URLs bezpośrednio — Gemini je pobiera

## 🔧 Szczegóły
- **Lekcja**: [S01E04 - Wsparcie multimodalności oraz załączników](../../index.html#S01E04)
- **Tagi**: `audio`, `tts`, `speech-to-text`, `gemini`, `elevenlabs`, `mcp`
- **Narzędzia**: `Gemini`, `@elevenlabs/elevenlabs-js`, `@modelcontextprotocol/sdk`, `Node.js`
- **Uruchomienie**: `npm run lesson4:audio`

---

## 🛠️ Technical Details / Jak to działa

# 01_04_audio

Audio transcription, analysis, and text-to-speech with Gemini plus MCP file tools.

## Run

```bash
npm run lesson4:audio
```

## Required setup

1. Copy `env.example` to `.env` in the repo root.
2. Set one Responses API key: `OPENAI_API_KEY` or `OPENROUTER_API_KEY`.
3. Set `GEMINI_API_KEY` for audio understanding and TTS.
4. Put source files in `workspace/input/` when working with local audio.

## What it does

1. Reads files from `workspace/input/` through `files-mcp`
2. Transcribes or analyzes audio with Gemini
3. Generates speech to `workspace/output/` when asked
4. Supports both local files and YouTube URLs

## Notes

Use `clear` to reset the conversation and `exit` to quit the REPL.
