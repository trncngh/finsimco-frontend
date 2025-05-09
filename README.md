# Finsimco Frontend

A modern financial simulation and company management frontend application built with Next.js 15 and React 19.

## Tech Stack

- **Framework**: Next.js 15.3.1
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Package Manager**: Yarn 4.5.0

## Project Structure

```
src/
├── app/          # Next.js app directory (pages and layouts)
├── components/   # Reusable UI components
├── constant/     # Application constants and configuration
├── hooks/        # Custom React hooks
└── lib/          # Utility functions and shared logic
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- Yarn 4.5.0 or later

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd finsimco-frontend
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

There is a mock function in `src/lib/action/team.ts` for switching between teams. You can change the team by changing the return value of the function and interact with the other team's UI.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Development

The project uses several modern development tools:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Tailwind CSS** for styling

## UI Components

The project uses Radix UI primitives for accessible and customizable components:

- Accordion
- Avatar
- Dialog
- Dropdown Menu
- Label
- Progress
- Slider
- Toggle
- Tooltip

## UX Enhancements compared to the original design

- Add a progress bar with stage and loading time instead of time counter
- Reorder Buyer's inputs since interest rate is not related to the company valuation formula
- Adding some gentle transition animations

## Room for improvements

- Storybook for component library
- Unit test
- E2E test
- Form validation
- Error handling
- Type safety
- TBD
