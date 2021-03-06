import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { render } from '@testing-library/react';

//Create state for your app.js with isClicked: false in it
// formOnClick = event => {
//   event.preventDefault()
//    this.setState({
//      items : [...this.state.items, this.state.input],
//      input: ''
//    })
// }
// Yank out all the unnecessary code and begin building a todo app
// Create state for your app.js with isClicked: false in it
// Create a button and add an onClick handler that changes the value of isClicked
// Create an input field and then a function that changes the state of text: '' to the e.target.value onChange of the input field
// Change your onClickHandler function to push the value of text into todos: []
// Now clear text in the same function
// Once you have state being changed properly create an element for each of the items in todos: []
// Now .map() over todos and show each item in the DOM. REMEMBER to give the callback function in .map() an index and provide that to each of the elements as index={index}
// Create a button on each of the elements that uses this and when clicked removes/deletes the item from todos: []


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      ToDo: [],
      isClicked: false
    }
  };
  
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         To-do app
        </p>
        <form>
          <input/>
        <button>Add to-do</button>
        <button>Completed</button>
        </form>
      </header>
    </div>
  );
  }
}

export default App;
