import { render, screen } from "@testing-library/react"
import PokemonList from "./PokemonList"
import { PokemonContext } from "./pokemon-context"

test("PokemonList", () => {
  const pokemonList = [{
    name: "Bulbasaur",
  }]

  render(
    <PokemonContext.Provider value={{ pokemonList }}>
      <PokemonList pokemonList={pokemonList} />
    </PokemonContext.Provider>
  )

  const bulbasaur = screen.getByRole("listitem")

  expect(bulbasaur).toHaveTextContent("Bulbasaur")
})
