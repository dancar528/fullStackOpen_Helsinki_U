import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './Persons';
import Notification from './Notification';
import personService from './../services/persons';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newSearch, setNewSearch] = useState('');
    const [notification, setNotification] = useState({
        message: '',
        type: ''
    });

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
        let message = '',
            type = '';
        if (newNameIndex > -1) {
            const replaceConfirm = window.confirm(
                `${newName} is already added to phonebook, replace the old number with a new one?`);

            if (replaceConfirm) {
                const newPerson = {
                    ...persons[newNameIndex],
                    number: newNumber
                };
                personService.update(newPerson)
                    .then(updatedPerson => {
                        if (updatedPerson.error) {
                            message = updatedPerson.error;
                            type = 'error';
                        } else {
                            message = `Replaced ${newPerson.name}`;
                            type = 'success';
                            setPersons(persons.map((person, i) =>
                                i !== newNameIndex ? person : updatedPerson));
                        }
                        showNotification(message, type);
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
                if (createdPerson.error) {
                    message = createdPerson.error;
                    type = 'error';
                } else {
                    setPersons(persons.concat(createdPerson));
                    message = `Added ${newPerson.name}`;
                    type = 'success';
                }
                showNotification(message, type);
            });
    };

    const showNotification = (message, type) => {
        setNewName('');
        setNewNumber('');
        let newNotification = {
            ...notification,
            message: message,
            type: type
        };
        setNotification(newNotification);
        setTimeout(() => {
            newNotification = {
                ...notification,
                message: '',
                type: ''
            };
            setNotification(newNotification);
        }, 5000);
    };

    const handleRemovePerson = (event) => {
        const personName = event.target.attributes.name.value;
        const confirmRemove = window.confirm(`Delete ${personName}?`);
        if (!confirmRemove) return;

        const personId = event.target.attributes.id.value;
        const selectedIndex = persons.findIndex(person =>
                person.id === personId
            );
        let message = '',
            type = '';
        personService.remove(personId)
            .then(_ => {
                setPersons(persons.filter((_, i) => i !== selectedIndex));
            })
            .catch(error => {
                message = `Information of ${personName} has already been removed from server`
                type = 'error';
                showNotification(message, type);
            });
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification notification={notification} />
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
