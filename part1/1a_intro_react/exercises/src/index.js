import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import * as serviceWorker from './serviceWorker';
const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    );
};

/*const App = () => {
    const name = "Peter";
    const age = 10;
    return [
        
            <p>Greetings</p>,
            <Hello name="George" age={26 + 10}/>,
            <Hello name={name} age={age}/>
        
    ];
};*/

const App = () => {
    const name = "Peter";
    const age = 10;
    return (
        <>
            <p>Greetings</p>
            <Hello name="George" age={26 + 10}/>
            <Hello name={name} age={age}/>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/*
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const now = new Date();
    const a = 10;
    const b = 20;

    return (
        <div>
            <p>Hello world, it is {now.toString()}</p>
            <p>{a} + {b} is {a + b}</p>
        </div>
    );
};

would compile as (by babel):

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)
*/