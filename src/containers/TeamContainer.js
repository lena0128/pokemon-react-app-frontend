import React, { Component } from 'react';
import TeamPokemon from '../components/TeamPokemon'

class TeamContainer extends Component {

  state = {
    timeLeft: 6
  }

   componentDidMount(){
     if(this.props.team.length > 0) {
       this.timerId = setInterval( this.privacy, 1000 )
     } else {
       console.log("There are no pokemon here, stay as long as you want")
     }
      
   }

    privacy = () => {
        if(this.state.timeLeft > 0) {
        this.setState((prevState) => ({
          timeLeft: prevState.timeLeft - 1
        })
        )
      } else {
        alert("HEY YOU VIOLATED THEIR PRIVACY! ThEY ALL RUN AWAY")
        // make team equal to an empty array
        this.props.runAway()
        clearInterval(this.timerId) 
      }
    }

    componentWillUnmount(){
      clearInterval(this.timerId) 
    }

    mappedTeam = () => (this.props.team.map((pokemon, index) => ( 
        <TeamPokemon pokemon={pokemon} key={index} />)
    ))    
  

    noTeamMember = () => (
      <>
          <h1>You have no Pokemon on your team.</h1>
          <img src="https://media.tenor.com/images/7c355668e41f8cf511fe30c8483379d0/tenor.gif" alt="pokemon gif" />
      </>)
    

    render(){
    return (
        <div id="team-container">
            <h2>Your Pokemon are SHY!</h2>
            <h3>You have {this.state.timeLeft} seconds left before your pokemon run!</h3>
          { (this.mappedTeam().length === 0) ? this.noTeamMember() : this.mappedTeam() }
        </div>
      )
    }

}

export default TeamContainer