import React from 'react';

const NewEntryForm = ({ onSubmit, onNameChange, onNumberChange, nameValue, numberValue }) => {
    return(
    <form onSubmit={onSubmit}>
        name: <input
          value={nameValue}
          onChange={onNameChange} />
          <div>
        number: <input
          value={numberValue}
          onChange={onNumberChange} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>)
}

export default NewEntryForm