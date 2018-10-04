json.set! pokemon.id do
  json.extract! pokemon, :id, :attack, :defense,
  :name, :poke_type, :moves, :item_ids
  json.image_url asset_path(pokemon.image_url)
end
