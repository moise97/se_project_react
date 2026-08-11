# WTWR (What to Wear?)

## About the Project

WTWR (What to Wear?) is a responsive single-page React application that dynamicially recommends clothing options based on real-time weather conditions. The application interfaces with the OpenWeather API to fetch live temperature and location data, automatically parsing the metrics to filter and display appropriate clothing cards for the user's daily wardrobe.

## Key Features

- **Real-Time Weather Integration:** Fetches live temperature and location data asynchronously using the OpenWeather API and JavaScript Promises.
- **Dynamic Filtering:** Filters an interactive collection of clothing items categorized by weather thresholds (hot, warm, cold).
- **Interactive Modals:** Built-in modal workflows allowing users to preview item details or add new garments to the collection seamlessly.
- **Robust User Experience:** Implements full keyboard navigation (Escape key support) and overlay click-to-close functionality.

## Technologies & Techniques

- **Frontend Library:** React 18 (utilizing functional components, `useState`, and `useEffect` hooks)
- **Build Tooling:** Vite
- **Styling:** BEM methodology for modular CSS architecture, Flexbox, and CSS Grid layouts
- **Asynchronous JavaScript:** Fetch API with Promises for clean API data retrieval

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)
