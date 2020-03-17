import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    pokemon: null,
  }

  componentDidMount(){
    this.fetchPokemon();
  }

  fetchPokemon() {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(res => 
        this.setState({pokemon: JSON.stringify(res.data.pokemon)}))
      .catch(error => 
        console.log('error has occured!'));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Pokedex</h1>
          <hr />

          {this.state.pokemon}
        </div>
      </div>
    )
  }
}

export default App;
