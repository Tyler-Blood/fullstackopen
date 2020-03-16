import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
    ],
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
console.log(props);
  return (
      <>
        <Part1 part={props.parts[0]} />
        <Part2 part={props.parts[1]} />
        <Part3 part={props.parts[2]} />
      </>
  )
}

const Part1 = props => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Part2 = props => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Part3 = props => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  let totalExercises = 0;
  props.parts.forEach(part => {
        totalExercises += part.exercises;
      })
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}
      
ReactDOM.render(<App />, document.getElementById('root'));