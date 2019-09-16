import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const anecdotes = [
        'Brooks Law: "Adding manpower to a late software project makes it later!"',
        `The best way to get a project done faster is to start sooner 
        --Jim Highsmith`,
        `The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.
        -- Tom Cargill`,
        `Even the best planning is not so omniscient as to get it right the first time.
        -- Fred Brooks`,
        `How does a project get to be a year late?... One day at a time.
        -- Fred Brooks`,
        `Plan to throw one (implementation) away; you will, anyhow.
        -- Fred Brooks`,
        `Every good work of software starts by scratching a developer's personal itch`,
        `Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away
        --Antoine de Saint-Exupery`,
        `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
        --Martin Fowler`,
        `Program testing can be used to show the presence of bugs, but never to show their absence!
        --Edsger Dijkstra`,
        `A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.
        --Niklaus Wirth`
    ];
    const [anecdoteIndex, setAnecdoteIndex] = useState(0);
    const [points, setPoints] = useState(
        Array.apply(null, new Array(anecdotes.length))
            .map(Number.prototype.valueOf,0)
    );

    const getAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
        setAnecdoteIndex(randomIndex);
    };

    const voteAnecdote = (index) => () => {
        const newPoints = [...points];
        newPoints[index] += 1;
        setPoints(newPoints);
    };

    return (
        <div>
            <p>{anecdotes[anecdoteIndex]}</p>
            <p>has {points[anecdoteIndex]} votes</p>
            <button onClick={voteAnecdote(anecdoteIndex)}>Vote</button>
            <button onClick={getAnecdote}>Next anecdote</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
