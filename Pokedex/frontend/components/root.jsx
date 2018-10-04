import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';

import PokemonIndexContainer from './pokemon/pokemon_index_container'
import PokemonIndex from './pokemon/pokemon_index';


const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;
