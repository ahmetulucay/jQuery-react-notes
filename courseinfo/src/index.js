

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts : 
    [{
      name: 'Fundamentals of React: ',
      exercises : 10
    },
    {name : 'Using props to pass data: ',
     exercises : 7
    },
    {name : 'State of a component: ',
     exercises : 14
    }]
  }
  return(
    <>
    <Header course = {course}/>
    <Content course = {course}/>
    <Total course = {course}/>
    </>
  )
}

const Header = (props) => {
  return (
    <h1> 
    {props.course.name}
    </h1>
  )
}

const Part = (props) =>{
  return(
    <h3>
    {props.part.name} 
    {props.part.exercises}
    </h3>
  )
}

const Total = (props) => {
  return(
    <h2>
    Total exercises=
    {props.course.parts[0].exercises+
     props.course.parts[1].exercises+
     props.course.parts[2].exercises
    }
    </h2>
  )
}

const Content = (props) => {
  return (
    <div>
    <Part part = {props.course.parts[0]} />
    <Part part = {props.course.parts[1]} />
    <Part part = {props.course.parts[2]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
