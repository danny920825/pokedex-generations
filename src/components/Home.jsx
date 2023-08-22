import React from 'react'

function Home () {
  return (
    <div className='py-8 w-3/4 mx-auto'>
      <div className='mb-6 flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-4 text-center'>¡Bienvenido a Pokedex Generation!</h1>
        <p className='text-lg mb-6 text-left'>
          Explora las diferentes generaciones de Pokémon y descubre información interesante sobre cada uno.
        </p>
      </div>
      <div className='mb-6 flex flex-col items-center'>
        <h2 className='text-2xl font-semibold mb-2'>Instrucciones de Uso</h2>
        <p className='text-lg'>
          Para empezar, selecciona una generación de Pokémon en el menú de navegación. Luego, podrás explorar la lista
          de Pokémon de esa generación y buscar por nombre para encontrar tus favoritos.
        </p>
      </div>
      <div className='mb-6 flex flex-col items-center'>
        <h2 className='text-2xl font-semibold mb-2'>Destacamos</h2>
        <p className='text-lg'>
          - Explora la lista completa de Pokémon de cada generación.
          <br />
          - Utiliza la función de búsqueda para encontrar rápidamente un Pokémon específico.
          <br />
          - Descubre los diferentes tipos de Pokémon y sus características.
        </p>
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-semibold mb-2'>Próximas Características</h2>
        <ul className='list-disc text-left text-lg pl-6'>
          <li>Detalles individuales de cada Pokémon, incluyendo habilidades, evoluciones y más.</li>
          <li>Información sobre ataques y movimientos de los Pokémon.</li>
          <li>Posibilidad de crear equipos Pokémon y guardarlos.</li>
          <li>Comparación de estadísticas entre diferentes Pokémon.</li>
          <li>Integración con redes sociales para compartir tus hallazgos.</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
