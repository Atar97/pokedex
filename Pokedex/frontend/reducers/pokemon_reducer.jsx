import {RECEIVE_ALL_POKEMON} from '../actions/pokemon_actions';
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};
