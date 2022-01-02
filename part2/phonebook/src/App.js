import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('event.target :>> ', event.target);
    const personObject = {
      name: newName,
    }
    if (persons.some(person => person.name === newName)) {
      console.log(`${newName} already exists`);
      window.alert(`${newName} already exists`)
    } else {
      setPersons(persons.concat(personObject))
    }
  }

  const handleNameChange = (event) => {
    console.log('event.target.value :>> ', event.target.value);
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        name: <input
          value={newName}
          onChange={handleNameChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <Person key ={person.name} person={person}></Person>)}
      </ul>
    </div>
  )
}

export default App
