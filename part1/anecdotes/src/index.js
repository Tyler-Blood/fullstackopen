import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const voteCopy = [...props.vote];
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(voteCopy)
  const [best, setBest] = useState(0)
  const handleClick = () => {
    setSelected(Math.round(Math.random() * (props.anecdotes.length - 1)));
  }
  const handleVote = () => {
    votes[selected] += 1;
    setVotes([...votes])
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Content text={props.anecdotes[selected]} />
      <Content text={"has " + votes[selected] + " votes"} />
      <Button onClick={handleVote} name="vote" />
      <Button onClick={handleClick} name="next anecdote" />
      <Header text="Anecdote with most votes" />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const vote = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0);

const Content = ({ text }) => {
  return (
    <p>
      {text}
    </p>
  )
}

const Button = ({ onClick, name }) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

const Header = ({ text }) => {
  return(
    <h1>{text}</h1>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} vote={vote} />,
  document.getElementById('root')
)