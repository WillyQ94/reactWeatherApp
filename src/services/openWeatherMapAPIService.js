import { openWeatherAPIGetCurrentWeather } from "./apiServices";

class OpenWeatherMapAPIService { 
    
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    
    async getWeather (params) {
        try {
            const url = openWeatherAPIGetCurrentWeather + params;
            const response = await this.httpClient.get(url);
            return response.json();
        } catch {
            console.error(error);
            throw error;
        }
    }
}

export default OpenWeatherMapAPIService;