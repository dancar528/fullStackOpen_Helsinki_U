import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statitics = ({good, neutral, bad, all}) => {
    const title = 'Statistics';
    if (all === 0) {
        return (
            <div>
                <p><strong>{title}</strong></p>
                <p>No feedbacks given</p>
            </div>
        );
    }
    return (
        <div>
            <p><strong>{title}</strong></p>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>All: {all}</p>
            <p>Average: {all / 3}</p>
            <p>Positive: {(good / all) * 100} %</p>
        </div>
    );
};

const App = () => {
    const [feedbacks, setFeedback] = useState({
        good: 0, 
        neutral: 0, 
        bad: 0,
        all: 0
    });

    const setGood = () => {
        const newfeedbacks = {
            ...feedbacks,
            good: feedbacks.good + 1,
            all: feedbacks.all + 1
        };
        setFeedback(newfeedbacks);
    };

    const setNeutral = () => {
        const newfeedbacks = {
            ...feedbacks,
            neutral: feedbacks.neutral + 1,
            all: feedbacks.all + 1
        };
        setFeedback(newfeedbacks);
    };

    const setBad = () => {
        const newfeedbacks = {
            ...feedbacks,
            bad: feedbacks.bad + 1,
            all: feedbacks.all + 1
        };
        setFeedback(newfeedbacks);
    };
    console.log(feedbacks);

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
                bad={feedbacks.bad}
                all={feedbacks.all} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))