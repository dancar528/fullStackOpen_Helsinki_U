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

const Part = ({ name, exercises }) => (
    <li>{name} {exercises}</li>
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
    </div>
);

const App = ({ course }) => (
    <Course name={course.name} parts={course.parts} />
);

ReactDOM.render(
    <App course={course} />,
    document.getElementById('root')
);
