import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const poke = this.props.pokemon;
    if (poke && poke.attack) {
      return (
        <div>
          <img src={poke.image_url} />
          <h3>{poke.id}: {poke.name}</h3>
          <ul>
            <li>{poke.type}</li>
            <li>{poke.attack}</li>
            <li>{poke.defense}</li>
            <li>{poke.moves.map(move => <p>{move}    </p> )}</li>
            <li>{poke.item_ids.map(item_id => <p>{item_id}   </p>)}</li>
          </ul>
        </div>
      );
    }
    return (
      <h1>Loading</h1>
    );
  }

  componentDidMount() {
    this.props.fetchOnePokemon(this.props.match.params.pokemon_id);
  }

}

export default PokemonDetail;
