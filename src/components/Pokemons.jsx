import { useEffect, useState } from "react";
import axios from "axios";
import { IconSearch } from "@tabler/icons-react";
import PokemonList from "./PokemonList";
const Pokemons = () => {

  
  const [allPokemons, setAllPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const pokemonsByName = allPokemons.filter(pokemon => pokemon.name.includes(pokemonName))
  
  const handleChangePokemonName = (e) => {
    setPokemonName(e.target.value.toLowerCase())
  }
 
  useEffect(() => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=100")
    .then(({data}) => setAllPokemons(data.results))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <section className="p-4 py-5">
      <form>
        <div className=" bg-white p-4 flex rounded-2xl text-lg">
          <input placeholder="search your Pokemon" type="text" className="outline-none flex-1" name="pokemonName" autoComplete="off" onChange={handleChangePokemonName} />
          <button type="button" className=" bg-red-500 p-2 rounded-xl shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch color="white" stroke={3}/>
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName}/>-*
    </section>
  )
}

export default Pokemons