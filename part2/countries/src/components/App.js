import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesList from './CountriesList';
import Search from './Search';

const App = () => {

    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState({});
    const restUrl = 'https://restcountries.eu/rest/v2/all';

    useEffect(() => {
        axios.get(restUrl)
        .then(response => {
            setCountries(response.data);
        });
    }, []);

    const handleSearchFormChange = (event) => {
        setSearch(event.target.value);
        setSelected({});
    };

    const handleShowMoreClick = (event) => {
        const countryId = event.target.attributes.id.value;
        const country = countries.find(country => country.numericCode === countryId);
        setSelected(country);
    };

    return (
        <div>
            <Search
                handleChange={handleSearchFormChange}
                search={search} />
            <CountriesList
                search={search}
                countries={countries}
                handleShowMoreClick={handleShowMoreClick}
                selected={selected} />
        </div>
    );
};

export default App;
