import React from 'react'

const List = ({ countries, newSearch }) => {
  const regex = new RegExp(newSearch, 'gi');
  const nameMatches = countries.filter(country => country.name.match(regex));
  const matches = [...nameMatches];
  console.log(matches);
  console.log(matches.languages);
  if (matches.length > 10){
    return(
      <p>Too many matches, specify another filter</p>
    )
  } else if (matches.length === 1){
    return(
      <>
      {matches.map((match, i) => 
      (
        <>
          <h1>{match.name}</h1>
          <p>capital: {match.capital}</p>
          <p>population: {match.population}</p>
          <h2>Languages:</h2>
          <ul>
            {match.languages.map(language =>
              <li>{language.name}</li>
            )}
          </ul>
          <img src={match.flag} alt="flag" height="250px" />
        </>
      ))}
      </>
    )
  } else{
    return (
      <ul>
          {matches.map((match) =>
          (
            <li>{match.name}</li>
        ))}
      </ul>
    )

}}

export default List

