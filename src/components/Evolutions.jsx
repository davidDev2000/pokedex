import React from 'react'



const Evolutions = ({evolutions, index}) => {



  return (
    <div className=' flex justify-center items-center gap-2 flex-wrap'>
    {evolutions.map((evolution, index) => (
      <article key={evolution.name} className='flex gap-2 items-center'>
        {index !== 0 && (
          <div className='bg-slate-100 p-2 w-1/2 rounded-full text-sm font-bold'>
            <span> Lv. {evolution.min_level} </span>
          </div>
        )}
         
          <div>
            <img src={evolution.image} alt='' />
          </div>
        
      </article>
    ))}
  </div>
  )
}

export default Evolutions