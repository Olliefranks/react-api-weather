import { useState } from "react";
import "./App.css";

const api = {
  key: "faefc15ce17a74c78f8bc24e1f2d2e86",
  base: "http://api.openweathermap.org/data/2.5/",
};
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
        {weather.name && (
          <>
            <p>{weather.name}</p>
            <p>{weather.main.temp} °C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </>
        )}
        {!weather.name && <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
