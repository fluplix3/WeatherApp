import getWeather from "../getWeather/getWeather";

const GetDataSearch = async (searchValue) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${searchValue}&format=json&addressdetails=1&limit=5`);
        const data = await response.json();
        let lat = data[0].lat
        let lon = data[0].lon
        localStorage.setItem('lat', lat)
        localStorage.setItem('lon', lon)
        console.log(getWeather());
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default GetDataSearch;