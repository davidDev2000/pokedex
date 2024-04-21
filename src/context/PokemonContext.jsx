import { createContext, useState } from "react";
import { formatStats, formatTypes, formatAbility, pokemonDescription, getEvolution, getImageByPokemon } from "../helpers/pokemon";
import axios from "axios";

const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {

  const [showDetailPokemon, setShowDetailPokemon] = useState(false)
  const [pokemonDetail, setPokemonDetail] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  const showPokemonById = async(pokemonInfo) => {
    setIsLoading(true)
    const {data: dataSpecies} = await axios.get(pokemonInfo.species.url)
    const {data: dataEvolution} = await axios.get(dataSpecies.evolution_chain.url)

    const {id, name, height, weight, stats, types, abilities} = pokemonInfo
    // console.log(pokemonInfo)
    const evolution = await getEvolution(dataEvolution)
    
    setPokemonDetail({
      id,
      name,
      height,
      weight,
      evolution,
      stats: formatStats(stats),
      types: formatTypes(types),
      abilities: formatAbility(abilities),
      description: pokemonDescription(dataSpecies),
      image: getImageByPokemon(pokemonInfo.sprites)
    })
    setShowDetailPokemon(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 400);
  }
  const hidePokemonById = () => {
    setShowDetailPokemon(false)
    
  
  }

  return <PokemonContext.Provider value={{showDetailPokemon,showPokemonById,hidePokemonById, pokemonDetail, isLoading}}>{children}</PokemonContext.Provider>
}

export { PokemonContext, PokemonProvider }