import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Entry from './components/Entry'
import Search from './components/Search'
import NewEntryForm from './components/NewEntryForm'

const App = () => {
  const [entries, setEntries] = useState([]) 
  const [reducedEntries, setReducedEntries] = useState(entries)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setEntries(response.data)
      })
  }, [])

  const addEntry = (event) => {
    event.preventDefault()
    console.log('event.target :>> ', event.target);
    const newEntry = {
      name: newName,
      number: newNumber,
    }
    if (entries.some(entry => entry.name === newName)) {
      console.log(`${newName} already exists`);
      window.alert(`${newName} already exists`)
    } 
    else if (entries.some(entry => entry.number === newNumber)) {
      console.log(`${newNumber} already exists`);
      window.alert(`${newNumber} already exists`)
    } 
    else {
      console.log('sending data to json server');
      axios
        .post('http://localhost:3001/persons', newEntry)
        .then(response => {
          console.log(response)
          setEntries(entries.concat(response.data))
          setReducedEntries(entries.concat(response.data))
        })
    }
  }

  const handleNameChange = (event) => {
    console.log('event.target.value :>> ', event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log('event.target.value :>> ', event.target.value);
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log('event.target.value :>> ', event.target.value);
    setReducedEntries(entries.filter(entry => entry.name.toLowerCase().includes(event.target.value)))
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search
        value = {searchTerm}
        onChange={handleSearchChange}/>
      <h2>Add New</h2>
      <NewEntryForm 
        onSubmit={addEntry} 
        onNameChange={handleNameChange} 
        onNumberChange={handleNumberChange}
        nameValue={newName}
        numberValue={newNumber}>
      </NewEntryForm>
      <h2>Numbers</h2>
      <ul>
        {reducedEntries.map(
          entry => <Entry
            key={entry.id} name={entry.name} number={entry.number}>
          </Entry>)}
      </ul>
    </div>
  )
}

export default App
