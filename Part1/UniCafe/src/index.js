import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all>0) {
    const average = (good*1 + neutral*0 + bad*-1) / all;
    const positive = (good/all) * 100;
    return (
      <div>
        <table>
          <tbody>
            <Statistic text='good     ' value={good} />
            <Statistic text="neutral  " value={neutral} />
            <Statistic text="bad      " value={bad} />
            <Statistic text="all      " value={all} />
            <Statistic text="average  " value={average} />
            <Statistic text="positive " value={positive + " %"} />
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <p>no feedback given</p>
  );
};

const Statistic = ({text, value}) => (
   <tr>
     <td>
       {text} {value}
     </td>
   </tr>
);

const Button = ({onClick, text}) => (
  <button onClick ={onClick}> {text} </button>
);

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <Button onClick = { () => setGood(good+1)} text = "good" />
        <Button onClick = { () => setNeutral(neutral+1)} text = "neutral" />
        <Button onClick = { () => setBad(bad+1)} text = "bad" />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </>
  );
};

ReactDOM.render(<App />,document.getElementById('root'));
