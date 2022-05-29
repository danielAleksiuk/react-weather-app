import React from 'react';
import '../scss/WeatherCard.scss';
import { WeatherCardProps } from '../types';
import WeatherIcon  from './WeatherIcon';
import { convertToCelsius } from '../utils/utils';

export const WeatherCard: React.FC<WeatherCardProps> = (props) => {
    return (
        <div className='weather-card'>
            <div className='weather-card__icon'>
                <WeatherIcon icon={props.icon}/>
            </div>
            <div className='weather-card__descriptions'>
                <div className='weather-card__descriptions--city'>
                    { props.name }
                </div>
                <div className='weather-card__descriptions--description'>
                    { props.description }
                </div>
            </div>
            <div className='weather-card__temperature'>
                { convertToCelsius(props.temp) }<span>&#8451;</span>
            </div>  
        </div>
    )
}

export default WeatherCard;
