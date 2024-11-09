import React from 'react'
import Path from '../assets/bg3.jpg'

function Entry() {
  return (
    <div className='h-[100vh] bg-no-repeat bg-center bg-cover font-semibold flex flex-col items-center' style={{backgroundImage: `url(${Path})`}}>
        <div className='text-5xl p-24 text-center'>
            <p>Plan, Book, Travel, Journey beyond Borders</p>
            <p>10% off on your first booking!!!</p>
        </div>
        <div className='h-24 w-9/12 bg-white rounded-3xl flex box-content'>
            <div className='w-3/12 h-full  flex justify-center p-8 border-r-2' >
                <input className='border-b-2 h-8 w-full' type="text" name="" id="" placeholder='From' />
            </div>
            <div className='w-3/12 h-full  flex justify-center p-8 border-r-2' >
                <input className='border-b-2 h-8 w-full' type="text" name="" id="" placeholder='To'/>
            </div>
            <div className='w-3/12 h-full  flex justify-center p-8 border-r-2 ' >
                <input className='w-full' type="date" name="" id="" />
            </div>
            <div className='w-3/12 h-full overflow-hidden rounded-r-3xl flex justify-center p-8 bg-black text-white'  >
                <p className='text-xl h-8'>book</p>
            </div>
        </div>
        <div className='text-5xl p-24 text-center'>
            <p>Travel Made Simple</p>
        </div>
    </div>
  )
}

export default Entry