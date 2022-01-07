import React, { useState } from 'react'
import Entry from './components/Entry'
import Search from './components/Search'
import NewEntryForm from './components/NewEntryForm'

const App = () => {
  const [entries, setEntries] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [reducedEntries, setReducedEntries] = useState(entries)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const addEntry = (event) => {
    event.preventDefault()
    console.log('event.target :>> ', event.target);
    const newEntry = {
      name: newName,
      number: newNumber,
      id: entries.length + 1
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
      console.log('setting new entries');
      setEntries(entries.concat(newEntry))
      setReducedEntries(entries.concat(newEntry))
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
        {reducedEntries.map(entry => <Entry key={entry.id} name={entry.name} number={entry.number}></Entry>)}
      </ul>
    </div>
  )
}

export default App
