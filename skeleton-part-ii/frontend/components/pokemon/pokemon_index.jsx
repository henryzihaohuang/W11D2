import React from 'react';
import PokemonIndexItem from './pokemon_index_item'


class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    return (
    <section className="pokedex">
      <ul>
      {this.props.pokemon.map((poke) => (
        <li className="pokemon-index-item">
          <PokemonIndexItem key={poke.id} pokemon={poke} name={poke.name} img={poke.imageUrl} />
          <span>{poke.id}</span>
          <img src={poke.imageUrl}/>
          <span>{poke.name}</span>
        </li>
      ))}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;