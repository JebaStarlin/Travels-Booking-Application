import React from 'react'
import Path from '../assets/bg3.jpg'

function Package() {
  return (
    <div className='w-[300px] h-[400px] py-8 px-4 text-black text-5xl font-bold rounded-2xl' style={{backgroundImage:`url(${Path})`}}>
        <p className='pb-3'>Coorg</p>
        <p>Package</p>
    </div>
  )
}

export default Package