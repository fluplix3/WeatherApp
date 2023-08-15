
const getWeatherCards = async () => {
    try {
        const key = process.env.REACT_APP_API_KEY_WEATHER;
        let lat = localStorage.getItem('lat') ?? 37.6064;
        let lon = localStorage.getItem('lon') ?? 55.6256;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=40&lang=RU&appid=${key}`)
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
};

export default getWeatherCards;