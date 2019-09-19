import React from 'react';

const PersonForm = ({
    name,
    number,
    handleNameChange,
    handleNumberChange,
    handleFormSubmit
}) => (
    <div>
        <h3>Add a new</h3>
        <form onSubmit={handleFormSubmit}>
            <div>
                name: <input value={name} onChange={handleNameChange} />
            </div>
            <div>
                number: <input value={number} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </div>
);

export default PersonForm;