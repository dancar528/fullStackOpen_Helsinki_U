import React, { useState } from 'react';

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ]);
    const [ newName, setNewName ] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newPerson = {
            ...persons,
            name: newName
        };
        setPersons(persons.concat(newPerson));
        setNewName('');
    };

    const rows = () => persons.map((person, index) =>
        <div key={index}>{person.name}</div>
    );

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
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
