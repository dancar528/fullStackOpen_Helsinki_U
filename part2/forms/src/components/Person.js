import React from 'react';

const Person = ({ name, number, id, handleRemovePerson }) => (
    <div>
        <span>{name} {number}</span>
        <button
            id={id}
            name={name} 
            onClick={handleRemovePerson}>Delete</button>
    </div>
);

export default Person;