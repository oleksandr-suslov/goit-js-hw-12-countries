import './sass/main.scss';
import countryCardTpl from './templates/card-country.hbs';
import countriesList from './templates/countries-list.hbs'
import API from './js/fetchCountries';
import getRefs from './js/get-refs';
import { error } from '@pnotify/core';




var debounce = require('lodash.debounce');

const refs = getRefs();

refs.input.addEventListener('input', debounce(onSearch, 500),)

function onSearch() {
    if (refs.input.value) {
        API.fetchCountry(refs.input.value)
            .then(r => {
                if (r.length === 1) {
                    console.log(r.length);
                    renderCountryCard(r)
                }
                return r;
            })
            .then(r => {
                if (r.length > 1 && r.length <= 10) {
                    renderCountriesList(r)
                }
                return r;
            })
            .then(r => {
                if (r.length > 10) {
                    error({ text: 'To many matches found. Please enter a more specific query!' })
                }
                return r
            })
    
    }
    
    
 
}


function renderCountryCard(country){
    const markup = countryCardTpl(country);
    refs.cardBox.innerHTML = markup;   
};

function renderCountriesList(countries){
    const markupList = countriesList(countries);
    refs.cardBox.innerHTML = markupList;   
};
