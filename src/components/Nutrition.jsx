import React from 'react'

const Nutrition = () => {
  return (
    <>
        <div className='flex flex-col gap-y-4'>
          <h2 className='text-2xl text-[#8d4224] font-semibold'>Nutrition</h2>
          <div className='mb-10'>
          <p className='mb-4 text-sm'>The table below shows nutritional values per serving without the additional fillings</p>
          <table className='w-full text-left'>
            <tr className='border-b-2'>
              <td>Calories</td>
              <td className='font-semibold text-[#8d4224] p-2'>277kcal</td>
            </tr>
            <tr className='border-b-2'>
              <td>Carbs</td>
              <td className='font-semibold text-[#8d4224] p-2'>0g</td>
            </tr>
            <tr className='border-b-2'>
              <td>Protein</td>
              <td className='font-semibold text-[#8d4224] p-2'>20g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td className='font-semibold text-[#8d4224] p-2'>22g</td>
            </tr>
          </table>
          </div>
        </div>
    </>
  )
}

export default Nutrition