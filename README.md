# NexusHub 🌐

> A production-grade 3D virtual workspace that centralizes your meeting platforms in an immersive "Earthy-Tech" environment.

![NexusHub Preview](https://via.placeholder.com/800x400/1a2420/547f54?text=NexusHub+3D+Workspace)

## ✨ Features

- **4 Interactive 3D Nodes** — Teams (modular prism), Zoom (rotating lens), Meet (crystal), Outlook (digital slate)
- **GSAP Cinematic Transitions** — Smooth camera interpolation when opening platforms
- **AI Assistant Character** — Cursor-tracking geometric robot with live meeting alerts
- **Live Meeting HUD** — Real-time countdown, urgency alerts, and schedule overview
- **Earthy-Tech Aesthetic** — Sage, Matte Slate, Warm Clay palette with glassmorphic UI
- **60FPS Optimized** — R3F with DPR scaling, Suspense, and efficient render loops

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) + TypeScript |
| 3D Engine | React Three Fiber + Drei |
| State | Zustand |
| Animation | GSAP |
| Styling | Tailwind CSS |
| Fonts | Playfair Display, Space Mono, DM Sans |

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## 🌍 Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Repository
3. Select this repo → Deploy (zero config needed)

## 🎮 How to Use

| Action | Result |
|--------|--------|
| Mouse drag | Rotate the 3D workspace |
| Click a node | Open platform panel with meeting info |
| Click "Open in New Tab" | Launch the platform |
| Click backdrop / press ESC | Return to 3D workspace |
| Click the robot HUD | Expand meeting schedule |

## 📂 Project Structure

```
nexushub/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout + fonts
│   │   ├── page.tsx          # Main entry
│   │   └── globals.css       # Design tokens + utilities
│   ├── components/
│   │   ├── 3d/               # Three.js / R3F components
│   │   │   ├── NexusScene.tsx    # Main canvas
│   │   │   ├── Room.tsx          # Architecture
│   │   │   ├── AppNodes.tsx      # Node container
│   │   │   ├── AssistantCharacter.tsx
│   │   │   ├── ParticleField.tsx
│   │   │   ├── SceneLights.tsx
│   │   │   └── nodes/
│   │   │       ├── NodeWrapper.tsx   # Base interactivity
│   │   │       ├── TeamsNode.tsx
│   │   │       ├── ZoomNode.tsx
│   │   │       ├── MeetNode.tsx
│   │   │       └── OutlookNode.tsx
│   │   └── ui/               # Glassmorphic overlay UI
│   │       ├── LoadingScreen.tsx
│   │       ├── TopBar.tsx
│   │       ├── AppOverlay.tsx
│   │       ├── AssistantHUD.tsx
│   │       └── NodeInfoTooltip.tsx
│   ├── store/
│   │   └── nexusStore.ts     # Zustand global state
│   ├── hooks/
│   │   └── useNexus.ts       # Custom hooks
│   └── lib/
│       └── appConfig.ts      # Platform config + colors
├── public/
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## 🎨 Design System

### Color Palette (Earthy-Tech)
| Token | Hex | Usage |
|-------|-----|-------|
| Sage | `#547f54` | Primary accent, node halos |
| Clay | `#df6b2e` | Alerts, urgent states |
| Slate Earth | `#3d4a3e` | Surface mid-tones |
| Slate Matte | `#2a3330` | Card backgrounds |
| Slate Deep | `#1a2420` | Scene background |
| Warm Cream | `#f0ead8` | Primary text |
| Muted Gold | `#b8973a` | Warning states |

## 📝 Notes

- iFrames for Teams/Zoom/Meet are blocked by those platforms' own CSP headers, so NexusHub uses a "Launch in New Tab" approach for a reliable, secure experience.
- The GSAP camera animation requires client-side rendering; the canvas is loaded dynamically with `next/dynamic` and `ssr: false`.
- Meeting data is currently simulated. To connect real calendars, integrate Google Calendar API or Microsoft Graph API into `nexusStore.ts`.

## 📄 License

MIT — built for NexusHub workspace platform.
