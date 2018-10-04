import {connect} from 'react-redux';
import {selectPokeItems, selectAllItems} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import {fetchOnePokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state, {match}) => {
  // debugger;
  const poke_id = match.params.pokemon_id;
  return {
    pokemon: state.entities.pokemon[poke_id],
    // items: selectPokeItems(state, poke_id)
    items: selectAllItems(state)
  };
};


const mapDispatchToProps = dispatch => ({
  fetchOnePokemon: (id) => dispatch(fetchOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(PokemonDetail);
