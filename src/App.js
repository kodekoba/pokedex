import React, { Component } from 'react';
import axios from 'axios';
import PokeList from './PokeList';
import SearchBox from './SearchBox'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      searchValue: '',
    };
  };

  componentDidMount(){
    this.fetchPokemon();
  };

  fetchPokemon() {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(res => 
        this.setState({pokemons: res.data.pokemon}))
        // this.setState({pokemons: JSON.stringify(res.data.pokemon)}))
      .catch(error => 
        console.log('error has occured!'));
  };

  inputHandler = (e) => {
    console.log(e.target.value)
    this.setState({searchValue: e.target.value});
  }

  render() {
    const pokemons = this.state.pokemons;

    let filteredPokemon = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })

    return (
      <div className="App">
          <div>
            <h1>Pokedex</h1>
            <SearchBox inputHandler={this.inputHandler} />
          </div>
          <div className="typeStyle">
            <input type="checkbox" name="Grass" value="Bike" />
            <label for="Grass"> I have a bike</label><br />
          </div>
          <hr />
          
          <PokeList filteredPokemon={filteredPokemon} />

      </div>
    )
  }
};

export default App;
