import React from 'react';

const Search = ({ handleSearch }) => {
return (
<div>
    Search: 
    <input onChange={handleSearch} />
</div>
)}

export default Search