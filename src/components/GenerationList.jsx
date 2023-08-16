import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'
import { FaSistrix } from 'react-icons/fa6'
function GenerationList () {
  const [pokemons, setPokemons] = useState([])
  const [show, setShow] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    if (pokemons.length === 0) {
      fetch('https://pokeapi.co/api/v2/generation/1')
        .then(res => res.json())
        .then(res => {
          const generation = res.pokemon_species
          generation.forEach(element => {
            const modifiedUrl = element.url.replace('pokemon-species', 'pokemon') // Cambiar la parte de la URL
            fetch(modifiedUrl)
              .then(response => response.json())
              .then(data => {
                setPokemons(oldPokemons => [...oldPokemons, data])
                setShow(oldPokemons => [...oldPokemons, data])
              })
              .catch(e => console.log(e))
          })
        })
    }
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    if (value === '') return setShow(pokemons)
    const newPokemons = show.filter(pokemon => (pokemon.name).startsWith(value))
    return setShow(newPokemons)
  }

  return (
    <div className='w-full flex flex-col gap-4 items-center'>
      <div className='border-2 w-96 h-10 rounded-md flex items-center gap-2 pl-3'>
        <FaSistrix className='text-gray-400' />
        <input value={search} onChange={handleSearch} className='w-full h-full outline-none' type='text' placeholder='pikachu' />
      </div>
      <ul className='flex gap-5 flex-wrap justify-center '>

        {show.map((pok, i) => (
          <PokemonCard key={i} pokemon={pok} />
        ))}
      </ul>

    </div>
  )
}

export default GenerationList
