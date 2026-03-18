# 🚨 AGENT RULES – FITNESS SPORTS CENTER WEBSITE

## 🔴 CRITICAL INSTRUCTIONS

You MUST follow these steps BEFORE writing any code:

1. Carefully analyze ALL images inside the `/design` (or provided) folder.
2. Understand layout, spacing, typography, colors, and component structure.
3. Read this entire file (`agent_rules.md`) fully.
4. ONLY THEN start implementation.

Failure to follow design exactly is NOT acceptable.

---

## 🎯 PROJECT GOAL

Build a **pixel-perfect, responsive fitness website** based on provided Figma design images.

---

## 🧱 TECH STACK (MANDATORY)

* React (Vite)
* TypeScript
* Tailwind CSS
* React Router DOM

---

## 📁 PROJECT STRUCTURE (STRICT)

src/
components/
Navbar.tsx
Hero.tsx
About.tsx
Services.tsx
CTA.tsx
Contact.tsx
Footer.tsx

pages/
Home.tsx
ContactPage.tsx

layouts/
MainLayout.tsx

assets/
images/

styles/
index.css

---

## 🎨 DESIGN RULES (VERY IMPORTANT)

### Colors

* Primary Background: very dark (#0f0f0f or similar)
* Secondary Background: dark gray (#1a1a1a)
* Accent Color: yellow/gold (#fbbf24)
* Text:

  * Headings: white
  * Subtext: gray

### UI Style

* Modern, clean, premium fitness look
* Rounded corners (rounded-xl / rounded-2xl)
* Soft shadows
* Subtle hover animations
* Consistent spacing

---

## 📱 RESPONSIVENESS (MANDATORY)

* Mobile-first approach
* Use Tailwind breakpoints:

  * sm
  * md
  * lg
  * xl
* Layout must adapt:

  * Hero → stacked on mobile
  * Cards → 1 column → 2 → 3/4 columns

---

## 🧩 COMPONENT RULES

* Each section MUST be a reusable component
* NO inline large JSX in pages
* Use clean, readable TypeScript
* Functional components only

---

## 🔗 ROUTING

Use React Router:

* `/` → Home Page
* `/contact` → Contact Page

---

## 📬 CONTACT FORM (IMPORTANT)

Fields:

* Full Name
* Email Address
* Message

Requirements:

* Basic validation:

  * Required fields
  * Valid email format
* On submit:

  * Show success message
  * NO backend required

---

## ✨ INTERACTIONS (BONUS POINTS)

* Button hover effects
* Card hover scaling
* Smooth transitions
* Focus states for inputs

---

## 🚫 STRICT RULES

DO NOT:

* Use any UI libraries (no MUI, no Bootstrap)
* Ignore the design images
* Change layout structure
* Use inline styles (use Tailwind only)

---

## ✅ EXPECTED OUTPUT

* Fully working React app
* Pixel-accurate UI based on images
* Clean folder structure
* Reusable components
* Responsive design

---

## 🧠 FINAL INSTRUCTION

The design images are the **source of truth**.

If there is ANY conflict:
→ FOLLOW THE DESIGN IMAGES.
