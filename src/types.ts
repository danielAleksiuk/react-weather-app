export interface Weather {
    base: string;
    clouds: Clouds;
    cod: number;
    coord: Coord;
    dt: number;
    id: number;
    main: WeatherCondition;
    name: string;
    q: string;
    rain: Rain;
    sys: System;
    timezone: number;
    visibility: number;
    weather: WeatherDescription[];
    wind: Wind;
}

export interface Clouds {
    all: number;
}

export interface Rain {
    '1h': number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface Wind {
    deg: number;
    speed: number;
}

export interface WeatherCondition {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}

export interface WeatherDescription {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface System {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
}

export interface IconProps {
    icon: string;
}

export interface WeatherCardProps {
    id: number;
    name: string;
    icon: string;
    temp: number;
    description: string;
}
