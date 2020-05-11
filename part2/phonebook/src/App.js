import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Components/Book';
import Search from './Components/Search';
import AddNew from './Components/AddNew';

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.filter(person => person.name === personObject.name).length > 0) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName('');
    setNewNumber('');

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const searchMatch = persons.filter(person => person.name.includes(newSearch));
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Search handleSearch={handleSearch} />
      <AddNew addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <table>
        <tbody>
          <Book persons={persons} newSearch={newSearch}/>
        </tbody>
      </table>
    </div>
  )
}

export default App