import React from 'react';
import OneCountry from './OneCountry';

const ShowButton = ({ handleShow, match }) => {
  return (
  <button onClick={() => handleShow(match.alpha3Code)}>show</button>
  );
}

export default ShowButton