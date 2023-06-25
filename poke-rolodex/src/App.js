import { Component } from 'react';

import "./components/search-box/search-box.component"
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      pokemons: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
    .then(response => response.json())
    .then(pokes =>
      this.setState(()=>{
        return {pokemons: pokes.results}
      }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase()

    this.setState(()=>{
      return {searchField: searchField}
    })
  }
  render() {

    const { pokemons, searchField } = this.state
    const { onSearchChange } = this
    console.log(pokemons)

    const filteredPokemonList = pokemons.filter(
      (pokemon) => {
        return pokemon.name.toLowerCase().includes(searchField)
      })


    return (
      <div className="App">
        <SearchBox onChangeHandler= {onSearchChange} placeholder= "Search pokemons"/>
        <CardList pokemonlist = {filteredPokemonList}/>
      </div>
    );
  }
  
}

export default App;
