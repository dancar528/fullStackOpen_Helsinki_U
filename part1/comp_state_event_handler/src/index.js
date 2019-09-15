import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statitics = ({good, neutral, bad}) => (
    <div>
        <p><strong>Statistics</strong></p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>All: {good + neutral + bad}</p>
        <p>Average: {(good + neutral + bad) / 3}</p>
        <p>Positive: {(good / (good + neutral + bad)) * 100} %</p>
    </div>
);

const App = () => {
    const [feedbacks, setFeedback] = useState({
        good: 0, 
        neutral: 0, 
        bad: 0
    });

    const setGood = () => {
        const newfeedbacks = {
            ...feedbacks,
            good: feedbacks.good + 1
        };
        setFeedback(newfeedbacks);
    };

    const setNeutral = () => {
        const newfeedbacks = {
            ...feedbacks,
            neutral: feedbacks.neutral + 1
        };
        setFeedback(newfeedbacks);
    };

    const setBad = () => {
        const newfeedbacks = {
            ...feedbacks,
            bad: feedbacks.bad + 1
        };
        setFeedback(newfeedbacks);
    };

    return (
        <div>
            <div>
                <p><strong>Give Feedback</strong></p>
                <button onClick={setGood}>Good</button>
                <button onClick={setNeutral}>Neutral</button>
                <button onClick={setBad}>Bad</button>
            </div>
            <Statitics
                good={feedbacks.good}
                neutral={feedbacks.neutral}
                bad={feedbacks.bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))