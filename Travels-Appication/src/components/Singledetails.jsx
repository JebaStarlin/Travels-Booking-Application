import veh1 from '../assets/tempotravellerrental.jpg';

function Singledetails(props) {
    const vehicle = props.vehicle

    const apiCall = async()=>{
      try {
        const data = {
          "vehicleId" :`${props.vehicle.vehicleId}`,
          "username" : `${props.username}`,
          "from" : `${props.from}`,
          "to" : `${props.to}`,
          "date" : `${props.date}`,
          "days" : `${props.days}`
        }
        const response = await fetch("http://localhost:8081/mail/booking",{
          method : "POST",
          headers : {
              'Content-Type' : 'application/json',
              "Authorization" : `Bearer ${props.token}`
          },
          body : JSON.stringify(data)
        })
        if(response.ok){
          alert("mail sent")
        }
        else{
          console.log("errr")
        }
      } catch (error) {
        console.error(error)
      }
    }

  return (
    <div>
     
      
       
      <div className="bg-gray-400 p-4 rounded-lg mb-4">
        {/* <hr className="border-black"/>
        <div className="flex flex-wrap justify-between px-4 md:px-20 mt-5">
          <p>Depart:</p>
          <p>Arrival:</p>
          <p>Bus Type:</p>
          <p>Boarding Point:</p>
          <p>Dropping Point:</p>
        </div>
        <div className="flex flex-wrap justify-between px-4 md:ml-20 md:px-4 mt-3">
          <p><input className="h-8 w-20 bg-black text-white rounded-sm" type="text"/></p>
          <p><input className="h-8 w-20 bg-black text-white rounded-sm" type="text"/></p>
          <p><input className="h-8 w-20 bg-black text-white rounded-sm" type="text"/></p>
          <p><input className="h-8 w-20 bg-black text-white rounded-sm" type="text"/></p>
          <p><input className="h-8 w-20 bg-black text-white rounded-sm" type="text"/></p>
        </div> */}
        <hr className="border-black mt-3"/>
        <div className="flex flex-wrap justify-between px-4 md:px-20 mt-3">
          <p>Vehicle Name</p>
          <p>Service</p>
          <p>Bus Type</p>
          <p>Departure:</p>
          <p>Arrival:</p>
          <p>No. of Seats:</p>
        </div>
        <div className='flex flex-wrap justify-between mx-4 md:mx-20 mt-3'>
          <div className="bg-white">
            {vehicle.vehicleName}
            {/* <img className='w-24 h-36 object-cover' src={veh1} alt=""/> */}
          </div>
          <div>
            <input className="h-36 w-24 bg-black text-white rounded-lg" type="text"/>
          </div>
          <div>
            {/* <input className="h-36 w-24 bg-black text-white rounded-lg" type="text"/> */}
            {vehicle.vehicleType}
          </div>
          <div>
            {/* <input className="h-36 w-24 bg-black text-white rounded-lg" type="text"/> */}
            {props.from}
          </div>
          <div>
            {/* <input className="h-36 w-24 bg-black text-white rounded-lg" type="text"/> */}
            {props.to}
          </div>
          <div>
            {/* <input className="h-36 w-24 bg-black text-white rounded-lg" type="text"/> */}
            {vehicle.seats}
          </div>
        </div>
        <div className='flex justify-center items-center space-x-5 pt-10'>
          <p>PRICE :</p>
          <div className='bg-black rounded-lg h-24 w-32 flex items-center justify-center'>
            <p className='text-white'>{props.vehicle.price}</p>
          </div>
        </div>
        <div className='flex justify-center items-center pt-10'>
          <div className='bg-black rounded-lg h-10 w-32 flex items-center justify-center' onClick={apiCall}>
            <p className='text-white'>Book Now</p>
          </div>
        </div>
        <hr className="border-black mt-3"/>
      </div>
    </div>
  );
}

export default Singledetails;
