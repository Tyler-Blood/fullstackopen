import React from 'react'

const PhoneBook = ({ persons, newSearch }) => {
if (!newSearch){
  return (
    <>
    {persons.map((person, i) =>
        (
        <tr key={i}>
          <td key={person.name}>{person.name}</td>
          <td key={person.number}>{person.number}</td>
        </tr>
      ))}
    </>
  )
} else {
  const regex = new RegExp(newSearch, 'gi');
  const nameMatches = persons.filter(person => person.name.match(regex));
  const numMatches = persons.filter(person => person.number.match(regex));
  const matches = [...nameMatches, ...numMatches];
  console.log(numMatches);
  return (
    <>
        {matches.map((match, i) =>
        (
        <tr key={i}>
          <td key={match.name}>{match.name}</td>
          <td key={match.number}>{match.number}</td>
        </tr>
      ))}
    </>
  )

}}

{/* <table>
    <tbody>
      {newSearch ? persons.filter(person => person.name.includes(newSearch) === true) {
        (
        <tr key={i}>
          <td key={person.name}>{person.name}</td>
          <td key={person.number}>{person.number}</td>
        </tr>
        ):
      }
        persons.map((person, i) => {
        return (
        <tr key={i}>
          <td key={person.name}>{person.name}</td>
          <td key={person.number}>{person.number}</td>
        </tr>
      )})}
  </tbody>
</table>
} */}

export default PhoneBook