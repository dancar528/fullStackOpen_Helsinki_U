import React, { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [newSearch, setNewSearch] = useState('');

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
        const newNameIndex = persons.findIndex(person => person.name === newName);
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

    const rows = () => {
        const personsFilter = newSearch
            ? persons.filter(person =>
                person.name.toLowerCase().indexOf(newSearch.toLowerCase()) !== -1
            )
            : persons;
        return personsFilter.map((person, index) =>
            <div key={index}>{person.name} {person.number}</div>
        );
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input value={newSearch} onChange={handleSearchChange} />
            </div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {rows()}
        </div>
    );
};

export default App;
