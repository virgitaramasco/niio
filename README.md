# niio

Official responsive website for **NIIO** (DJ / Producer, Milan).

## Overview
- **Architecture**: Static HTML5 / CSS3 / Vanilla JavaScript. No frameworks or build tools required.
- **Design System**: Slide-based full-height layout (`100svh`), strictly monochrome `#000000` & `#f8f8f8`.
- **Typography**: Helvetica Neue (Medium 65).
- **Features**:
  - Hero with brand vector logo.
  - Press section with direct link to high-resolution assets on Google Drive.
  - Biography and artist profile links (`niioofc.com`).
  - Tech & Hospitality Rider lightbox modal with direct download.
  - Releases section with responsive square covers and Spotify streaming links.
  - Optimized responsive images (`.avif`, `.webp`, `.jpg`).
  - Keyboard navigation (Arrow keys, PageUp/PageDown, Home, End).

## Running Locally
Open `index.html` directly with a double-click (`file://`), or serve via any static HTTP server:
```bash
# Using Node / npx
npx serve .

# Using Python
python -m http.server 3000
```
