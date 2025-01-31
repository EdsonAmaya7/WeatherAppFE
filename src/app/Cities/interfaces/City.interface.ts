export interface MostVisitedCity {
    message: string,
    data: City[]
}

export interface City {
    display: string;
    lat: string;
    long: string;
    currentTemperature: string;
    weatherCondition: string;
}