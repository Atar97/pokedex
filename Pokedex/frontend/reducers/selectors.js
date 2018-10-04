export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};


export const selectPokeItems = (state, id) => {
  // debugger;
  const poke = state.entities.pokemon[id];
  if (poke && poke.item_ids) {
      return poke.item_ids.map(itemId => {
        return state.entities.items[itemId];
      });
  }
};

export const selectAllItems = (state) => (
  Object.values(state.entities.items)
);
