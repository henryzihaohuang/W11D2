import React from 'react';


class PokemonIndexItem extends React.Component {

    constructor(props){
        super(props)

    }


    render() {
        const pokemonItems = pokemon.map(poke => (
            <PokemonIndexItem key={poke.id} pokemon={poke} name={poke.name} img={poke.imageUrl } />
        ));
        return(

            <section className="pokedex">
                <ul>{pokemonItems}</ul>
            
            </section>;
        )
    }
}


export default PokemonIndexItem;

