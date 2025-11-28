# HERO Core TTS

A comprehensive local AI-powered text-to-speech, story generation, and adventure mode application built with React, TypeScript, and Vite.

## Features

### 🎙️ TTS Studio
- Convert text to natural-sounding speech
- 15+ TTS models with various quality tiers
- Multiple voice options per model
- Adjustable speed, pitch, and volume controls
- Real-time waveform player with download support
- History tracking with IndexedDB storage

### 📝 Story Generator
- Generate stories, poems, and scripts with AI
- 7+ LLM models for content generation
- Multiple genre options (Fantasy, Sci-Fi, Mystery, etc.)
- Adjustable length and temperature controls
- Copy and download generated content

### 🎮 Adventure Mode
- Create multi-chapter interactive adventures
- Combine LLM generation with TTS narration
- Chapter-by-chapter navigation
- Save and resume adventures

### 📚 Library
- Browse and manage generated content
- Grid and list view modes
- Search and filter capabilities
- Audio playback controls

### ⚙️ Hardware Detection
- Automatic hardware profiling
- WebGPU and WASM detection
- Performance tier recommendations
- Model suggestions based on hardware

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: Zustand
- **Storage**: IndexedDB (via idb)
- **Icons**: Lucide React

## Project Structure

```
hero_core-tts/
├── src/
│   ├── core/
│   │   ├── models/          # Model registry and types
│   │   ├── hardware/        # Hardware detection
│   │   ├── storage/         # IndexedDB wrapper
│   │   └── tts/            # TTS engine implementations
│   ├── hooks/              # Custom React hooks
│   ├── stores/             # Zustand stores
│   ├── components/
│   │   ├── ui/             # Reusable UI components
│   │   ├── layout/         # Layout components
│   │   ├── tts/            # TTS-specific components
│   │   ├── llm/            # LLM-specific components
│   │   ├── adventure/      # Adventure mode components
│   │   ├── hardware/       # Hardware display components
│   │   └── library/        # Library components
│   ├── pages/              # Page components
│   ├── lib/                # Utility functions
│   └── styles/             # Global styles
├── public/                 # Static assets
└── package.json
```

## Installation

1. Extract the project files
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. Build for production:
   ```bash
   npm run build
   # or
   yarn build
   # or
   bun run build
   ```

## Model Registry

### TTS Models (15+)
- **Kokoro-82M**: High-quality TTS with natural prosody
- **Supertonic-66M**: Balanced efficiency and quality
- **Kitten TTS**: Ultra-lightweight for mobile
- **Piper TTS**: Open-source multilingual support
- **StyleTTS2**: State-of-the-art with style transfer
- **Bark**: Advanced generative TTS with sound effects
- And more...

### LLM Models (7+)
- **Llama 3.2 (1B/3B)**: Compact models for on-device inference
- **Phi-3 Mini**: Microsoft's efficient reasoning model
- **Qwen2 1.5B**: Strong multilingual capabilities
- **SmolLM2 1.7B**: Compact instruction-tuned model
- **Gemma 2B**: Google's efficient chat model
- And more...

### Additional Models
- **Voice Cloning**: OpenVoice, XTTS v2
- **Music Generation**: MusicGen Small
- **Transcription**: Whisper (Tiny, Base)

## Core Features

### Hardware Detection
The app automatically detects:
- WebGPU support
- WASM capabilities
- CPU cores and memory
- Device type (mobile/tablet/desktop)
- Performance tier (low/medium/high)

### Storage
All data is stored locally using IndexedDB:
- TTS generation history
- LLM generation history
- Adventure progress
- Audio blobs
- User settings

### TTS Engine
- Base engine class with WAV encoding
- Kokoro.js integration (stub)
- Web Speech API fallback
- Singleton manager pattern

## Configuration

### Performance Modes
- **Low**: Minimal resource usage
- **Medium**: Balanced performance (default)
- **High**: Maximum quality

### Theme Support
- Light mode
- Dark mode
- System preference (default)

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Type Checking
TypeScript is configured with strict mode enabled. The project includes:
- Path aliases (`@/*` points to `src/*`)
- Strict type checking
- Full React 18 types

## Browser Support

- Modern browsers with ES2020 support
- WebGPU support (optional, for GPU acceleration)
- WebAssembly support (recommended)
- IndexedDB support (required)

## Future Enhancements

- [ ] Implement actual Kokoro.js integration
- [ ] Add transformers.js for LLM inference
- [ ] WebGPU acceleration for models
- [ ] Export adventures to various formats
- [ ] Cloud sync capabilities
- [ ] Voice cloning interface
- [ ] Music generation UI
- [ ] Speech-to-text interface

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Model information from Hugging Face community

---

**Note**: This is a demonstration application. The TTS and LLM engines include stub implementations that generate mock data. To use real models, integrate libraries like `kokoro-js` and `@xenova/transformers`.
