import './sass/main.scss';
import countryCardTpl from './templates/card-country.hbs';

const refs = {
    body: document.querySelector('body')
}

fetch('https://restcountries.eu/rest/v2/name/canada')
.then(response =>{
    return response.json();
})
.then(country => {
    console.log(country);
    const markup = countryCardTpl(country)
    refs.body.innerHTML = markup;

})
.catch(error => {
    console.log(error) 
});