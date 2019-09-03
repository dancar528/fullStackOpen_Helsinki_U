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
    <p>Number of execises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </>
);

const App = () => {
  const course = 'Half Stack application Development';
  const part1 = 'Fundamentals of react';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3} />
      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3} />
    </div>
  );
};

ReacDOM.render(<App />, document.getElementById('root'));
