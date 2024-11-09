import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Navbar(props) {
  const [username, setUserName]=useState(null)
  const navigate = useNavigate()

   useEffect(()=>{
      console.log("irvd")
      console.log(props.token)
      if(props.token != null){
        apiCall()
      }
    },[])

    const apiCall = async()=>{
      try {
        const response = await fetch("http://localhost:8081/username",{
          method : "POST",
          headers : {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${props.token}`
          }
        })
        if(response.ok){
          const result = await response.json()
          console.log(result.username)
          setUserName(result.username)
        }
        else{
          console.error("Got username not found from api")
        }
      } catch (error) {
        throw new Error(`Error fetching api : ${error}`)
      }
    }

    const toLogin = ()=>{
      navigate("/login")
    }

  return (
    <nav className='flex flex-row justify-between items-center bg-black text-white h-20 px-10'>
       <div className="flex flex row space-x-4 ">
       <p>HOME</p>
        <p>DISPLAY</p>
        <p>DISPLAY</p>
        <p>PACKAGES</p>
        <p>BOOKING</p>
        <p>CONTACT</p>
        </div> 
        
        <div className=''>
            <p>
              {username==null && <div onClick={toLogin}>Login/SignUp</div> }
              {username!=null && <div>{username}</div> }
            </p>
        </div>
    </nav>
  )
}

export default Navbar
