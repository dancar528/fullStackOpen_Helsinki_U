import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import personService from './../services/persons';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newSearch, setNewSearch] = useState('');

    useEffect(() => {
        personService.getAll()
            .then(initialPersons => {
                setPersons(initialPersons);
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
            const replaceConfirm = window.confirm(
                `${newName} is already added to phonebook, replace the old number with a new one?`);
            if (replaceConfirm) {
                const newPerson = {
                    ...persons[newNameIndex],
                    number: newNumber
                };
                personService.update(newPerson)
                    .then(data => {
                        setPersons(persons.map((person, i) =>
                            i !== newNameIndex ? person : data));
                        setNewName('');
                        setNewNumber('');
                    });
                return;
            }
            setNewName('');
            setNewNumber('');
            return;
        }
        const newPerson = {
            name: newName,
            number: newNumber
        };
        personService.create(newPerson)
            .then(createdPerson => {
                setPersons(persons.concat(createdPerson));
                setNewName('');
                setNewNumber('');
            });
    };

    const handleRemovePerson = (event) => {
        const personName = event.target.attributes.name.value;
        const confirmRemove = window.confirm(`Delete ${personName}?`);
        if (!confirmRemove) return;

        const personId = event.target.attributes.id.value;
        const selectedIndex = persons.findIndex(person =>
                person.id === parseInt(personId)
            );
        personService.remove(personId)
            .then(_ => {
                setPersons(persons.filter((_, i) => i !== selectedIndex));
            })
            .catch(error =>
                alert(`Fail to remove ${personName}.`)
            );
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
            <Persons
                search={newSearch}
                persons={persons}
                handleRemovePerson={handleRemovePerson} />
        </div>
    );
};

export default App;
