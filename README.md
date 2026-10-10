# Code Wizards 🧙‍♂️

**CCCC: Code, Collaborate, Connect & Community**

![Code Wizards demo](codewiz.gif)

A magical, fantasy-themed event website for a community of aspiring and current software engineers. The site gamifies networking by framing hackathons, conferences, and meetups as quests for "wizards" to team up, form guilds, and grow their careers together.

> **Note:** This project was created for my **Web 101** class, **Spring 2025**.

---

## About

This website is inspired by Quincy Larson, the founder of FreeCodeCamp, who credits attending networking events as the spark that created his career. Networking is often viewed as intimidating, and the events themselves may seem like they hardly ever happen — which makes it easy to avoid. The goal of this project is to **incentivize networking by gamifying it**.

**What to expect:**

- **Code** — alongside fellow aspiring or current software engineers in your community.
- **Collaborate** — during hackathons, meetings, or to create your own startups.
- **Connect** — and network to build friendships you can lean on for your future career.
- **Community** — engagement.

## Preview 

Here is the site's dark mode toggle in action, switching between the light forest scene and the dark forest scene with its matching wallpaper:

![Dark mode toggle demo](darkmode.gif)

## Features

- **Dark / light mode toggle** — with an animated scene and background wallpaper transition.
- **RSVP form** — collects first name, last name, email, and an optional guild, with built-in form validation.
- **Live participant list** — each successful RSVP is appended to the list and the running count updates automatically.
- **Success modal** — a personalized thank-you message with an animated wizard mascot that displays after RSVPing.
- **Event schedule** — cards highlighting hackathons, conferences, and community meetups.
- **Curated links** — quick access to hackathon listings and top computer science conferences.
- **Embedded video** — an introduction to the coding community.

## Tech Stack

- **HTML5** — semantic page structure
- **CSS3** — layout, theming, and animations
- **JavaScript (Vanilla)** — DOM manipulation, dark mode logic, form handling, and the success modal

## Project Structure

```
First Website/
├── index.html      # Page markup and content
├── styles.css      # Styling, themes, and layout
├── index.js        # Dark mode, form handling, and modal logic
├── codewiz.gif     # Demo animation
├── darkmode.gif    # Dark mode toggle demo animation
├── README.md
├── img/            # Images, logos, and background art
└── .vscode/        # Editor settings
```

## Getting Started

No build tools or dependencies are required — it's plain HTML, CSS, and JavaScript.

1. Clone or download this repository.
2. Open `index.html` in your web browser.

For live reload while editing, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code.

## How to Use

- Click **Dark Mode** in the navigation bar to switch between the light and dark themes.
- Fill out the **RSVP** form (all fields except *Guild* are required) and submit to add yourself to the participant list.
- A success modal will appear with a personalized message to confirm your RSVP.

## License

Created for educational purposes as part of a **Web 101** course (Spring 2025). Feel free to reference it for learning.
