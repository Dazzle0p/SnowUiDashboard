# SnowUI Dashboard

A responsive, user-friendly dashboard built with **React**, **TypeScript**, and **Tailwind CSS**, designed to showcase UI skills, API integration, reusable components, and interactivity.

[Live Demo](https://snow-ui-dashboard.vercel.app/)
[GitHub Repo](https://github.com/aehamdy/snowui-dashboard)

---

## ✨ Features

- **Data fetching** from a live API (`https://scopey.onrender.com/api/session/sessions`)
- **Search functionality** by client name
- **Light/Dark mode toggle**
- **Reusable components** like `SearchInput`, `SearchPanel`, `SearchResults`, `Icon`, and layout components
- **Keyboard shortcut**: `Ctrl + K` opens the search panel
- **Fully responsive** layout (mobile & desktop support)
- Display of session data including:
- User image
- Client name
- Date
- Amount
- Status (pulled from API)

---

## Technologies Used

- **React** (with functional components and hooks)
- **TypeScript** (static typing for reliability)
- **Tailwind CSS** (for utility-first responsive styling)
- **React Icons** (icon components)
- **Vite** (for fast development build)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aehamdy/snowui-dashboard.git
cd SnowUI-Dashboard
```

### 2. Install dependencies

npm install

### 3. Create .env file

touch .env
Inside .env, add the following:
VITE_API_URL=https://scopey.onrender.com/api/session/sessions

### 4. Run the development server

npm run dev
Open http://localhost:5173 in your browser.

## Notes

    The search panel can be opened either by clicking the search bar or pressing Ctrl + K.

    Contexts are used to manage UI states like opening and closing the search panel.

    The project uses utility-first CSS with consistent naming and design tokens.

    All statuses shown are fetched directly from the API (no fake generation needed).

## Completed Requirements

Recreated the layout from Figma using React + Tailwind

Fetched and displayed data from a real API

Implemented search functionality

Used reusable components and clean structure

Responsive on mobile and desktop

Added light/dark mode toggle

Bonus: keyboard shortcut for search panel

## Contact

Built with ❤️ by Ahmed Essam — GitHub: https://github.com/aehamdy

---

Let me know if you'd like to add badges (e.g. build passing, Vercel deployed), a license section, or contribution guidelines.
