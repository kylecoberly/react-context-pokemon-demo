import "./PokemonList.css";
import PokemonListing from "./PokemonListing"
import { PokemonContext } from "./pokemon-context"
import { useContext } from "react"

function PokemonList() {
  const { pokemonList } = useContext(PokemonContext)

  return (
    <ul className="PokemonList">
      {pokemonList.map(pokemon => (
        <li key={pokemon.name}>
          <PokemonListing pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
