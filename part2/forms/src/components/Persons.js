import React from 'react';
import Person from './Person';

const Persons = ({ search, persons, handleRemovePerson }) => {
    const personsFilter = search
        ? persons.filter(person =>
            person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
        : persons;
    return personsFilter.map((person, index) =>
        <Person
            key={index}
            name={person.name}
            number={person.number}
            id={person.id}
            handleRemovePerson={handleRemovePerson} />
    );
};

export default Persons;
