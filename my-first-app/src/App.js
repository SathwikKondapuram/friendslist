import './App.css';
import { Component } from 'react';
import {Cardlist} from './components/card-list/card-list.component'
import {SearchBox} from './components/SearchBox/search-box.component'
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
      <div className="App">
        <h1> Friends List</h1>
        <SearchBox 
        placeholder='search friends'
        handleChange= {e => this.setState({searchField: e.target.value})}
        />

        <Cardlist monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
