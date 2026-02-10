# 🌦 WeatherPro – React Weather App

A modern weather application built using **React.js** that allows users to search for any city and view real-time weather details like temperature, humidity, and conditions using the OpenWeather API.

---

## 🚀 Features

* 🔍 Search weather by city name
* 🌡 Real-time temperature (°C)
* ☁ Weather condition display
* 💧 Humidity information
* ⏳ Loading indicator while fetching data
* 🛡 Crash-safe UI handling
* 🎯 Beginner to Intermediate level React project

---

## 🛠 Tech Stack

* React.js
* JavaScript (ES6)
* CSS3
* OpenWeather API

---

## 📁 Project Structure

```
weather-pro/
│
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── WeatherCard.js
│   │   └── Loader.js
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

---

## 🔑 API Setup

This project uses the OpenWeather API.

1. Go to: [https://openweathermap.org/api](https://openweathermap.org/api)
2. Create a free account
3. Generate an API key
4. Paste it in `App.js`:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Start the development server

```
npm start
```

### 3️⃣ Open in browser

```
http://localhost:3000
```

---

## 🧪 Test Cities

Try searching:

* Delhi
* Mumbai
* London
* Jaipur
* New York

---

## 📸 What It Shows

* City Name
* Temperature
* Weather Description
* Humidity

---

## 🎯 Learning Outcomes

From this project, you will learn:

* React functional components
* useState hook
* API integration using fetch()
* Conditional rendering
* Component-based architecture

---
