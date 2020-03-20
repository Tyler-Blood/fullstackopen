import React from 'react'

const AddNew = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => {
    return (
    <>
    <h2>Add New</h2>
      <form onSubmit={addName}>
        <div>
          name: 
            <input 
              value={newName}
              onChange={handleNameChange}
             />
        </div>
        <div>
          number: 
            <input 
              type='tel'
              value={newNumber}
              onChange={handleNumberChange}
             />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </>
    )
}

export default AddNew