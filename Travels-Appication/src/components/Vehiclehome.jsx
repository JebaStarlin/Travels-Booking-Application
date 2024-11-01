import veh1 from '../assets/Vehicle18seater.jpg'

function hello(){
    console.log("kjbefa")
}
function Vehiclehome() {
  return (
    <div className="px-36 bg-gray-400 flex flex row justify-between">
        <div className="w-[300px] h-[500px] flex flex-col justify-center item-center ">
        <div className="w-[300px] h-[400px] bg-black rounded-2xl">
            <img onClick={hello} className=' w-[300px] h-[400px] object-left object-cover  rounded-2xl' src={veh1} alt=""/>
        </div>
        <div className='h-15 w-32 bg-black rounded-lg mx-20 my-5'>
            <p className=' text-white px-5 py-2 '>View Details</p>
        </div>
        </div>

        <div className="w-[300px] h-[500px] flex flex-col justify-center item-center ">
        <div className="w-[300px] h-[400px] bg-black rounded-2xl">
            <img onClick={hello} className=' w-[300px] h-[400px] object-left object-cover  rounded-2xl' src={veh1} alt=""/>
        </div>
        <div className='h-15 w-32 bg-black rounded-lg mx-20 my-5'>
            <p className=' text-white px-5 py-2 '>View Details</p>
        </div>
        </div>

        <div className="w-[300px] h-[500px] flex flex-col justify-center item-center ">
        <div className="w-[300px] h-[400px] bg-black rounded-2xl">
            <img onClick={hello} className=' w-[300px] h-[400px] object-left object-cover  rounded-2xl' src={veh1} alt=""/>
        </div>
        <div className='h-15 w-32 bg-black rounded-lg mx-20 my-5'>
            <p className=' text-white px-5 py-2 '>View Details</p>
        </div>
        </div>
        
      
    </div>
  )
}

export default Vehiclehome
