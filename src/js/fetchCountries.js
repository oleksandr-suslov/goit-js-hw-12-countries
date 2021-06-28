import error from './error';

const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountry(country) {
    return fetch(`${BASE_URL}/name/${country}`)
    .then(response => { if (response.ok) 
        return response.json();
   response.text();

        return error();
    }
    );
};

export default { fetchCountry };
