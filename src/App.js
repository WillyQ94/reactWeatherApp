import React, { useEffect, useState } from "react";
import SearchSection from "./components/SearchSection/SearchSection";
import SearchHistory from "./components/SearchHistory/SearchHistory";

function App() {

  const [currentSearch, setCurrentSearch] = useState({
    "coord": {
        "lon": 103.5,
        "lat": 2
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 24.09,
        "feels_like": 25.09,
        "temp_min": 24.09,
        "temp_max": 24.09,
        "pressure": 1007,
        "humidity": 97,
        "sea_level": 1007,
        "grnd_level": 996
    },
    "visibility": 10000,
    "wind": {
        "speed": 1.36,
        "deg": 34,
        "gust": 1.91
    },
    "clouds": {
        "all": 97
    },
    "dt": 1712520386,
    "sys": {
        "country": "MY",
        "sunrise": 1712530995,
        "sunset": 1712574720
    },
    "timezone": 28800,
    "id": 1733049,
    "name": "Johor",
    "cod": 200
});

  return (
    <div className="App mx-auto" >
      <SearchSection setCurrentSearch={setCurrentSearch}/>
      <SearchHistory currentSearch={currentSearch} setCurrentSearch={setCurrentSearch}/>
    </div>
  );
}
export default App;