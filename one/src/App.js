import React, { Component, useState } from 'react';
import Person from './Person/Person.js' ;
import './App.css';

class App extends Component {
  state = {
    persons:[
      { name:'Max', age:12 },
      { name :'Mark', age:23 },
      { name :'Marshall', age:32}
    ],
    showPersons:false
  }
  switchName=(newName) =>{
    this.setState({
      persons:[
        { name: newName, age:12 },
      { name :'Mark 2.0', age:23 },
      { name :'Marshall 2.0', age:32}
      ]
    })
    this.state.persons[0].name = "Max 2.0";
  }


  nameChange=(event)=>{
    this.setState(
      {
        persons:[
          {name : event.target.value , age:29 },
          { name :'Mark', age:23 },
          { name :'Marshall', age:32}
        ]
      }
    )

  }

  togglePersons=()=>{
    const show= this.state.showPersons;
    this.setState({showPersons:!show});
  }
      render() {
        const style ={
          backgroundColor : 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding:'8px',
          cursor:'pointer'
        };
        
        let contnt = null;
        if(this.state.showPersons)
        {
          contnt = (
            <div >
              {this.state.persons.map(ppl=>{
                return <Person name={ppl.name} 
                                age={ppl.age} 
                                changed={this.nameChange}></Person>
              }) }
            </div>

          )
        }

        return (
          <div className="App" >
            <h1>This is React App</h1>
            <p>This part is main app section</p>
            <button style={style} onClick={this.togglePersons}>Toggle</button>
          {contnt}
         </div>
        );
      }
  }


  // const App = props =>{
  //   const [personsState, setPersonsState] = useState({
  //   persons:[
  //     { name:'Max', age:12 },
  //     { name :'Mark', age:23 },
  //     { name :'Marshall', age:32}
  //   ]
  // });
  //   const switchName=() =>{
  //   setPersonsState({
  //     persons:[
  //       { name:'Max 2.0', age:12 },
  //     { name :'Mark 2.0', age:23 },
  //     { name :'Marshall 2.0', age:32}
  //     ]
  //   })
  //   personsState.persons[0].name = "Max 2.0";
  // }

  
  //   return (
  //     <div className="App">
  //       <h1>This is React App</h1>
  //       <p>This part is main app section</p>
  //       <button onClick={switchName}>Switch Name</button>
  //       <Person name ={personsState.persons[0].name} age ={personsState.persons[0].age}>"Yo I am an engineer"</Person>
  //       <Person name ={personsState.persons[1].name} age ={personsState.persons[1].age}>"I love Badminton"</Person>
  //       <Person name ={personsState.persons[2].name} age ={personsState.persons[2].age}>"I am done with hobbies"</Person>
  //     </div>
  //   );
  // }

export default App;
