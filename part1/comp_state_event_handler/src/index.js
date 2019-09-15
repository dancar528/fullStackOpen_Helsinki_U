import React, {useState} from 'react'
import ReactDOM from 'react-dom'

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
            <div>
                <p><strong>Statistics</strong></p>
                <p>Good: {feedbacks.good}</p>
                <p>Neutral: {feedbacks.neutral}</p>
                <p>Bad: {feedbacks.bad}</p>
                <p>All: {feedbacks.good + feedbacks.neutral + feedbacks.bad}</p>
                <p>Average: {(feedbacks.good + feedbacks.neutral + feedbacks.bad) / 3}</p>
                <p>Positive: {(feedbacks.good / (feedbacks.good + feedbacks.neutral + feedbacks.bad)) * 100} %</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))