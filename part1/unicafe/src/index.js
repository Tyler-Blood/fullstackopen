import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = props => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // handle clicks of each button
  const handleGoodClick = () => {
    setGood(good + 1);
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
  }

  // constants for score
  const goodScore = 1;
  const neutralScore = 0;
  const badScore = -1;

  // maths
  const allReview = good + neutral + bad;
  const average = (good * goodScore + neutral * neutralScore + bad * badScore) / allReview;
  const positive = (good / allReview) * 100 + ' %';

  if (allReview){
    return (
      <div>
        <Header />
        <Button onClick={handleGoodClick} name="good" />
        <Button onClick={handleNeutralClick} name="neutral" />
        <Button onClick={handleBadClick} name="bad" />
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistics text="good" value={good} />
            <Statistics text="neutral" value={neutral} />
            <Statistics text="bad" value={bad} />
            <Statistics text="all" value={allReview} />
            <Statistics text="average" value={average} />
            <Statistics text="positive" value={positive} />
          </tbody>
        </table>
      </div>
    )
  } else {
      return (
        <div>
          <Header />
          <Button onClick={handleGoodClick} name="good" />
          <Button onClick={handleNeutralClick} name="neutral" />
          <Button onClick={handleBadClick} name="bad" />
          <h2>statistics</h2>
          <h3>no feedback given</h3>
        </div>
      )
  }
}

const Header = () => (
  <h1>give feedback</h1>
)

const Statistics = ({text, value}) => {
  return (
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Button = ({ onClick, name }) => {
  return (
    <button onClick={onClick}>
      {name}
    </button>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)