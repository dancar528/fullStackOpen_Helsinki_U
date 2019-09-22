import React from 'react';

const Search = ({ search, handleChange }) => (
    <div>
        <label>Find countries </label>
        <input id="search" value={search} onChange={handleChange} />
    </div>
);

export default Search;