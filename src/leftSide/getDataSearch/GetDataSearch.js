const GetDataSearch = async (searchValue) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${searchValue}&format=json&addressdetails=1&limit=5`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default GetDataSearch;