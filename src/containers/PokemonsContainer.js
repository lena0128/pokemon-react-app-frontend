import React, { Component } from 'react';
import PokemonCard from '../components/PokemonCard';
import FilterBar from '../components/FilterBar';
// import PokemonForm from '../components/PokemonForm';

class PokemonsContainer extends Component {

    render(){
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
            <div id="pokemon-container">
                <FilterBar />
                {pokemons}
            </div>
        )
    }

}

export default PokemonsContainer