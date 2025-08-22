SKY-CAST

#Project Descriptio
SkyCast is a clean, responsive weather dashboard that helps users explore real-time
weather data across the globe. Designed for everyday convenience and clarity, it allows
users to search any city, view current conditions, and get a 5-day forecast. The interface will
emphasize usability, personalization, and minimalism while integrating a reliable external API
for accurate weather data.

# Features
2.1. Core Features
● City Search: Search for current weather by entering a city name.
● Current Weather View: Displays temperature, humidity, wind speed, and general
conditions.
● 5-Day Forecast: Shows daily highs/lows and icons for upcoming days.
● Weather Icons: Dynamically shows weather-specific icons (e.g., sun, cloud, rain).
● Responsive Design: Optimized for mobile, tablet, and desktop views.

# Additional Features
● Dark Mode Toggle: Offers a comfortable dark/light viewing experience.
● Location-Based Weather: Optionally uses browser geolocation to fetch local
weather.
● Favorites List: Users can save favorite cities for quick access.
● Unit Switcher: Toggle between Celsius and Fahrenheit.
● Error Handling: User-friendly error messages for invalid cities or API issues.

# Technical Specifications
3.1. API Strategy
● Primary API: OpenWeatherMap API
○ Data Source: Real-time weather and 5-day forecast
○ Authentication: API key stored securely in .env
○ Format: JSON
○ HTTP Methods: GET
○ Usage:
■ api.openweathermap.org/data/2.5/weather?q={city}
■ api.openweathermap.org/data/2.5/forecast?q={city}


# Project Structure
bash
CopyEdit
/skycast/
├── /public/
│ └── index.html
├── /src/
│ ├── /components/
│ │ ├── SearchBar.jsx
│ │ ├── WeatherCard.jsx
│ │ ├── Forecast.jsx
│ │ ├── UnitToggle.jsx
│ │ ├── FavoriteList.jsx
│ │ └── ErrorMessage.jsx
│ ├── /pages/
│ │ ├── Dashboard.jsx
│ │ └── ErrorPage.jsx

│ ├── /store/
│ │ └── weatherStore.js
│ ├── /utils/
│ │ └── fetchWeather.js
│ ├── App.jsx
│ ├── index.jsx
│ └── styles.css
├── .env
├── package.json
└── README.md




