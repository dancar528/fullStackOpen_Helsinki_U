import React from 'react';
import ReacDOM from 'react-dom';

const Header = (props) => (
  <>
    <h1>{props.course}</h1>
  </>
);

const Part = (props) => (
  <>
    <p>
      {props.name} {props.exercises}
    </p>
  </>
);

const Content = (props) => (
  <>
    <Part name={props.part1} exercises={props.exercises1} />
    <Part name={props.part2} exercises={props.exercises2} />
    <Part name={props.part3} exercises={props.exercises3} />
  </>
);

const Total = (props) => (
  <>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </>
);

const App = () => {
  const course = 'Half Stack application Development';
  const part1 = {
    name: 'Fundamentals of react',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises} />
      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises} />
    </div>
  );
};

ReacDOM.render(<App />, document.getElementById('root'));
