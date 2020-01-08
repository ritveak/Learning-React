import React from 'react';

const person =(props) =>{
    return (
    // <p> This is a person and that person is {Math.floor(Math.random()*30)}  </p>
<div>
<p onClick = {props.click}  >This is {props.name}, who is {props.age} years old.</p>
    <p>{props.children}</p>
</div>
    )
};

export default person;