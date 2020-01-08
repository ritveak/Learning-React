import React from 'react';
import './Person.css';
const person =(props) =>{
    return (
    // <p> This is a person and that person is {Math.floor(Math.random()*30)}  </p>
<div className="Person" > 
<p onClick = {props.click}  >This is {props.name}, who is {props.age} years old.</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed } value={props.name} ></input>
</div>
    )
};

export default person;