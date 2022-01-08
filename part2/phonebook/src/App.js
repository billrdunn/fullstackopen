import React, { useState, useEffect } from 'react'
import Entry from './components/Entry'
import Search from './components/Search'
import NewEntryForm from './components/NewEntryForm'
import entryService from './services/entries'

const App = () => {
  const [entries, setEntries] = useState([]) 
  const [reducedEntries, setReducedEntries] = useState(entries)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('effect');
    entryService
      .getAll()
      .then(response => {
        setEntries(response)
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
      entryService
        .create(newEntry)
        .then(response => {
          setEntries(entries.concat(response))
          setReducedEntries(entries.concat(response))
        })
    }
  }

  const deleteEntry = (id) => {
    console.log('deleting entry')
    entryService
      .remove(id)
      .then(response => {
        console.log('response :>> ', response);
        setEntries(entries.filter(entry => entry.id !== id))
        setReducedEntries(entries.filter(entry => entry.id !== id))
      })
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
    setReducedEntries(entries.filter(entry => 
      entry.name.toLowerCase().includes(event.target.value)))
    setSearchTerm(event.target.value)
  }

  const handleDeleteClicked = (entry) => {
    if (window.confirm(`Delete ${entry.name}?`)) {
      deleteEntry(entry.id)
    }
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
            key={entry.id} name={entry.name} number={entry.number} 
            onClick={() => handleDeleteClicked(entry)}>
          </Entry>)}
      </ul>
    </div>
  )
}

export default App
