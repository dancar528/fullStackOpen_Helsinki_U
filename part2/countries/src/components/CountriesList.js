import React from 'react';
import Country from './Country';

const CountriesList = ({ countries, search, handleShowMoreClick, selected }) => {
    let filterCountries = [];
    const isSelectedEmpty = Object.keys(selected).length === 0
        ? true
        : false;

    if (isSelectedEmpty) {
        filterCountries = search ?
            countries.filter((country) =>
                country.name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
            )
            : countries;
    }

    if (filterCountries.length === 1 || !isSelectedEmpty) {
        const country = !isSelectedEmpty
            ? selected
            : filterCountries.length > 0 ? filterCountries[0] : {};
        return <Country
                key={country.numericCode}
                country={country}
                detailed={true}
                handleShowMoreClick={handleShowMoreClick} />;
    } else if (filterCountries.length > 1 && filterCountries.length <= 10) {
        return filterCountries.map(country =>
            <Country
                key={country.numericCode}
                country={country}
                detailed={false}
                handleShowMoreClick={handleShowMoreClick} />
        );
    }  else if (filterCountries.length > 10) {
        return <div>Too many matches, specify another filter</div>;
    } else {
        return <div>There's no countries to show</div>;
    }
};

export default CountriesList;
