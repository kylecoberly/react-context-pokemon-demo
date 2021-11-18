import { createContext } from "react"
import { useState, useEffect } from "react"

export const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const [ pokemonList, setPokemonList ] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then(response => response.json())
      .then(pokemonList => {
        const urls = pokemonList.results.map(pokemon => pokemon.url)
        const pendingPokemon = urls.map(url => fetch(url).then(response => response.json()))
        Promise.all(pendingPokemon)
          .then(pokemon => {
            console.log(pokemon)
            setPokemonList(pokemon)
          })
      })
  }, [])

  return (
    <PokemonContext.Provider value={{pokemonList}}>
      {children}
    </PokemonContext.Provider>
  )
}
