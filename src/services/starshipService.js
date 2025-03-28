const BASE_URL = "https://swapi.info/api/starships";

const index = async (starships) => {
    try {
        const queryString = `/${starships}`;
        const response = await fetch(BASE_URL + queryString);
        if (!response.ok) {
            throw new Error('Failed to fetch starships.')
        }
        const data = await response.json();
        console.log('Starship Data:', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};


export { index };