import React from 'react'

const OneCountry = ({ showCountry }) => {
  return(
    <>
        <h1>{showCountry.name}</h1>
        <p>capital: {showCountry.capital}</p>
        <p>population: {showCountry.population}</p>
        <h2>Languages:</h2>
        <ul>
          {showCountry.languages.map(language =>
            <li key={language.name}>{language.name}</li>
          )}
        </ul>
        <img src={showCountry.flag} alt="flag" height="250px" />
      </>
  )
}

export default OneCountry