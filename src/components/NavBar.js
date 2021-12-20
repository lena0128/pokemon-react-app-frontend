import React from 'react';

const NavBar = (props) => {
    return(
        <div id="nav-bar">
            <h1 id="pokemons" onClick={props.changePage}>Pokemons</h1>
            <h1 id="teams" onClick={props.changePage}>View Team</h1>
        </div>
    )
}

export default NavBar