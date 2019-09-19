import React from 'react';

const Persons = ({ search, persons }) => {
    const personsFilter = search
        ? persons.filter(person =>
            person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
        : persons;
    return personsFilter.map((person, index) =>
        <div key={index}>{person.name} {person.number}</div>
    );
};

export default Persons;
