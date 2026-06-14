# Anjana K S — Developer Portfolio

> A modern, dark-themed personal portfolio website showcasing my education, skills, experience, and projects 

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Overview

This is a fully responsive, single-page developer portfolio built with semantic HTML, modern CSS (custom properties, glassmorphism, grid/flexbox, scroll-reveal animations), and vanilla JavaScript. It introduces me, highlights my technical skill set, walks through my experience timeline, showcases my projects, and provides a way to get in touch.

---

## Sections

- **Hero** — Introduction, portrait, status badge, and quick CTAs
- **Quick Contact Strip** — Email, GitHub, and Instagram links
- **About Me** — Education details, CGPA/academic stats, and core values
- **Skills Architecture** — Programming languages, frameworks & libraries, databases & tools, core concepts, and core strengths
- **Experience Timeline** — Programs, hackathons, ideathons, event coordination, and industrial exposure, plus achievements & certifications
- **Work & Internship Projects** — Project cards with descriptions and GitHub links
- **Contact** — Floating-label contact form with front-end validation and status messages

---

## Features

- **Glassmorphic UI** with ambient grid background and glowing accent orbs
- **Sticky Navigation** with scroll-aware styling and a mobile hamburger menu
- **Scroll-Reveal Animations** for sections using the Intersection Observer API
- **Floating-Label Contact Form** with client-side validation (no page reload)
- **Fully Responsive** layout for mobile, tablet, and desktop
- **Accessible** semantic markup with ARIA labels and live status regions

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic, accessible) |
| Styling | CSS3 (Custom Properties, Flexbox, Grid, Backdrop Filter, Animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Typography | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) via Google Fonts |

---

## Project Structure

```
portfolio/
├── index.html      # Main HTML structure
├── style.css       # Styling and animations
├── script.js       # Navigation, scroll reveal, and form logic
├── portrait.jpeg   # Profile image
└── README.md       # Project documentation (this file)
```

---

## How to Run Locally

No build tools or dependencies required.

### Option 1 — Direct Browser Open

1. Clone or download this repository.
2. Open `index.html` in your browser.

### Option 2 — Local Development Server (Recommended)

Using **VS Code Live Server**:

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.

Using **Python**:

```bash
python -m http.server 8080
# Then open http://localhost:8080
```

Using **Node.js**:

```bash
npx serve .
```

---

## Author

**Anjana K S**
B.Tech CSE (Data Science) — Christ College of Engineering, Irinjalakuda

- Email: [anjanaks233@gmail.com](mailto:anjanaks233@gmail.com)
- GitHub: [github.com/anjana-ks](https://github.com/anjana-ks)
- LinkedIn: [linkedin.com/in/anjana-k-s-26352632a](https://www.linkedin.com/in/anjana-k-s-26352632a)
- Instagram: [@an.janak](https://www.instagram.com/an.janak)

---

## License

This project was created as part of the **Oasis Infobyte Web Development Internship (OIBSIP)** and is intended for educational and portfolio purposes.
