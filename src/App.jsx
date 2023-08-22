import React, { useEffect, useState } from 'react'
import GenerationList from './components/GenerationList'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App () {
  const [generations, setGenerations] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/generation/')
      .then(res => res.json())
      .then(({ results }) => setGenerations(results))
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <nav className='mt-4'>
        <ul className='flex gap-2 justify-center'>
          <li>
            <NavLink
              to='/'
              className='inline-block mx-1 px-2 py-1 text-sm border-2 border-teal-600'
            >
              Home
            </NavLink>
          </li>
          {
        generations.map((generation, i) => (
          <li key={i}>
            <NavLink
              to={`/generation/${i + 1}`}
              className='inline-block mx-1 px-2 py-1 text-sm border-2 border-teal-600'
            >
              {(generation.name).split('-')[1]}
            </NavLink>
          </li>
        ))
      }
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        {generations.map((generation, i) => (
          <Route key={i} path={`/generation/${i + 1}`} element={<GenerationList gen={generation} />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
