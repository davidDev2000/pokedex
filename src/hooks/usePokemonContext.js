import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"

const usePokemonContext = () => {
    return useContext(PokemonContext)
}

export default usePokemonContext