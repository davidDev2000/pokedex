import React from 'react'
import { IconX } from '@tabler/icons-react'
import { colorByType } from '../helpers/pokemonColors'
import PokemonDetail from './PokemonDetail'



const ModalPokemon = ({ showModal, onCloseModal, pokemon }) => {
  
  return (
    <section className= {`fixed lg:hidden top-0 left-0 right-0 bg-green-500 h-screen transition-all duration-500 ${showModal ? " visible opacity-100" : " invisible opacity-0"} ${colorByType[pokemon?.types[0]]} `}>
      

           
      <button onClick={onCloseModal} className='bg-white absolute top-4 right-4 p-1 rounded-lg hover:opacity-80 transition-opacity'>
        <IconX size={32} stroke={4}/>
      </button>

        <header className=' absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-[90%] z-20 scale-[180%] '>
          <img src={pokemon?.image} alt='Imagen de pokemon'/>
        </header>

        <article className={` bg-white h-[80%] absolute w-full bottom-0 rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-500  grid gap-2 content-start 
        ${showModal ? " bottom-0" : " -bottom-full"}`}>
          <PokemonDetail pokemon={pokemon}/>
        </article>
    </section>
  )
}

export default ModalPokemon