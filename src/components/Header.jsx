import React, { useState }  from 'react';

const Header = props => {
    const {firstName, lastName, Age, HairColor} = props;
    const [count, setCount] = useState(0);

    const handleCheck = () => {
        setCount(count+1)
    }


    
    
    return (
        <div>
            <h1> {lastName} , {firstName} </h1>
            <p> Age: { Age + count } </p>
            <p> Hair Color: {HairColor} </p>
            <button onClick={handleCheck}> Birthday Button For {firstName} {lastName} </button>  
        </div>
    ); 
  
}


export default Header