function PokemonListing({ name }) {
  return (
    <div className="pokemon-listing">
      {formatPokemonName(name)}
    </div>
  );
}

function formatPokemonName(name){
  const nameArray = name.split("")
  nameArray[0] = nameArray[0].toUpperCase()
  return nameArray.join("")
}

export default PokemonListing;
