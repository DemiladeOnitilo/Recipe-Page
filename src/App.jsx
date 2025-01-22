import React from 'react'
import omelette from './assets/images/image-omelette.jpeg'
import Nutrition from './components/Nutrition'
import Instruction from './components/Instruction'
import Ingredients from './components/Ingredients'
import Heading from './components/Heading'
import Preparation from './components/Preparation'

const App = () => {
  return (
    <div className='font-serif bg-white my-24 m-auto h-auto w-1/3 rounded-2xl'>
      <div className='flex flex-col gap-y-8 ms-10 me-10'>
        <img className='mt-9 h-60 w-auto rounded-2xl' src={omelette} />
        <Heading />
        <Preparation />
        <Ingredients />
        <hr />
        <Instruction />
        <hr />
        <Nutrition />
      </div>
    </div>
  )
}

export default App