import React from 'react'
import OneCountry from './OneCountry'
import ShowButton from './ShowButton'

const List = ({ countries, newSearch }) => {
  const regex = new RegExp(newSearch, 'gi');
  const nameMatches = countries.filter(country => country.name.match(regex));
  const matches = [...nameMatches];

  function handleShow(alpha3Code){
    var showingElement = document.querySelector(`#${alpha3Code}`);
    console.log(showingElement);
    showingElement.classList.toggle('isHidden');
    console.log(showingElement);
  }

  if (matches.length > 10){
    return(
      <p>Too many matches, specify another filter</p>
    )
  } else if (matches.length === 1){
    let showCountry = matches[0];
    return(
      <OneCountry showCountry={showCountry}/>
    )
  } else {
    return (
      <ul>
          {matches.map((match, i) =>{
            let alpha3Code = match.alpha3Code;
            let showCountry = matches[i];
          return (
            <li key={match.alpha3Code}>
              {match.name}
              <ShowButton handleShow={handleShow} match={match}/>
              <div id={alpha3Code} className='isHidden'>
                <OneCountry showCountry={showCountry}/>
              </div>
            </li>
            
        )})}
      </ul>
    )

}}

export default List

