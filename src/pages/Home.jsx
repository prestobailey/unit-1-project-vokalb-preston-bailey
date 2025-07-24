import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null);

  // Clock 
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Fetch WeatherAPI data, usisng the key from .env 
  useEffect(() => {
    const key = import.meta.env.VITE_WEATHERAPI_KEY;
    if (!key) {
      console.warn('No WeatherAPI key found');
      return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=Tirana&aqi=no`)
      .then(res => {
        if (!res.ok) throw new Error(`WeatherAPI error ${res.status}`);
        return res.json();
      })
      .then(data => {
        setWeather({
          temp: data.current.temp_c,
          description: data.current.condition.text,
          icon: `https:${data.current.condition.icon}`,
        });
      })
      .catch(err => {
        console.error('Weather fetch failed:', err);
      });
  }, []);

  // Home Page
  return (
    <div className="dashboard">
      <h1>Welcome to VOKALB!</h1>
      <h3>It's time to learn some Albanian.</h3>
      <p>
        Current time in Tirana:{' '}
        {time.toLocaleTimeString('sq-AL', {
          timeZone: 'Europe/Tirane',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </p>

      {weather ? (
        <div className="weather">
          <img src={weather.icon} alt={weather.description} />
          <p>
            {weather.temp}°C — {weather.description}
          </p>
        </div>
      ) : (
        <p>Loading weather…</p>
      )}
    </div>
  );
};

export default Home;