import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import CountryListItem from './components/CountryListItem'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    console.log('effect');
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])


  const handleSearchChange = (event) => {
    console.log('event.target.value :>> ', event.target.value);
    setSearchTerm(event.target.value)
  }

  const getFilteredCountries = () => {
    if (searchTerm === '') {
      return ([])
    }

    const filteredCountries = countries.filter(
      country => country.name.common.toLowerCase().includes(searchTerm))

    if (filteredCountries.length > 0 && filteredCountries.length < 11) {
      return filteredCountries
    } else {
      return ([])
    }

  }

  const displayInfo = () => {
    const countries = getFilteredCountries();
    if (getFilteredCountries().length === 1) {
      return (<Country key={countries[0].ccn3} country={countries[0]} />)
    } else {
      return (
        getFilteredCountries().map(
          item => <CountryListItem key={item.ccn3} name={item.name.common}></CountryListItem>))
    }
  }

  return (
  <div>
      <h2>Search</h2>
      <Search
        value={searchTerm}
        onChange={handleSearchChange} />
      <h2>Results</h2>
      {displayInfo()}
    </div>

  )
}

export default App
