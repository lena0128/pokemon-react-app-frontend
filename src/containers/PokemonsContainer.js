import React, { Component } from 'react';
import PokemonCard from '../components/PokemonCard';
import FilterBar from '../components/FilterBar';
import PokemonForm from '../components/PokemonForm';
import TeamPokemon from '../components/TeamPokemon';
import {
    Switch,
    Route,
} from 'react-router-dom';


class PokemonsContainer extends Component {

    render(){
        // this returns an ARRAY of pokemon cards.
        const pokemons = this.props.pokemons.map((pokemon) => 
        <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.poke_type}
            weight={pokemon.weight}
            frontImage={pokemon.front_image}
            backImage={pokemon.back_image}
            addPokemon={this.props.addPokemon}
            team={this.props.team} 
        />)


        return(
            <div id="poke-container">
                <Switch>
                    <Route exact path="/pokemons/new" component={(routeInfo) => {
                        console.log(routeInfo)
                    
                        return <PokemonForm goBack={() => routeInfo.history.push("/pokemons")} />
                    
                    }} />



                    <Route exact path="/pokemons">
                `       <FilterBar />
                        {pokemons}
                    </Route>
                    <Route path="/pokemons/:id" component={(routeInfo) => {
                    console.log(routeInfo)
                    const paramsId = parseInt(routeInfo.match.params.id)
                    const foundPokemon = this.props.pokemons.find(p => p.id === paramsId)
                    return <TeamPokemon pokemon={foundPokemon}/>
                    
                    } } />

                </Switch>

            </div>
        )
    }

}

export default PokemonsContainer