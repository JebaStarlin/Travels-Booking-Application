import React, { useEffect, useState } from 'react'
import Singledetails from './Singledetails'

function BookingVehicleList(props) {

    const [vehicles,setVehicles] = useState([])

    useEffect(()=>{
        if(props.token != null){
            apiCall()
          }
    },[])

    const apiCall=async()=>{
        try {
            const response = await fetch("http://localhost:8081/details/vehicles",{
                method:"GET",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${props.token}`
                }
            })
            if(response.ok){
                const data =await response.json()
                setVehicles(data.vehicles)
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        {vehicles?.map(v => <Singledetails key={v.vehicleId} vehicle={v} from={props.from} to={props.to} date={props.date}/>)}
    </div>
  )
}

export default BookingVehicleList