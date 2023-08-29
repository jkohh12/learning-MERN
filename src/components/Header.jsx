import React from 'react';

const Header = (props) => {
    const {firstName, lastName, Age, HairColor} = props;
    
    return (
        <div>
            <h1> My name is { firstName } { lastName } </h1>
            <p> Age: { Age } </p>
            <p> Hair Color: {HairColor} </p>
        </div>
    ); 
  
}


export default Header