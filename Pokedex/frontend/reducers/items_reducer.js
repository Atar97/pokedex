import {
  RECEIVE_ALL_POKEMON ,
  RECEIVE_ONE_POKEMON
} from '../actions/pokemon_actions';
import {merge} from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return merge({}, state, action.payload.items);
    default:
      return state;
  }
};
