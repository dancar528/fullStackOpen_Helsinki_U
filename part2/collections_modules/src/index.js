import React from 'react';
import ReactDOM from 'react-dom';

const courses = [
    {
        name: 'Half Stack application development',
        id: 1,
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
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    },
    {
        name: "Node.js",
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
];

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

const App = ({ courses }) => courses.map(course =>
    <Course key={course.id} name={course.name} parts={course.parts} />
);

ReactDOM.render(
    <App courses={courses} />,
    document.getElementById('root')
);
