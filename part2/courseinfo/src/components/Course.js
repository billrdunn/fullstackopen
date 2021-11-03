import React from "react"

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course}></Header>
            <Content course={course}></Content>
            <Total course={course}></Total>
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part =>
                <Part part={part} key={part.id}></Part>)}
        </div>
    )
}

const Total = ({ course }) => {
    const total = course.parts.reduce((sum, current) => sum + current.exercises, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}


const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

export default Course
  