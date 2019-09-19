import React, { useState } from 'react';

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '23-234-2342' }
    ]);
    const [ newName, setNewName ] = useState('');
    const [ newNumber, setNewNumber ] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
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

    const rows = () => persons.map((person, index) =>
        <div key={index}>{person.name} {person.number}</div>
    );

    return (
        <div>
            <h2>Phonebook</h2>
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
