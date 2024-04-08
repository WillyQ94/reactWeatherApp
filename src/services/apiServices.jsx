import { openWeatherAPIKey } from "../config/apiConfig";

export const openWeatherAPIBaseUrl = "https://api.openweathermap.org/data/2.5/weather?";
export const openWeatherAPIGetCurrentWeather = openWeatherAPIBaseUrl + "units=metric&appid="+ openWeatherAPIKey + "&q=";


