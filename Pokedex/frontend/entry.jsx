import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import {fetchAllPokemon, fetchOnePokemon, receiveOnePokemon} from './actions/pokemon_actions';
// import {selectAllPokemon} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  // test window functions
  window.fetchAllPokemon = fetchAllPokemon;
  window.fetchOnePokemon = fetchOnePokemon;
  window.receiveOnePokemon = receiveOnePokemon;
  // window.selectAllPokemon = selectAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

    ReactDOM.render(
      <Root store={store} />,
        rootEl
    );
});
