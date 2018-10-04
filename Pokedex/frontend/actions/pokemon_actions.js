import * as ApiUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveOnePokemon = (payload) => ({
  type: RECEIVE_ONE_POKEMON,
  payload
});

export const fetchAllPokemon = () => (dispatch, state) => {

  return ApiUtil.fetchAllPokemon()
    .then(pokemons => dispatch(receiveAllPokemon(pokemons)));
};

export const fetchOnePokemon = (id) => (dispatch, state) => {
  const poke = state().entities.pokemon[id];
  if (poke && poke.moves) {
    return state();
  } else {
    return ApiUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receiveOnePokemon(pokemon)));
  }
};
