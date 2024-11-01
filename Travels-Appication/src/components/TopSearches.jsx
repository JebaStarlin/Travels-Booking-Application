import React from 'react'
import City from './City'

function TopSearches() {
  return (
    <div className='h-100vh mt-10 flex flex-col items-center'>
        <h1 className='text-3xl font-bold p-2'>Top Searches</h1>
        <p className='text-xl p-2'>Here is ur Top Destinations for your quick reference.</p>
        <div className='p-10 grid grid-cols-4 gap-x-14 gap-y-10'>
            <City/>
            <City/>
            <City/>
            <City/>
            <City/>
            <City/>
            <City/>
            <City/>
        </div>
    </div>
  )
}

export default TopSearches