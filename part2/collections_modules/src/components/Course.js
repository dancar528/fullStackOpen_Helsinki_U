import React from 'react';

const Total = ({ parts }) => {
    const total = parts.reduce(
        (accumulator, currentVal, index, array) =>
            accumulator + currentVal.exercises, 0
    );
    return <h4>Total of {total} exercises</h4>;
};

const Part = ({ name, exercises }) => (
    <div>{name} {exercises}</div>
);

const Content = ({ parts }) => parts.map(part => 
    <Part
        key={part.id}
        name={part.name}
        exercises={part.exercises} />
);

const Header = ({ name }) => (
    <h2>{name}</h2>
);

const Course = ({ name, parts }) => (
    <div>
        <Header name={name} />
        <Content parts={parts} />
        <Total parts={parts} />
    </div>
);

export default Course; 
