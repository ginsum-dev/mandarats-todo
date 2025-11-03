# Mandarat Planner

A Next.js 14 web application for creating and managing Mandarat goal matrices. This MVP allows you to structure your goals in a 3×3 card grid, where each card contains a 3×3 grid of editable boxes (81 boxes total).

## Features

- ✅ **3×3 Mandarat Grid**: 9 cards, each containing 9 editable boxes (81 boxes total)
- ✅ **Main Goal**: The center box of the center card is reserved for your main goal
- ✅ **Sub Goals**: The 8 outer boxes of the center card connect to the centers of the outer cards
- ✅ **Auto-save**: All changes are automatically saved to localStorage
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✅ **Pastel Color Theme**: Beautiful soft pastel colors for each card

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **ShadCN UI**
- **LocalStorage** (client-side persistence)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mandarats-todo/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with TailwindCSS
├── components/
│   ├── mandarat.tsx     # Main Mandarat component
│   └── ui/
│       └── button.tsx   # ShadCN UI Button component
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
└── package.json
```

## Usage

1. Navigate to the home page (`/`)
2. Start editing any box by clicking on it
3. The center box of the center card is for your main goal
4. The 8 outer boxes of the center card are for sub-goals
5. All other boxes can be used for detailed planning
6. All changes are automatically saved to your browser's localStorage

## Data Persistence

All Mandarat data is stored in your browser's localStorage with the key `mandarat-data`. Your data persists across browser sessions until you clear your browser data.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
