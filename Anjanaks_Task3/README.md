# OIBSIP Level 1 Task 3 — Advanced Temperature Converter

> **ThermoFlux** — A premium, futuristic temperature conversion web application built for the Oasis Infobyte Summer Internship Program (OIBSIP).

![Theme](https://img.shields.io/badge/Theme-Futuristic%20Cyber--Minimalism-00f5d4?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Overview

ThermoFlux is a sleek, dark-themed temperature converter that transforms a single input value into **both** remaining temperature units simultaneously. Designed with a **Futuristic Cyber-Minimalism** aesthetic — glassmorphic panels, glowing cyan/violet accents, and fluid micro-interactions — it delivers a polished, stand-out experience for OIBSIP Level 1, Task 3.

---

## Live Demo & Video

| Resource | Link |
|----------|------|
| **Live Demo** | https://anjana-ks.github.io/OIBSIP/Anjanaks_Task3/ |
| **Video Explanation** | _[Add your Loom/YouTube/Drive link here]_ |

---

## Features

- **Strict Input Validation** — Numeric-only input with real-time character filtering; inline error badge with shake animation (no browser alerts)
- **Custom Segmented Unit Selector** — Premium toggle for Celsius (°C), Fahrenheit (°F), and Kelvin (K) with sliding indicator
- **Smart Dual Output** — Converts and displays **both** other units in a responsive grid layout
- **Accurate Conversion Math** — Industry-standard formulas with intelligent rounding (2–4 decimal places)
- **Glassmorphic UI** — Frosted glass containers, ambient grid background, and glowing orb effects
- **Micro-Interactions** — Button hover/active states, gradient animation, card reveal animations, and keyboard support (Enter to convert)
- **Accessible** — ARIA labels, `role="alert"` for errors, semantic HTML, and screen-reader utilities
- **Fully Responsive** — Optimized for mobile, tablet, and desktop viewports

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 (semantic, accessible) |
| Styling | CSS3 (Custom Properties, Flexbox, Grid, Backdrop Filter, Keyframe Animations) |
| Logic | Vanilla JavaScript (ES6+, modular IIFE pattern) |
| Typography | [Orbitron](https://fonts.google.com/specimen/Orbitron) + [Rajdhani](https://fonts.google.com/specimen/Rajdhani) via Google Fonts |

---

## Project Structure

```
OIBSIP/
└── Level-1-Task-3-Temperature-Converter/
    ├── index.html          # Main application entry point
    ├── README.md           # Project documentation (this file)
    ├── css/
    │   └── styles.css      # Cyber-minimalism theme & component styles
    └── js/
        ├── converter.js    # Core conversion logic & validation
        └── app.js          # UI controller & DOM interactions
```

---

## Conversion Formulas

| From | To | Formula |
|------|----|---------|
| Celsius | Fahrenheit | °F = (C × 9/5) + 32 |
| Celsius | Kelvin | K = C + 273.15 |
| Fahrenheit | Celsius | °C = (F − 32) × 5/9 |
| Fahrenheit | Kelvin | K = (F − 32) × 5/9 + 273.15 |
| Kelvin | Celsius | °C = K − 273.15 |
| Kelvin | Fahrenheit | °F = (K − 273.15) × 9/5 + 32 |

All outputs are rounded to a maximum of **4 decimal places**, preferring **2 decimal places** when the value is equivalent.

---

## How to Run Locally

No build tools, package managers, or server setup required.

### Option 1 — Direct Browser Open

1. Clone or download this repository.
2. Navigate to the project folder.
3. Double-click `index.html` to open it in your default browser.

### Option 2 — Local Development Server (Recommended)

Using **VS Code Live Server**:

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.

Using **Python** (if installed):

```bash
# Python 3
python -m http.server 8080

# Then open http://localhost:8080 in your browser
```

Using **Node.js** (if installed):

```bash
npx serve .
```

---

## Usage

1. Enter a numeric temperature in the input field.
2. Select the **source unit** (°C, °F, or K) using the segmented control.
3. Click **Convert** (or press `Enter`).
4. View both converted values displayed in the results grid below.

### Validation Examples

| Input | Result |
|-------|--------|
| `25` (with °C selected) | Shows 77 °F and 298.15 K |
| _(empty)_ | Inline error: "Temperature cannot be empty." |
| `abc` | Inline error: "Please enter a valid number (digits only)." |
| `-40` (with °F selected) | Shows -40 °C and 233.15 K |

---

## Author

**Anjana KS**  
Oasis Infobyte SIP Intern · Level 1  
GitHub: https://github.com/anjana-ks

---

## License

This project was created as part of the **Oasis Infobyte Summer Internship Program (OIBSIP)** and is intended for educational and evaluation purposes.
