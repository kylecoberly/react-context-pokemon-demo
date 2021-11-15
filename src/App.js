import "./App.css";
import PokemonList from "./PokemonList"
import { PokemonProvider } from "./pokemon-context"

function App() {

  return (
    <PokemonProvider>
      <div className="App">
        <h1>The World of Pokemon</h1>
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;
