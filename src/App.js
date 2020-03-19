import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

class App extends Component {
  constructor() {
    super();


    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  /*Life Cycle Method from class: fetches from the url, changes the response to json format, and set the array of users which was retrieved from the url to the monsters array in the this.state above */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }));
  }

  render() {
    
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // Tried to Add the Ability to Search Emails in the Search Field
   // const filteredEmails = monsters.filter(monster => monster.email.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <input type='search' placeholder='Monster Search' onChange={e => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
