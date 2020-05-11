import React from 'react'

const List = ({ countries, newSearch }) => {
  const regex = new RegExp(newSearch, 'gi');
  const nameMatches = countries.filter(country => country.name.match(regex));
  const matches = [...nameMatches];
  if (matches.length > 10){
    return(
      <p>Too many matches, specify another filter</p>
    )
  } else if (matches.length === 1){
    return(
      <>
        <h1>{matches[0].name}</h1>
        <p>capital: {matches[0].capital}</p>
        <p>population: {matches[0].population}</p>
        <h2>Languages:</h2>
        <ul>
          {matches[0].languages.map(language =>
            <li key={language.name}>{language.name}</li>
          )}
        </ul>
        <img src={matches[0].flag} alt="flag" height="250px" />
      </>
    )
  } else {
    return (
      <ul>
          {matches.map((match) =>
          (
            <li key={match.alpha3Code}>{match.name}</li>
        ))}
      </ul>
    )

}}

export default List

