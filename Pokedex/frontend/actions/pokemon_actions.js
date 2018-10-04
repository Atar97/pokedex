import * as ApiUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchAllPokemon = () => (dispatch, state) => {

  return ApiUtil.fetchAllPokemon()
    .then(pokemons => dispatch(receiveAllPokemon(pokemons)));
};