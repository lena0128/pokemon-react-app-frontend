import './App.css';
import React, { Component} from 'react';
import PokemonsContainer from './containers/PokemonsContainer';
import TeamContainer from './containers/TeamContainer';
import NavBar from './components/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const url = "http://localhost:5000/pokemons"

class App extends Component {

  state = {
    pokemons: [],
    team: [],
    loading: true,
  }

runAway = () => {
  this.setState({
    team: []
  })
}


// changePage = (event) => {
//   console.log(event)
//     this.setState({
//       page: event.target.id,
//     })
// }

 addPokemon = (id) => {
   console.log("this pokemon's id", id)
   // step 1 - find the pokemon
   const foundPokemon = this.state.pokemons.find((pokemon) => (pokemon.id === id)) // inside find is another callback function
   
   // step 2 - set state amd add the pokemon into the team
   // const intId = parseInt(id) => in case if the input you get is a string
    if (!!this.state.team.find((pokemon) => (pokemon.id === id))){
     console.log("REMOVE THE POKEMON FROM TEAM")
   } else {
     this.setState((prevState, prevProps) => ({
       team: [...prevState.team, foundPokemon]
     }), () => console.log(this.state.team))
   }
  }


  // these lifecycle methods come from the Component we import from react
  // ONLY CLASS components have access to lifecycle methods
  // because App is the component that contains our state
  // so make a fetch request in the App component
  // React mounts BACKWARDS - from the children components to the parent component

  componentDidMount(){
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pokemons: json  // at this moment 
        })
      })
  }

  render(){
  return (
    <div className="App">
    <Router>
      <NavBar  />
      <PokemonsContainer team={this.state.team} addPokemon={this.addPokemon} pokemons={this.state.pokemons} /> 
      <TeamContainer team={this.state.team} runAway={this.runAway} />
    </Router>  
    </div>
  );
  }
}

export default App;


