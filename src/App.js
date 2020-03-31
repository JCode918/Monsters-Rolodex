import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();


    this.state = {
      monsters: [],
      searchField: ''
    };

    /*
    This binding is no longer needed as I am using an arrow function below. Which automatically binds.
    this.handleChange = this.handleChange.bind(this);
    */
  }

  /*Life Cycle Method from class: fetches from the url, changes the response to json format, and set the array of users which was retrieved from the url to the monsters array in the this.state above */
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // Tried to Add the Ability to Search Emails in the Search Field
    //const filteredEmails = monsters.filter(monster => monster.email.toLowerCase().includes(emailField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='Monster Search' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
