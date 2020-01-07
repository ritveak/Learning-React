import React from 'react';

const person =(props) =>{
    return (
    // <p> This is a person and that person is {Math.floor(Math.random()*30)}  </p>
<p>This is {props.name}, who is {props.age} years old.</p>
    )
};

export default person;