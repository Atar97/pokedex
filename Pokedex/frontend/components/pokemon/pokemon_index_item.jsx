import React from 'react';

const PokemonIndexItem = ( {poke} ) => (
  <li key={poke.id}>
    <h3>{poke.id}: {poke.name}</h3>
    <img src={poke.image_url} />
  </li>
);

export default PokemonIndexItem;
