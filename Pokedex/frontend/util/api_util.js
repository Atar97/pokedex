export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: 'GET',
    dataType: 'JSON'
  });
};

export const fetchPokemon = (id) => {
  return $.ajax({
    url: `/api/pokemon/${id}`,
    method: 'GET'
  });
};
