# MindBloom AI

A multilingual mindfulness and mental wellness MVP for adults. MindBloom AI helps people make room for a small, personal practice through mood check-ins, breathing, reflection, journaling, and progress tracking.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Features

- Mood and available-time check-in with local, deterministic recommendations
- A structured multilingual Pranayama Library with mood-matched gentle recommendations and a separately selected vigorous section
- A timed breathing practice with start, pause, resume, reset, and phase guidance
- Mood-personalized Gentle Kumbhaka Breathing with a required breath-hold safety choice and no-hold alternative
- Post-session reflection with a user-reported 1-10 rating
- Private journal entries and mindfulness prompts
- Session history, reset counts, recent ratings, and a simple streak
- English, Punjabi, and Hindi interface and practice instructions
- Browser-local persistence; data stays on this device and is not sent to an AI service

## Configuration

Copy `.env.example` to `.env` to configure local development. `VITE_RECOMMENDATION_MODE=local` uses the built-in recommendation logic. No API key or external AI service is required for this MVP.

## Privacy and scope

Wellness information and journal entries are stored in this browser's local storage. Clearing browser site data removes them. This application provides general mindfulness and wellness information only. It is not a medical diagnostic or treatment application and does not replace qualified professional care.