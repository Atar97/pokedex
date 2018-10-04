import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './actions/pokemon_actions';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  window.fetchAllPokemon = fetchAllPokemon;
  window.selectAllPokemon = selectAllPokemon;
  
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
    ReactDOM.render(
      <h1>Pokedex!!!!!</h1>,
        rootEl
    );
});
