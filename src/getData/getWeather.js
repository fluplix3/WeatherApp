const getWeather = async () => {
    try {
        const key = process.env.REACT_APP_API_KEY_WEATHER;
        let lat = localStorage.getItem('lat') ?? 37.6064;
        let lon = localStorage.getItem('lon') ?? 55.6256;
        const WeatherURL = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=ru`);
        const Weatherdata = await WeatherURL.json();
        // console.log("weather", Weatherdata);
        return(Weatherdata)
    } catch (error) {
        console.error(error);
    }
};

export default getWeather;