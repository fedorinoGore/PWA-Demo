import React, { useState } from 'react';
import { fetchWeather } from './api'

import './styles/app.css'

function App() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState(null)
    const queryChange = e => setQuery(e.target.value)

    const search = async (e) => {
        if(e.key === 'Enter') {
            try {
                const data = await fetchWeather(query)
                setWeather(data)
                setQuery('')
            } catch (error) {
                console.log("Error: ", error)
                // throw new Error(error)
            }
        }
    }

    return (
        <div className='main-container'>
            <input type='text' className='search'
                placeholder='Search...'
                value={query}
                onChange={queryChange}
                onKeyPress={search}
            />
            {weather?.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className='city-temp'>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className='info'>
                        <img
                            alt={weather.weather[0].description}
                            className='city-icon'
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
