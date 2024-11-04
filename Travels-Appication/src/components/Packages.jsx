import React from 'react'
import Package from './Package'

function Packages() {
  return (
    <div className=' bg-black text-white px-40 py-10 '>
        <p className='text-4xl font-semibold'>Packages</p>
        <div className='flex gap-16 justify-around px-20 py-16'>
            <Package/>
            <Package/>
            <Package/>
        </div>
    </div>
  )
}

export default Packages