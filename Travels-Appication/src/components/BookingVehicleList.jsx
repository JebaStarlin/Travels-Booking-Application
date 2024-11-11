import React, { useEffect, useState } from 'react'
import Singledetails from './Singledetails'

function BookingVehicleList(props) {

    const [vehicles,setVehicles] = useState([])

    useEffect(()=>{
        if(props.token != null){
            apiCall()
          }
    },[props.days])

    const apiCall=async()=>{
        try {
            const response = await fetch(`http://localhost:8081/details/prices?days=${props.days}`,{
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
        {vehicles?.map(v => <Singledetails key={v.vehicleId} token={props.token} vehicle={v} from={props.from} to={props.to} date={props.date} username={props.username}/>)}
    </div>
  )
}

export default BookingVehicleList