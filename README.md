# React/Vite (TypeScript)
A simple React application demonstrating the usage of Vite, TypeScript, TailwindCSS and RTK Query.

## Features
* Strongly typed components with TypeScript
* Responsive design (e.g., Tailwind CSS)

## Tech Stack
* Frontend: React + TypeScript, Vite
* Styling: Tailwind CSS & Shadcn
* State Management: RTK Query

Other Tools: ESLint, Prettier, Husky (TBD)

## Installation
Make sure you have Node.js installed (v18+ recommended).

# Clone the repository
git clone https://github.com/jlusong15/my-react-app.git

# Navigate to project folder
cd my-react-app

# Install dependencies
```yarn install```

# Start development server
```yarn run dev```

# Build for production
```yarn run build```

# Preview production build
```yarn run preview```


Open http://localhost:5173
 in your browser after running yarn run dev.

## Scripts
| Command | Description |
|---------|-------------|
| `yarn run dev` | Start the development server |
| `yarn run build` | Build the app for production |
| `yarn run preview` | Preview the production build |
| `yarn run lint` | Run ESLint to check code for errors |
| `yarn run format` | Format code using Prettier |

## Folder Structure
```
my-react-app/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ lib/
│  ├─ components/
│  ├─ pages/
│  ├─ types/
│  ├─ services/
│  ├─ store/
│  ├─ utils/
│  └─ App.tsx
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```
