import "./PokemonList.css";
import PokemonListing from "./PokemonListing"
import { PokemonContext } from "./pokemon-context"
import { useContext } from "react"

function PokemonList() {
  const { pokemonList } = useContext(PokemonContext)

  return (
    <ul className="PokemonList">
      {pokemonList.map(({ name }) => (
        <li key={name}>
          <PokemonListing name={name} />
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
