import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//Hooks using useState() functional component
const app = props => {

  //Array Destructuring used to pull out elements from the right side of the equal sign
  //personsState gives access to the object called persons and should replace this. to personsState 
  //instead due to being a functional component NOT a class based component
  //setPersonsState allows us to set a new state and override previous data
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age:26},
    ],
    otherState: 'some other value'
  });

  //useState({otherState: 'some other value'});
  // OR you can directly use data without using object
  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState,otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked!');
   // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    setPersonsState({
      persons: [
        {name: 'Maximilian', age:28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age:27},
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={this.switchNameHandler}>My Hobbies:Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App'));
} 

export default app;



/*class App extends Component {
  //state can only be accessed in class-based components!
  state = {
    persons: [
      {name: 'Max', age:28},
      {name: 'Manu', age:29},
      {name: 'Stephanie', age:26},
    ],
    otherState: 'some other value'
  }

  Event Handler
  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
   // DON'T DO THIS: this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        {name: newName, age:28},
        {name: 'Manu', age:29},
        {name: 'Stephanie', age:27},
      ]
    })
  }

   // Needs to be implemented in class-based components! Needs to return some JSX!
   render() {
     return (
       <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        //bind(this) used to bound with the arguement passed
+       //<button onClick={this.switchNameHandler.bind(this,'Maximillian')}>Switch Name</button>
        //This is an anonymous function which will be executed on click and
        //returns the result of this function getting executed
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>  
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchHandler.bind(this, 'Max!')}>My Hobbies:Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
       </div>
     );
     //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, I\'m a React App'));
   }
 } 
 
 export default App;
}*/
  
