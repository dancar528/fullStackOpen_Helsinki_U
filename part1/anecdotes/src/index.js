import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Anecdote = ({title, anecdote, points, validateRender}) => {
    if (validateRender && points === 0) {
        return null;
    }
    return (
        <div>
            <p><strong>{title}</strong></p>
            <p>{anecdote}</p>
            <p>with {points} votes</p>
        </div>
    );
};

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
            .map(Number.prototype.valueOf, 0)
    );
    const [mostVotedIndex, setMostVoted] = useState(0);

    const getAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
        setAnecdoteIndex(randomIndex);
    };

    const voteAnecdote = (index) => () => {
        const newPoints = [...points];
        newPoints[index] += 1;
        setPoints(newPoints);
        getMostVoted(newPoints);
    };

    const getMostVoted = (newPoints) => {
        let max = 0;
        let maxIndex = 0;
        for (let i = 0; i < newPoints.length; i++) {
            if (newPoints[i] > max) {
                max = newPoints[i];
                maxIndex = i;
            }
        }
        setMostVoted(maxIndex);
    };

    return (
        <div>
            <Anecdote
                title="Anecdote of the day"
                anecdote={anecdotes[anecdoteIndex]}
                points={points[anecdoteIndex]}
                validateRender={false} />
            <div>
                <button onClick={voteAnecdote(anecdoteIndex)}>Vote</button>
                <button onClick={getAnecdote}>Next anecdote</button>
            </div>
            <Anecdote
                title="Anecdote with most votes"
                anecdote={anecdotes[mostVotedIndex]}
                points={points[mostVotedIndex]}
                validateRender={true} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
