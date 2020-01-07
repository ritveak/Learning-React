import React, { Component } from 'react';
import Person from './Person/Person.js' ;
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is React App</h1>
        <p>This part is main app section</p>
        <Person></Person>
      </div>
    );
  }
}

export default App;
