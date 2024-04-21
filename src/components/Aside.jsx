import React from 'react'
import PokemonDetail from './PokemonDetail'

const Aside = ({pokemon, isLoading}) => {
  return (
    <section className=' hidden lg:block sticky top-0 h-screen overflow-hidden'>

      <article className={` absolute bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center transition-all duration-700 ${ pokemon && !isLoading ? "left-0" : "left-[50vw]"}`}>
        <PokemonDetail pokemon={pokemon}/>
      </article>
      <article className={`absolute bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl text-center grid place-content-center transition-all duration-700 ${pokemon ? "left-[50vw] " : "left-0"}`}>
        <header className=' w-1/2 absolute left-1/2 -translate-x-1/2 top-0 -translate-y-[60%] scale-90'>
          <img src='../public/pikapika.png' alt='Pokemon Siluet'/>
        </header>
        <span className=' text-lg text-slate-400 px-20'>Select a Pokemon To Display Here</span>
      </article>

    </section>
  )
}

export default Aside