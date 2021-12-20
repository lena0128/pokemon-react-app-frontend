import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


function NavBar(){
    return(
        <div id="nav-bar">
            <Link to="pokemons">
              <h1 id="pokemons" >Pokemons</h1>
            </Link>

            <Link to="teams">
              <h1 id="teams" >View Team</h1>
            </Link>
        </div>
    )
}

export default NavBar