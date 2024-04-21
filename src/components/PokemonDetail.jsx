import { colorByType, statColor } from "../helpers/pokemonColors"
import Evolutions from "./Evolutions"

const PokemonDetail = ({pokemon}) => {
  return (
    <>

        <header className=' absolute top-[0%] left-1/2 -translate-x-1/2 -translate-y-[90%] z-20 scale-[170%] '>
          <img src={pokemon?.image} alt='Imagen de pokemon'/>
        </header>

       <div className=' overflow-auto pt-14 px-5 h-full'>
          
        

          <span className=' text-slate-400'>Nª {pokemon?.id} </span>
          <h1 className=' capitalize text-2xl pb-4'> {pokemon?.name} </h1>

          <ul className=' flex gap-2 justify-center'>
          {pokemon?.types?.map( type => <li key={type.type.name} className={`p-1 rounded-md px-2 text-white ${colorByType[type.type.name]}`}>{type.type.name}</li>)}
        </ul>
        
        <div>
          <h4 className=' font-bold capitalize pb-4'>Pokedex Entry</h4>
          <p className='text-slate-400 pb-4'>{pokemon?.description}</p>
        </div>

        <section className=' grid grid-cols-2 gap-4 pb-4'>
          <div  className=' font-bold capitalize '>Height</div>
          <div  className=' font-bold capitalize '>Weight</div>
          <span className=' bg-slate-100 block rounded-full p-1'>0.7m</span>
          <span className=' bg-slate-100 block rounded-full p-1'>6.9kg</span>
        </section>


        <section>
          <h4 className=' font-bold capitalize pb-4'>Abilities</h4>
          <div className=' grid grid-cols-2 gap-4 '>
            {
              pokemon?.abilities.map((ability) =>(
                <div className='bg-slate-100 block rounded-full p-1' key={ability.ability.name}>
                  <span className='capitalize '> {ability.ability.name} </span>
                </div>
              ))
            
            }
          </div>
        </section>


        <section>
          <h4 className=' capitalize font-bold pb-4'>Stats</h4>
          <ul className='flex justify-center gap-2 pb-6'>
            {
              pokemon?.stats.map((stat) => (
                <li key={stat.name} className={`bg-slate-100 p-1 rounded-full ${ statColor[stat.name] }`}>
                  <div className='  rounded-full w-[24px] aspect-square grid place-content-center '>
                    <span className='capitalize text-white text-[11px]  '> {stat.name} </span>
                  </div>
                  <span className=' font-semibold text-sm text-black'> {stat.base_stat} </span>
                </li>
              ))
            }
          </ul>
        </section>

        <section className=' grid gap-2'>
          <h4 className=' font-bold capitalize'>Evolutions</h4>
          <Evolutions evolutions={pokemon?.evolution ?? [] } />
        </section>

      </div>
    </>
  )
}

export default PokemonDetail