import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import CountryListItem from './components/CountryListItem'
import Country from './components/Country'
import Weather from './components/Weather'

const App = () => {
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])
  const [displayedCountryID, setDisplayedCountry] = useState('')
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

  const getWeather = (cityID) => {
    //2643743
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
  }


  const handleSearchChange = (event) => {
    console.log('event.target.value :>> ', event.target.value);
    setDisplayedCountry('')
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
      getWeather(2643743)
      return (<Country key={countries[0].ccn3} country={countries[0]} />)
    } 
    else if (displayedCountryID !== '') {
      getWeather(2643743)
      const country = countries.filter(country => country.cca3 === displayedCountryID)[0]
      return (<Country key={displayedCountryID} country={country} />)
    }
    else {
      return (
        getFilteredCountries().map(
          item => <CountryListItem key={item.ccn3}
            name={item.name.common} handleClick={handleButtonClick(item.cca3)}></CountryListItem>))
    }
  }

  const handleButtonClick = (cca3) => (
    () => {
      setDisplayedCountry(cca3)
    }
  )

  return (
  <div>
      <h2>Search</h2>
      <Search
        value={searchTerm}
        onChange={handleSearchChange} />
      <h2>Results</h2>
      {displayInfo()}
      <Weather data={weather}></Weather>
    </div>

  )
}

export default App
