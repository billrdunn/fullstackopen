import React from 'react';

const CountryListItem = ({ name }) => {
    console.log('printing name :>> ', name);
    return (
        <div>{name}</div>
        )
}

export default CountryListItem