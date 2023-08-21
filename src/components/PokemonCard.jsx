import React from 'react'
import { ColorType } from '../config/TypeColors'
function PokemonCard ({ pokemon }) {
  const firstType = pokemon.types[0].type.name
  const bgColor = ColorType.find(element => element.type === firstType)
  //   const className = `w-40 flex flex-col gap-3 px-4 py-4 h-auto shadow-md bg-[${bgColor.color}]`
  return (
    <li style={{ backgroundColor: bgColor.color }} className='min-w-min w-40 flex flex-col gap-3 px-4 py-4 h-auto shadow-md'>
      <strong>{pokemon.id}</strong>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <span className='w-full text-center font-bold text-xl'>{(pokemon.name).toUpperCase()}</span>
      <hr />
      <div className='flex gap-2 justify-center'>
        {
            pokemon.types.map(tipo => (
              <span key={tipo.type.name}>{tipo.type.name}&nbsp;</span>
            ))
          }
      </div>
    </li>
  )
}

export default PokemonCard
