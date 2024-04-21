import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { colorByType } from '../helpers/pokemonColors'

const PokemonPreviw = ({pokemonURL, onClick}) => {

  const [pokemon, setPokemon] = useState(null)


  useEffect(() => {
    axios
    .get(pokemonURL)
    .then(({data}) => setPokemon(data))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <article onClick={() => onClick(pokemon)} className=' text-center bg-white rounded-[30px] relative font-semibold capitalize pb-4 border-2 border-transparent hover:border-slate-400 cursor-pointer group grid gap-2'>
      <header className='h-10'>
        <img src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt='pokemon' className=' absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 group-hover:scale-105 transition-transform '/>
      </header>
      <span className='text-sm text-slate-400'>Nª {pokemon?.id}</span>
      <h4 className='text-lg'>{pokemon?.name}</h4>
      <ul className=' flex gap-2 justify-center'>
        {pokemon?.types.map( type => <li key={type.type.name} className={`p-1 rounded-md px-2 text-white ${colorByType[type.type.name]}`}>{type.type.name}</li>)}
      </ul>
    </article>
  )
}

export default PokemonPreviw

