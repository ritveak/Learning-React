import React, { Component, useState } from 'react';
import Person from './Person/Person.js' ;
import './App.css';

class App extends Component {
  state = {
    persons:[
      { id:'1',name:'Max', age:12 },
      { id:'2',name :'Mark', age:23 },
      { id:'3',name :'Marshall', age:32}
    ],
    showPersons:false
  }
  // switchName=(newName) =>{
  //   this.setState({
  //     persons:[
  //       { name: newName, age:12 },
  //     { name :'Mark 2.0', age:23 },
  //     { name :'Marshall 2.0', age:32}
  //     ]
  //   })
  //   this.state.persons[0].name = "Max 2.0";
  // }


    // nameChange=(event)=>{
      
    //   this.setState(
    //     {
    //       persons:[
    //         { id:'1', name : event.target.value , age:29 },
    //         { id:'2', name :'Mark', age:23 },
    //         { id:'3', name :'Marshall', age:32}
    //       ]
    //     }
    //   )

    // }

  // nameChange=(event,id)=>{
  //   const personIndex = this.state.persons.findIndex(p=>{
  //     return p.id == id;
  //   });
  //   const people ={
  //     ...this.state.persons[personIndex]
  //   };
  //   // console.log($event.target.value );
  //   // //people[index].name= event.target.value;
  //   // this.setState(
  //   //   {
  //   //     persons:people
  //   //   }
  //   //)

  // }

  nameChange=(event,index)=>{
    let people = this.state.persons;
    people[index].name= event.target.value;

    console.log(people[index].name);
    this.setState(
      {
        persons:people
      }
    )
  }

  

  togglePersons=()=>{
    const show= this.state.showPersons;
    this.setState({showPersons:!show});
  }

  deletePerson=(index)=>{
    const people = this.state.persons.slice();
    //or use spread operator like this:
    //const people = [...this.state.persons]
    people.splice(index,1);
    this.setState({persons:people})


  }
      render() {
        const style ={
          backgroundColor : 'green',
          color:'white',
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
              {this.state.persons.map((ppl,index)=>{
                return <Person name={ppl.name} 
                                age={ppl.age} 
                                changed={(event)=>this.nameChange(event, index)}
                                click={()=>this.deletePerson(index)}
                                key={index}></Person>
              }) }
            </div>

          );
          style.backgroundColor='maroon';
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
