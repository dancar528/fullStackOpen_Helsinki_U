import React from 'react';
import ReactDOM from 'react-dom';

const course = {
    name: 'Half Stack application development',
    parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
        },
        {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
        },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3
        }
    ]
};

const Total = ({ parts }) => {
    const total = parts.reduce(
        (accumulator, currentVal, index, array) =>
            accumulator + currentVal.exercises, 0
    );
    return <h3>Total of {total} exercises</h3>;
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
    <h1>{name}</h1>
);

const Course = ({ name, parts }) => (
    <div>
        <Header name={name} />
        <Content parts={parts} />
        <Total parts={parts} />
    </div>
);

const App = ({ course }) => (
    <Course name={course.name} parts={course.parts} />
);

ReactDOM.render(
    <App course={course} />,
    document.getElementById('root')
);
