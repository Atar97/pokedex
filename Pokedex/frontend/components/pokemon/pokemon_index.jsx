import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import {Route} from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }


  render() {
    const pokemonItems = this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke}/> );
    return (
      <div className='index-container'>
        <Route path="/:pokemon_id" component={PokemonDetailContainer} />
        <h1>All Pokemon</h1>
          <ul className='poke-index'>
            {pokemonItems}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
