import React, { Component } from 'react';

class TeamContainer extends Component {

    componentDidMount(){
       setInterval( this.privacy, 1000 )
    }

    privacy = () => {
        console.log("timer")
    }

    mappedTeam = () => (this.props.team.map((pokemon) => ( // this function returns an ARRAY
        <div className='card' key={pokemon.id}>
            <p>Name: {pokemon.name}</p>
            <p>Type: {pokemon.poke_type}</p>
            <img src={pokemon.back_image} />
        </div>)
    ))

    render(){
    return (
        <div id="team-container">
            <h2>Your Pokemon are SHY!</h2>
          { (this.mappedTeam.length === 0) ?  
            <React.Fragment>
                <h1>You have no Pokemon on your team.</h1>
                <img src="https://media.tenor.com/images/7c355668e41f8cf511fe30c8483379d0/tenor.gif" />
            </React.Fragment>
            :
            this.mappedTeam
          }
        </div>
      )
    }

}

export default TeamContainer