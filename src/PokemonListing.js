import "./PokemonListing.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function PokemonListing({ pokemon }) {
  const { name, sprites, abilities } = pokemon

  return (
    <div className="PokemonListing">
      <img src={sprites.front_default} alt={name} />
      <section>
        <h2>
          <FontAwesomeIcon icon="tractor" />
          {titleCase(name)}
        </h2>
        <ul>
          {abilities.map(({ ability }) => (
            <li key={ability.url}>{titleCase(ability.name)}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function titleCase(name){
  const nameArray = name.split("")
  nameArray[0] = nameArray[0].toUpperCase()
  return nameArray.join("")
}

export default PokemonListing;
