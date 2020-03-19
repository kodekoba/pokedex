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
      typeList: ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon'],
      weaknessList: ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon'],
      types: [],
      weaknesses: [],
    };
  };

  componentDidMount(){
    this.fetchPokemon();
  };

  fetchPokemon() {
    axios.get('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
      .then(res => {
        console.log(res.data)
        this.setState({pokemons: res.data.pokemon})
      })
      .catch(error => 
        console.log('error has occured!'));
  };
  
  inputHandler = (e) => {
    console.log(e.target.value)
    this.setState({searchValue: e.target.value});
  }

  checkTypeHandler = (type, e) => {
    let temp = [...this.state.types]
    if(e.target.checked === true) {
      temp.push(type)
    } else {
      temp = temp.filter(el => el !== type)
    }
    this.setState({types: [...temp]});
  }

  checkWeaknessHandler = (weakness, e) => {
    let temp = [...this.state.weaknesses]
    if(e.target.checked === true) {
      temp.push(weakness)
    } else {
      temp = temp.filter(el => el !== weakness)
    }
    this.setState({weaknesses: [...temp]});
  }

  render() {
    const pokemons = this.state.pokemons;
    const selectedTypes = this.state.types;
    const selectedWeaknesses = this.state.weaknesses;

    let filteredPokemon = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    });

    if (selectedTypes.length > 0) {
      for (let i in selectedTypes) {
        let tempList = []
        for (let j in filteredPokemon) {
          if (filteredPokemon[j].type.indexOf(selectedTypes[i]) > -1) {
            tempList = [...tempList, filteredPokemon[j]];
          } 
        }
        filteredPokemon = [...tempList]
      }
    } 
    if (selectedWeaknesses.length > 0) {
      for (let i in selectedWeaknesses) {
        let tempList = []
        for (let j in filteredPokemon) {
          if (filteredPokemon[j].weaknesses.indexOf(selectedWeaknesses[i]) > -1) {
            tempList = [...tempList, filteredPokemon[j]];
          } 
        }
        filteredPokemon = [...tempList]
      }
    } 

    return (
      <div className="container">
        <div className="App">
          <div className="titleStyle">
            <img className="headerStyle" src="https://cdn.discordapp.com/attachments/688630935150657624/690244944245555218/header1.png" alt="React Pokédex" />
            <SearchBox inputHandler={this.inputHandler} placeholder="Search" /><hr />
          </div>

          <div className="typesAndweaknesses">
            <div className="typeStyle">
              <img src="https://fontmeme.com/permalink/200319/07ce9f127a7d2123b4e7979c364e32d6.png" height="80px" alt="Types" />
              {this.state.typeList.map((item, index) => (
                <div className="typeStyle form-check" key={index}>
                  <input type="checkbox" name={item.substring(0, 1).toUpperCase() + item.substring(1)} value={item.substring(0, 1).toUpperCase() + item.substring(1)} onChange={(e) => this.checkTypeHandler(item,e)} />
                  <label htmlFor={item.substring(0, 1).toUpperCase() + item.substring(1)}>{item.substring(0, 1).toUpperCase() + item.substring(1)}</label>
                </div>
              ))}
            </div>

            <div className="weaknessStyle">
              <img src="https://fontmeme.com/permalink/200319/241f3d4a8cb4419ee579351bd525230d.png" height="80px" alt="Weaknesses" />
              {this.state.weaknessList.map((item, index) => (
                <div className="weaknessStyle form-check" key={index}>
                  <input type="checkbox" name={item.substring(0, 1).toUpperCase() + item.substring(1)} value={item.substring(0, 1).toUpperCase() + item.substring(1)} onChange={(e) => this.checkWeaknessHandler(item,e)} />
                  <label htmlFor={item.substring(0, 1).toUpperCase() + item.substring(1)}>{item.substring(0, 1).toUpperCase() + item.substring(1)}</label>
                </div>
              ))}
            </div><hr />
          </div>
        
          <PokeList filteredPokemon={filteredPokemon} />

        </div>
      </div>
    )
  }
};

export default App;
