json.pokemon do
  json.partial! 'pokemon', pokemon: @pokemon
end
json.items do
  json.partial! 'item', pokemon: @pokemon
end
