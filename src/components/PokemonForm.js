import React, { Component } from 'react';

class PokemonForm extends Component {

    render(){
        return(
            <div>
                <form>
                    <h3>Create your own Pokemon!</h3>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input id="name" />
                    </div>
                    <div>
                        <label htmlFor="type">Type: </label>
                        <input id="type" />
                    </div>
                    <div>
                        <label htmlFor="weight">Weight: </label>
                        <input id="weight" />
                    </div>
                    <div>
                        <label htmlFor="front_image">Front Image: </label>
                        <input id="front_image" />
                    </div>
                    <div>
                        <label htmlFor="back_image">Back Image: </label>
                        <input id="back_image" />
                    </div>
                    <div>
                        <button>Create a Pokemon</button>
                    </div>
                </form>
                <div>
                    <button onClick={() => this.props.goBack()}>Go Back</button>
                </div>  
            </div>
        )
    }

}

export default PokemonForm