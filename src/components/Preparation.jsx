import React from 'react'

const Preparation = () => {
  return (
    <>
        <div className='bg-purple-50 h-auto rounded-2xl'>
          <h3 className='text-xl text-fuchsia-600 m-4 ms-4'>Preparation Time</h3>
          <div className='text-sm m-4 ms-12'>
            <ul className='list-disc marker:text-fuchsia-600 leading-7'>
              <li><span className='font-bold'>Total:</span> Approximately 10 minutes</li>
              <li><span className='font-bold'>Preparation:</span> 5 minutes</li>
              <li><span className='font-bold'>Cooking:</span> 5 minutes</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Preparation