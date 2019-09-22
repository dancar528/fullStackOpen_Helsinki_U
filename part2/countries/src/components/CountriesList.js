import React from 'react';
import Country from './Country';

const CountriesList = ({ countries, search }) => {

    const filterCountries = search ? 
        countries.filter((country) => 
            country.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
        )
        : countries;
    const detailedInfo = filterCountries.length === 1
        ? true
        : false;
    
    if (filterCountries.length > 0 && filterCountries.length <= 10) {
        return filterCountries.map(country => 
            <Country
                key={country.numericCode}
                country={country}
                detailed={detailedInfo} />        
        );
    }  else if (filterCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>;
    } else {
        return <div>There's no countries to show</div>;
    }
};

export default CountriesList;
