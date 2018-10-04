import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className='index-container'>
        <h1>All Pokemon</h1>
          <ul className='poke-index'>
            {this.props.pokemon.map(poke => (
              <li key={poke.id}>
                <h3>{poke.id}: {poke.name}</h3>
                <img src={poke.image_url} />
            </li>)
            )
          }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
