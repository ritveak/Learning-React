import React, { Component } from 'react';
import Person from './Person/Person.js' ;
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is React App</h1>
        <p>This part is main app section</p>
        <Person name ="Max" age ="12">"Yo I am an engineer"</Person>
        <Person name ="Mark" age ="23">"I love Badminton"</Person>
        <Person name ="Marshall" age ="32">"I am done with hobbies"</Person>
      </div>
    );
  }
}

export default App;
