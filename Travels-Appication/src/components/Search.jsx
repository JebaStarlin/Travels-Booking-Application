
import { useState } from 'react';

function Search(props) {

  const check = ()=>{
    console.log(props)
  }

  return (
    <div className='h-[40vh] bg-black my-3 flex justify-center items-center'>
      <div className='w-full max-w-4xl bg-white rounded-3xl flex flex-col md:flex-row box-content p-4'>
        <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 border-b-2 md:border-b-0 md:border-r-2'>
          <input
            className='border-b-2 md:border-0 md:border-b-2 h-8 w-full'
            type="text"
            placeholder='From'
            value={props.from}
            onChange={(e) => props.handleFrom(e.target.value)}
          />
        </div>
        <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 border-b-2 md:border-b-0 md:border-r-2'>
          <input
            className='border-b-2 md:border-0 md:border-b-2 h-8 w-full'
            type="text"
            placeholder='To'
            value={props.to}
            onChange={(e) => props.handleTo(e.target.value)}
          />
        </div>
        <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 border-b-2 md:border-b-0 md:border-r-2'>
          <input
            className='w-full h-8'
            type="date"
            value={props.date}
            onChange={(e) => props.handleDate(formatDate(e.target.value))}
          />
        </div>
        <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 bg-black text-white rounded-b-3xl md:rounded-b-none md:rounded-r-3xl cursor-pointer'>
          <p className='text-lg md:text-xl' onClick={console.log("cbdicjs")}>Book</p>
        </div>
      </div>
      {/* <div className='text-white' onClick={check}>cvsdvcbseibvpw9uvbwprivbw</div> */}
    </div>
  );
}

export default Search;

/*

<div className='flex justify-center'>
   <div className='w-full max-w-4xl bg-white rounded-3xl flex flex-col md:flex-row  ml-10'>
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
   <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 border-b-2 md:border-b-0 md:border-r-2'>
     <input
       className='w-full h-8'
       type="date"
       value={date}
       onChange={(e) => setDate(e.target.value)}
     />
   </div>
   <div className='w-full md:w-1/4 flex justify-center items-center p-2 md:p-8 bg-black text-white rounded-b-3xl md:rounded-b-none md:rounded-r-3xl cursor-pointer'>
     <p className='text-lg md:text-xl' onClick={() => console.log({ from, to, date })}>Book</p>
   </div>
 </div></div>

*/ 