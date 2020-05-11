import React, { useState, useEffect, cloneElement } from 'react';
import axios from 'axios';
import Search from'./Components/Search';
import List from './Components/List';

const App = () => {
  const [countries, setCountries ] = useState([])
  const [newSearch, setSearch] = useState('')
  
  useEffect(() => {
    if (countries.length < 1){
      axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          setCountries(response.data);
        })
        .catch(error => {
          console.log(error);
        })
  }})

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <p>find countries</p>
      <Search handleSearch={handleSearch} />
      <List countries={countries} newSearch={newSearch} />
    </>
  )
}

export default App;
