import React, { useState } from 'react'

const Button = ({onClick, text}) => (
    <button onClick={onClick}> 
      {text}
    </button>
)

const TableRow = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ stats, all }) => {
  if (all === 0) {
    return (
      <div>
       <h1>statistics</h1>
       no data
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
          <TableRow text={stats[0].name} value={stats[0].value}></TableRow>
          <TableRow text={stats[1].name} value={stats[1].value}></TableRow>
          <TableRow text={stats[2].name} value={stats[2].value}></TableRow>
          <TableRow text={stats[3].name} value={stats[3].value}></TableRow>
          <TableRow text={stats[4].name} value={stats[4].value}></TableRow>
          <TableRow text={stats[5].name} value={stats[5].value}></TableRow>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = () => good + bad + neutral
  
  const average = () => (good - bad) / all()

  const positive = () => good / all()

  const stats = [{ name: "good", value: good }, 
                  { name: "neutral", value: neutral },
                  { name: "bad", value: bad },
                  { name: "all", value: all() },
                  { name: "average", value: average() },
                  { name: "positive", value: positive() }]

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <Statistics stats={stats} all={all()}></Statistics>
    </div>
  )
}

export default App