import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
    const weatherApiUrl = `http://api.weatherstack.com/current?access_key=08a62f3d08992f6c86f0265e1ec2bb45&query=${capital}`;
    const [weather, setWeather] = useState({
        temperature: 0,
        weather_icons: [],
        weather_descriptions: [],
        wind_speed: 0,
        wind_dir: ''
    });

    useEffect(() => {
        axios.get(weatherApiUrl)
            .then(response => {
                setWeather(response.data.current);
            });
    }, []);

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <div>
                <span>
                    <strong>Temperature: </strong>
                    {weather.temperature}
                </span>
            </div>
            <div>
                <img src={weather.weather_icons[0]} alt={weather.weather_descriptions[0]} />
            </div>
            <div>
                <span>
                    <strong>Wind: </strong>
                    {weather.wind_speed} kph 
                    direction {weather.wind_dir}
                </span>
            </div>
        </div>
    );
};

export default Weather;
