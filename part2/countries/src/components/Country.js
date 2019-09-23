import React from 'react';

const Languages = ({ languages }) => (
    <ul>
        {languages.map(language => 
            <li key={language.iso639_1}>{language.name}</li>
        )}
    </ul>
);

const Country = ({ country, detailed, handleShowMoreClick }) => {

    const { name, capital, population, languages, flag, numericCode } = country;

    if (!detailed) {
        return <div>
            {name}
            <button id={numericCode} onClick={handleShowMoreClick}>Show</button>
        </div>
    }
    return (
        <div>
            <h2>{name}</h2>
            <div>
                Capital {capital}
            </div>
            <div>
                Population {population}
            </div>
            <h3>Languages</h3>
            <Languages languages={languages} />
            <div><img src={flag} alt={flag} height={100} /></div>
        </div>
    );
};

export default Country;
