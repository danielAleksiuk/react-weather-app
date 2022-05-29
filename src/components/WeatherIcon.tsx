import React from 'react';
import { IconProps } from '../types';
import '../scss/WeatherIcon.scss';

const WeatherIcon: React.FC<IconProps> = (props) =>(
    <div className="weather-icon">
        <img src = {require('../icons/weather/' + props.icon + '.png')} alt = "weather_icon"/>
    </div>
);

export default WeatherIcon;