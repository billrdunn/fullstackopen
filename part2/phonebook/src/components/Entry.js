import React from 'react';

const Entry = ({ name, number, onClick }) => {
    console.log('printing name :>> ', name);
    console.log('printing number :>> ', number);
    return (<div>
        <li>{name}: {number} <button onClick={onClick}>delete</button></li>
    </div>)
}

export default Entry