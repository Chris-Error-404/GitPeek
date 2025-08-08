# GitPeek
<br>

## Overview

GitPeek is a mini React application that allows users to search and view GitHub profiles of their friends, colleagues, or favorite developers, just by entering their username. It fetches real-time data from the GitHub API and displays it in a clean, responsive card layout. Perfect for quick lookups and profile sharing. (This project is almost totally useless but i wanted to build something less generic like To Do app with react)

---

<br>

## Why Use GitPeek Instead of Viewing GitHub Directly

- **No clutter, no distractions** – focuses only on the most important profile details without extra sections or visuals.
- **Faster loading and scanning** – loads only the essentials, making it quicker than navigating a full GitHub profile.
- **Consistent layout** – every profile is displayed in the same clean, predictable format.
- **Instant language overview** – aggregates all detected programming languages without opening multiple repositories.
- **Better for quick decisions** – see key information in seconds to decide whether to view the full profile.
- **Privacy-friendly preview** – no need to log in or interact directly with the profile to get the information.

---

<br>

## Project Goals

- Provide a simple and clean GitHub user search experience
- Practice API integration in React using `fetch`
- Showcase how to work with props, state, conditional rendering, and reusable components
- Implement mobile-first responsive design with Tailwind CSS

---

<br>

## Tech Stack & Tools

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) – UI library for building interactive components
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) – Utility-first CSS framework
- ![AOS](https://img.shields.io/badge/-AOS%20CSS-29A19C?logo=css3&logoColor=white&style=for-the-badge) – CSS AOS library
- ![GitHub API](https://img.shields.io/badge/GitHub%20API-181717?style=for-the-badge&logo=github&logoColor=white) – To fetch live GitHub profile data
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) – Fast React development environment
- ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) – Hosting and CI/CD

---

<br>

## How It Works

1. User enters a valid GitHub username.
2. The app fetches their profile data from the GitHub REST API.
3. A profile card component displays their avatar, name, username, bio, and a link to their GitHub page.
4. Handles loading states, errors (e.g., user not found), and responsive layouts.

---

<br>

## Features

- Search any public GitHub account
- Responsive design (mobile-first)
- Reusable and modular components
- Error handling for invalid usernames
- Optional status emoji and bios shown when available

---

<br>

## Contributions

While this is a personal learning project, suggestions, issues, or ideas for improvements are always welcome. Feel free to fork, star ⭐, or open a pull request.

---

```bash
# Clone the repo
git clone https://github.com/your-username/GitPeek.git

# Move into the directory
cd GitPeek

# Install dependencies
npm install

# Start the development server
npm run dev
````
