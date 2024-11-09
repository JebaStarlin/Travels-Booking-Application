import  { useState } from 'react';
import backgroundPath from '../assets/bg3.jpg';

function Entry() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className='min-h-screen bg-no-repeat bg-center bg-cover font-semibold flex flex-col items-center p-4 md:p-8' style={{ backgroundImage: `url(${backgroundPath})` }}>
      <div className='text-3xl md:text-5xl p-8 md:p-24 text-center'>
        <p>Plan, Book, Travel, Journey beyond Borders</p>
        <p className='mt-4 text-lg md:text-2xl'>10% off on your first booking!!!</p>
      </div>
      <div className='w-full max-w-4xl bg-white rounded-3xl flex flex-col md:flex-row box-content p-4 md:p-0'>
        <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 border-b-2 md:border-b-0 md:border-r-2'>
          <input
            className='border-b-2 md:border-0 md:border-b-2 h-8 w-full'
            type="text"
            placeholder='From'
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 border-b-2 md:border-b-0 md:border-r-2'>
          <input
            className='border-b-2 md:border-0 md:border-b-2 h-8 w-full'
            type="text"
            placeholder='To'
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

         {/* <div className='h-24 w-9/12 bg-white rounded-3xl flex box-content'>
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
          </div> */}

        <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 border-b-2 md:border-b-0 md:border-r-2'>
          <input
            className='w-full h-8'
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

        </div>
        <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 bg-black hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 text-white rounded-b-3xl md:rounded-b-none md:rounded-r-3xl cursor-pointer'>
          <p className='text-lg md:text-xl' onClick={() => console.log({ from, to, date })}>Book</p>
        </div>
      </div>
      <div className='text-3xl md:text-5xl p-8 md:p-24 text-center'>
        <p>Travel Made Simple</p>
      </div>
    </div>
  );
}

export default Entry;
