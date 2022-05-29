import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import '../scss/WeatherList.scss';
import { Weather } from '../types';
import WeatherCard  from './WeatherCard';

export const WeatherList: React.FC = () => {
    const { weather, isLoaded, error } = useContext(GlobalContext);

    return <React.Fragment>
        <div className='weather-list'>
            { 
                isLoaded
                    ? error 
                        ? <div className='weather-list__error-data'><h1>{error}</h1></div>
                        : weather.map((weatherItem: Weather, index: number) => (
                            <WeatherCard
                                key={index}
                                id={weatherItem.id}
                                name={weatherItem.name}
                                icon={weatherItem.weather[0].icon}
                                temp={weatherItem.main.temp}
                                description={weatherItem.weather[0].description}/>
                            ))    
                    : <div className='weather-list__loading-data'><h1>Loading weather data...</h1></div>
            }
        </div>
    </React.Fragment>
}

export default WeatherList;