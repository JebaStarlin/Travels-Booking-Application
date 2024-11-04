
import React from 'react'

import Path from '../assets/bg3.jpg'

function City() {
  return (
    <div className=' border-2 flex flex-col items-center'>
        <img className='h-52 w-52 rounded-[50%]' src={Path} alt="" />
        <p className='mt-3 text-xl'>Goa</p>
    </div>
  )
}

export default City