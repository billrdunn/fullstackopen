import React from 'react';

const Entry = ({ name, number }) => {
    console.log('printing name :>> ', name);
    console.log('printing number :>> ', number);
    return <li>{name}: {number}</li>
}

export default Entry