# HireMe Mock Interview App

An interactive web application for practicing mock interviews. Built using **React**, **Redux Toolkit**, and **TypeScript**. This project demonstrates my ability to architect scalable, responsive, and maintainable front-end applications with real-world features.

## Features

-   View curated default question sets with tags, difficulty, and metadata
-   Create and manage your own custom question sets (like playlists)
-   Mark question sets as favorites and persist them in localStorage
-   Simulate a real mock interview with stopwatch or countdown timer to get your timing right
-   Navigate questions with a smooth and responsive UI
-   Fully typed with TypeScript, modular file structure, and reusable components

## Tech Stack

| Tech              | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| **React**         | Functional components with hooks                                 |
| **TypeScript**    | Strong typing and component-level safety                         |
| **Redux Toolkit** | Scalable state management with slices, selectors, and middleware |
| **Vite**          | Fast, modern build tooling                                       |
| **Tailwind CSS**  | Utility-first styling for responsive UIs                         |

---

## Project Structure

```
src/
├── app/                  # Redux store, hooks, middleware, listeners
├── components/           # Reusable UI components
│   ├── features/         # Feature-level UI (Timer, Navigation, etc.)
│   ├── layout/           # Layout elements (Header, Footer, Section)
│   └── shared/           # Base components (Button, TimerBase, etc.)
├── data/                 # Static default question sets
├── features/             # Redux slices, selectors, and types
│   └── questionSets/     # Unified slice for all question sets
├── layouts/              # App-wide layout with Navbar + Footer
├── pages/                # Route-based pages (Home, About, UserSet, etc.)
├── utils/                # Helper functions (ID generation, source labels)
```

## What I Learned

This project helped me gain experience with:

-   Designing front-end applications using modern TypeScript and Redux architecture
-   Writing scalable, dynamic components with props and shared logic
-   Managing state persistently across components with middleware and `localStorage`
-   Creating a responsive, accessible UI with Tailwind
-   Implementing reusable components (Timer, Toggle, Card, Navigation)
-   Structuring folders and state slices for long-term project maintainability
