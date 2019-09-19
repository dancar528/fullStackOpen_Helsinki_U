import React from 'react';

const Filter = ({ value, handleSearchChange }) => (
    <div>
        filter shown with <input value={value} onChange={handleSearchChange} />
    </div>
);

export default Filter;
