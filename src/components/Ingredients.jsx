import React from 'react'

const Ingredients = () => {
  return (
    <>
        <div className='flex flex-col gap-y-4'>
          <h2 className='text-2xl text-[#8d4224] font-semibold'>Ingredients</h2>
          <div className='text-sm ms-5'>
            <ul className='list-disc marker:text-[#8d4224] leading-8'>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Ingredients