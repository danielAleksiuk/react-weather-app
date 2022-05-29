import React from 'react';
import '../scss/App.scss';
import GlobalState from '../context/GlobalState';
import Header from './Header';
import Footer from './Footer';
import WeatherList from './WeatherList';

export const App: React.FC = () => {
    return (
        <GlobalState>
            <div className='container'>
                <Header />
                <WeatherList />
                <Footer />
            </div>
        </GlobalState>
    );
}

export default App;
