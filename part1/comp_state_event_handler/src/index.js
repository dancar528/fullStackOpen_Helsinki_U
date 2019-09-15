import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Statitics = ({good, neutral, bad, all, average, positive}) => {
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
            <Statitic text="Good" value={good} />
            <Statitic text="Neutral" value={neutral} />
            <Statitic text="Bad" value={bad} />
            <Statitic text="All" value={all} />
            <Statitic text="Average" value={average} />
            <Statitic text="Positive" value={positive} suffix="%" />
        </div>
    );
};

const Statitic = ({text, value, suffix}) => (
    <p>{text}: {value} {suffix}</p>
);

const Button = ({eventHandler, text}) => (
    <button onClick={eventHandler}>{text}</button>
);

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

    return (
        <div>
            <div>
                <p><strong>Give Feedback</strong></p>
                <Button eventHandler={setGood} text="Good" />
                <Button eventHandler={setNeutral} text="Neutral" />
                <Button eventHandler={setBad} text="Bad" />
            </div>
            <Statitics
                good={feedbacks.good}
                neutral={feedbacks.neutral}
                bad={feedbacks.bad}
                all={feedbacks.all}
                average={feedbacks.all / 3}
                positive={(feedbacks.good / feedbacks.all) * 100} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))