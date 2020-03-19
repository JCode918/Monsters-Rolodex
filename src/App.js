import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

class App extends Component {
  constructor() {
    super();


    this.state = { monsters: [] };
  }

  /*Life Cycle Method from class: fetches from the url, changes the response to json format, and set the array of users which was retrieved from the url to the monsters array in the this.state above */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }));
  }

  render() {
    return (

      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
