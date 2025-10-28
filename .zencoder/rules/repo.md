---
description: Repository Information Overview
alwaysApply: true
---

# Starfix Website Information

## Summary
Starfix Website is a full-stack TypeScript monorepo for a modern web application built with React, Vite, and Express. It serves as a contemporary e-commerce/product showcase website for high-quality construction fasteners and thermal insulation solutions. The project uses pnpm as package manager with shared code between client and server components.

## Structure
The repository is organized as a monorepo with the following main directories:

- **client/**: React TypeScript application with Vite build setup. Contains components, pages, contexts, hooks, and styling.
- **server/**: Express.js server for serving the client-side application and handling routing.
- **shared/**: Shared TypeScript constants and utilities used across both client and server.
- **patches/**: pnpm patches for third-party dependencies (specifically for wouter@3.7.1).

## Language & Runtime
**Language**: TypeScript 5.6.3
**Runtime**: Node.js (target: ESNext)
**Package Manager**: pnpm (10.4.1)
**Build System**: Vite 7.1.7 with esbuild

## Dependencies

**Main Dependencies**:
- React 18.3.1 and React DOM 18.3.1 (UI framework)
- @radix-ui/* (comprehensive UI component library)
- React Query (@tanstack/react-query 4.41.0) for data fetching
- Express 4.21.2 (server framework)
- Tailwind CSS with Tailwind CSS v4 (styling)
- React Hook Form 7.64.0 (form management)
- Zod 4.1.12 (schema validation)
- Framer Motion 12.23.22 (animations)
- Axios 1.12.0 (HTTP client)
- Recharts 2.15.2 (charting library)
- Wouter 3.3.5 (routing, with custom patch applied)

**Development Dependencies**:
- Vitest 2.1.4 (testing framework, configured but not in use)
- Prettier 3.6.2 (code formatting)
- TypeScript 5.6.3 with strict mode
- Vite plugins: @vitejs/plugin-react, @tailwindcss/vite, @builder.io/vite-plugin-jsx-loc
- PostCSS and Autoprefixer (CSS processing)
- tsx 4.19.1 (TypeScript execution)

## Build & Installation
`ash
# Install dependencies
pnpm install

# Development server (starts on port 3000)
pnpm dev

# Production build (builds client with Vite and server with esbuild)
pnpm build

# Start production server
pnpm start

# Type checking
pnpm check

# Code formatting
pnpm format
`

## Main Files & Entry Points
- **client/src/main.tsx**: React application entry point
- **client/index.html**: HTML template served to clients
- **server/index.ts**: Express server entry point (runs on port 3000, defaults to port from environment or 3000)
- **client/src/App.tsx**: Root React component
- **vite.config.ts**: Vite configuration with React plugin, Tailwind CSS, alias paths for @ and @shared
- **tsconfig.json**: TypeScript configuration including paths for @ and @shared aliases

## Build Output
- **Client Build**: Outputs to dist/public/ (configured in vite.config.ts)
- **Server Build**: Outputs to dist/index.js as ESM bundle with external packages excluded
- **Production Serving**: Server serves static files from dist/public and handles client-side routing

## Project Configuration
- **Aliases**: @/* → client/src/*, @shared/* → shared/*
- **Allowed Hosts**: localhost, 127.0.0.1, and Manus-related domains
- **Environment**: Supports NODE_ENV for production/development modes
- **Type Checking**: ESNext module target with strict TypeScript mode
- **Custom Patches**: Wouter router patched via pnpm for specific functionality
