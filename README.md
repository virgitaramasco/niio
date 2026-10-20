# niio

Official responsive website for **NIIO** (DJ / Producer, Milan).

## Overview
- **Architecture**: Static HTML5 / CSS3 / Vanilla JavaScript. No frameworks or build tools required. Opens directly with a double-click (`file://`).
- **Design System**: Minimalist artist landing page inspired by PAWSA (`pawsaofficial.com`), strictly monochrome `#000000` & `#f8f8f8`.
- **Typography**: Helvetica Neue (Medium 65).
- **Structure**:
  - `index.html`: Official Landing Page with NIIO vector logo, cinematic background, social media links (Instagram, SoundCloud, Spotify, YouTube, Beatport), pill buttons for **Gigs** and **Contacts** modal (`Promos: niiooofc@gmail.com`, `Bookings: bookings@niioofc.com`), and link to the Press Kit.
  - `gigs.html`: Dedicated upcoming dates table with Date, Venue, City, and Tickets action button.
  - `gigs-data.js`: Simple configuration file to add, edit, or remove upcoming gig dates in seconds.
  - `press-kit.html`: Complete 4-slide press kit (Hero, Press Pics & Video, Biography, Releases).

## How to Update Gigs (Tour Dates)
Open [`gigs-data.js`](gigs-data.js) and add or edit items in the `window.NIIO_GIGS` array:
```javascript
{
  date: "28/11/2026",
  venue: "The Sanctuary",
  city: "Milan, IT",
  ticketUrl: "https://dice.fm/...", // o "#" se non ancora disponibile
  status: "Tickets" // "Tickets", "Info soon", "Sold Out", "Free Entry"
}
```

## Running Locally
Open `index.html` directly with a double-click (`file://`), or serve via any static HTTP server:
```bash
# Using Node / npx
npx serve .

# Using Python
python -m http.server 3000
```
