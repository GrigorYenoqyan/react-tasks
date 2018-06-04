import React from 'react';
import WeatherTable from './WeatherTable';

import "./Weather.css";

const Weather = () => {
    return (
        <div>
            <p className="location">Yerevan, Armenia</p>
            <WeatherTable />
        </div>
    )
}

export default Weather;