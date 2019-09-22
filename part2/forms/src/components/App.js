import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newSearch, setNewSearch] = useState('');
    const dbUrl = 'http://localhost:3001/persons';

    useEffect(() => {
        axios.get(dbUrl)
        .then((response) => {
            setPersons(response.data);
        });
    }, []);

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const handleSearchChange = (event) => {
        setNewSearch(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newNameIndex = persons.findIndex(person => 
            person.name.toLowerCase() === newName.toLowerCase());
        if (newNameIndex > -1) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const newPerson = {
            ...persons,
            name: newName,
            number: newNumber
        };
        setPersons(persons.concat(newPerson));
        setNewName('');
        setNewNumber('');
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={newSearch} handleSearchChange={handleSearchChange} />
            <PersonForm
                name={newName}
                number={newNumber}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                handleFormSubmit={handleFormSubmit} />
            <h3>Numbers</h3>
            <Persons search={newSearch} persons={persons} />
        </div>
    );
};

export default App;
