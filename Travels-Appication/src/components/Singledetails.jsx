

function Singledetails() {
  return (
    <div className="h-[33vh] bg-gray-400">
        <div>
        <hr className="border-black"/>
        <div className="flex flex-row px-20 justify-between">
            <p>Depart:</p>
            <p>Arrival:</p>
            <p>Bus Type:</p>
            <p>Boarding point:</p>
            <p>Dropping point:</p>
        </div>
        <div className="flex flex-row justify-between ml-20 px-4">    
            <p ><input className="h-[25px] w-[5rem] bg-black text-white rounded-sm" type="text"/> </p>
            <p ><input className="h-[25px] w-[5rem] bg-black text-white rounded-sm" type="text"/> </p>
            <p ><input className="h-[25px] w-[5rem] bg-black text-white rounded-sm" type="text"/> </p>
            <p ><input className="h-[25px] w-[5rem] bg-black text-white rounded-sm" type="text"/> </p>
            <p ><input className="h-[25px] w-[5rem] bg-black text-white rounded-sm" type="text"/> </p>
        </div>
        <hr className="border-black mt-3"/>
        </div>
        <div className="flex flex-row px-20 justify-between ">
            <p>Service</p>
            <p>Bus type</p>
            <p>Departure:</p>
            <p>Arrival:</p>
            <p>No.of.seats:</p>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Singledetails
//border-t-2 border-gray-300 my-4">
