import React from 'react'

const Instruction = () => {
  return (
    <>
        <div className='flex flex-col gap-y-4'>
          <h2 className='text-2xl text-[#8d4224] font-semibold'>Instructions</h2>
          <div className='ms-5 text-sm leading-6'>
            <ol className='list-decimal marker:text-[#8d4224]'>
              <li><span className='font-bold'>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
              <li><span className='font-bold'>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
              <li><span className='font-bold'>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
              <li><span className='font-bold'>Add fillings(optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
              <li><span className='font-bold'>Fold and Serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
              <li><span className='font-bold'>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
           </ol>
          </div>
        </div>
    </>
  )
}

export default Instruction