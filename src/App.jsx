import { useContext } from "react"
import Aside from "./components/Aside"
import ModalPokemon from "./components/ModalPokemon"
import Pokemons from "./components/Pokemons"
import { PokemonContext } from "./context/PokemonContext"

function App() {

 const {showDetailPokemon, hidePokemonById, pokemonDetail, isLoading} =  useContext(PokemonContext)
 

  return (
    <section className="bg-[#F6F8FC] h-screen font-outfit overflow-y-auto">
     <main className=" max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]  ">
      <Pokemons />
      <Aside pokemon={pokemonDetail} isLoading={isLoading}/>
      <ModalPokemon showModal={showDetailPokemon} onCloseModal={hidePokemonById} pokemon={pokemonDetail}/>
     </main>
    </section>
  )
}

export default App
