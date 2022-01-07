import React from 'react';

const CountryListItem = ({ name, handleClick }) => {
    console.log('printing name :>> ', name);
    return (
        <div>{name} <button onClick={handleClick}>show</button></div>
        )
}

export default CountryListItem