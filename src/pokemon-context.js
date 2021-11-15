import { createContext } from "react"
import { useState, useEffect } from "react"

export const PokemonContext = createContext()

export const PokemonProvider = ({ children }) => {
  const [ pokemonList, setPokemonList ] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then(response => response.json())
      .then(pokemonList => {
        setPokemonList(pokemonList.results)
      })
  }, [])

  return (
    <PokemonContext.Provider value={{pokemonList}}>
      {children}
    </PokemonContext.Provider>
  )
}
