import React, { useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import * as API_CONSTANTS from '../consts';

const GlobalState = (props: any) => {
    const [weather, setWeather] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();

    const getWeatherAPIData = async (params: string = '') => {
        const url = `${API_CONSTANTS.API_BASE_URL}${API_CONSTANTS.API_LIST_URL}${params}`;
        await fetch(url)
            .then(response => response.json())
            .then((response) => setWeather(response))
            .catch((error) => setError(error))
            .finally(() => setIsLoaded(true));
    }
    
    useEffect(() => {
        getWeatherAPIData();
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                getWeatherAPIData,
                weather,
                isLoaded,
                error
            }}>
            { props.children}
        </GlobalContext.Provider >
    )
}

export default GlobalState;
