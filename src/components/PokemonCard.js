import React, { Component } from 'react'

class PokemonCard extends Component {

    caughtPokemon = () => {
        // !! means that if it finds the pokemon it will return true; if not, it will return false
      return !!this.props.team.find((pokemon) => (pokemon.id === this.props.id))
    }

    componentDidUpdate(){
      console.log("I am updated!")
    }

    // this function is expecting a boolean return value
     shouldComponentUpdate(nextProps, nextState){
      // when do we want our component update?
      // Component should update if the pokemon HASN'T been caught and it the next props it has been caught
      // this.props.team <- not in here. newxtProps.team <- IS in here

          // true           &&        // true   => this returns `true`
       return !this.caughtPokemon() && !!nextProps.team.find((pokemon) => (pokemon.id === this.props.id))
      //      false           &&    true    => this will return `false`
      // this.caughtPokemon() && !! nextProps.team.find((pokemon) => (pokemon.id === this.props.id)
     }


    render(){
    return (
        <div 
            id={`pokemon-card-${this.props.id}`}
            className="card"
            style={{
                     backgroundColor: `var(--${this.props.type})`, 
                     backgroundImage: `var(--${this.caughtPokemon() ? "caught" : "unCaught"})`
                    }}
        >
            <h3>{this.props.name}</h3>
            <p>Type: {this.props.type}</p>
            <p>Weight: {this.props.weight}</p>
            <button onClick={(e) => this.props.addPokemon(this.props.id)}>
                {this.caughtPokemon() ? "Remove From Team" : "Add To Team"}
            </button>
            <br />
            <img alt={this.props.name + " image"} src={this.props.frontImage} />
        </div>
    )
}

}

export default PokemonCard