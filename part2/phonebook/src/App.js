import React, { useState } from 'react'
import Book from './Components/Book'
import Search from './Components/Search'
import AddNew from './Components/AddNew'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setSearch ] = useState('')


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
    console.log(newSearch);
    console.log(searchMatch);
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