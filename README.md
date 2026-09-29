# WTWR (What to Wear?)

## About the Project

WTWR is a responsive React application that recommends clothing based on real-time weather. It fetches the current temperature and location from the OpenWeather API, then filters the user's wardrobe to show items suited to hot, warm, or cold conditions.

In Project 11, the app grew from a static page into a full front end: clothing items now load from a mock server, users can add and delete their own garments, a profile page shows their full wardrobe, and a toggle switches temperatures between Fahrenheit and Celsius.

## Key Features

- **Real-Time Weather:** Fetches live temperature and location data from the OpenWeather API.
- **Weather-Based Filtering:** The main page shows only the clothing items that match the current weather (hot, warm, or cold).
- **°F / °C Toggle:** A toggle switch in the header converts every displayed temperature instantly, using React Context.
- **Two Pages with Routing:** A main page with weather-based recommendations, and a profile page showing all of the user's clothing items.
- **Add Clothing Items:** A form modal, controlled by a custom `useForm` hook, sends new items to the server with a POST request.
- **Delete with Confirmation:** A confirmation modal prevents accidental deletions before sending a DELETE request.
- **Mock Back End:** json-server stores clothing items in `db.json`, so changes persist after a page refresh.

## Technologies & Techniques

- **React 18:** functional components with `useState`, `useEffect`, and `useContext`
- **React Router v6:** client-side routing between the main and profile pages
- **React Context:** shares the current temperature unit across the component tree without prop drilling
- **Custom Hooks:** `useForm` manages controlled form inputs
- **json-server:** mock REST API handling GET, POST, and DELETE requests
- **Fetch API with Promises:** every request checks `res.ok` and handles errors with `.catch()`
- **Vite:** development server and build tooling
- **CSS:** BEM methodology, Flexbox, and CSS Grid

## Running the Project

Start the mock server first, then the app, each in its own terminal:

```bash
npm install
npx json-server --watch db.json --port 3001
npm run dev
```

## Project Pitch Video

Check out [this video](https://drive.google.com/file/d/1U8qzFPKisilPByeVQkElx9-YHUYS1c1g/view?usp=sharing), where I describe my project and some challenges I faced while building it.

## Links

- [Figma Design](https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR)
