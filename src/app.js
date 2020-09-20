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
                console.table(data)
            } catch (error) {
                console.warn(error)
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
            {weather.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                </div>
            )}
        </div>
    );
};

export default App;
