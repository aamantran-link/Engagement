# Roshan & Ria — Nepali Wedding Invitation Website

A single-page, fully interactive wedding invitation with cinematic animations, Nepali cultural theming, and playful reveal interactions.

---

## 🎨 Design Foundation

- **Color palette**: Deep maroon (#7B1113), gold (#D4A853), cream (#FFF8F0), saffron (#F4C430)
- **Background**: CSS-generated mandala patterns and subtle temple silhouettes on maroon, similar to the reference screenshots
- **Fonts**: Elegant serif (Playfair Display) for English headings, clean serif for body, and a Nepali Unicode font (Noto Serif Devanagari) for Nepali text
- **Overall feel**: Minimal, romantic, warm, culturally Nepali — no clutter

---

## 📐 Sections (Top to Bottom, Smooth Scroll)

### 1. Envelope Landing Screen

- Full-screen envelope with a wax seal showing **"R & S"** initials (CSS/SVG styled, inspired by the uploaded envelope reference)
- Tap/click the seal → envelope opens with a cinematic animation, revealing the invitation content below
- Subtle golden particle shimmer in the background

### 2. Hero Section

- **"Roshan & Sia"** in large elegant serif, with a golden ampersand
- Subtitle: *"Together with their families"* and a romantic wedding quote
- Deep maroon background with repeating mandala pattern (CSS-generated)
- Cinematic fade-in and scale entrance animation
- **Music toggle** (top-left corner) — on/off for optional background ambiance
- **Language toggle** (top-right corner) — English / नेपाली

### 3. Scratch-to-Reveal Date Section

- Cream/light background section for contrast
- Heading: *"Reveal the Date"* with a hand icon
- Three golden scratch circles (canvas-based scratch interaction) — user scratches to reveal: **"20"**, **"FEB"**, **"2026"**
- Once all three are scratched → flower petals fall from the top of the screen (animated CSS/JS petals in gold and red)
- **Live countdown timer** appears below: Days, Hours, Minutes, Seconds until Feb 20, 2026

### 4. Event Details Section

- Back to maroon background with mandala pattern
- Elegant heading: *"Event Details"*
- Card showing: **Wedding Ceremony** — *From 9:00 PM onwards* — with a subtle Nepali motif icon (temple bell or mandala)
- Minimal text, graceful layout

### 5. Venue Section

- Venue name: **Hyatt Kathmandu**
- Address text with location pin icon
- Embedded Google Maps iframe showing Hyatt Kathmandu
- **"Get Directions"** button linking to Google Maps

### 6. Closing Blessing Section

- Soft cream background
- A short, emotional blessing message in both English and Nepali
- Decorative mandala divider
- Gentle fade-in animation on scroll

---

## ✨ Interactive Features

- **Envelope open animation** — CSS 3D transform flap opening with seal break effect
- **Scratch-to-reveal** — HTML Canvas overlay that erases on mouse/touch drag to reveal date underneath
- **Falling petals** — Animated flower petals (CSS keyframes) triggered after date reveal
- **Countdown timer** — Real-time countdown updating every second
- **Smooth scrolling** — Sections scroll smoothly with scroll-snap and intersection observer fade-ins
- **Language toggle** — Switches all text between English and Nepali
- **Music toggle** — Play/pause background audio (no autoplay)

---

## 📱 Responsive Design

- Fully responsive for mobile, tablet, and desktop
- Touch-friendly scratch interaction on mobile
- All animations optimized for performance