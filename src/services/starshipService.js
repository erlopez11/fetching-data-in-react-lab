const BASE_URL = "https://swapi.info/api/starships";

const index = async (starship) => {
    try {
        const queryString = `?q=${starship}`;
        const response = await fetch(BASE_URL + queryString);
        if (!response.ok) {
            throw new Error('Failed to fetch starships.')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


export { index };