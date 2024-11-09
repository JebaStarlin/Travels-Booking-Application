//<<<<<<< Starlin
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function Navbar(props) {
  const [username, setUserName]=useState(null)
  const navigate = useNavigate()

   useEffect(()=>{
      // console.log("irvd")
      // console.log(props.token)
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
       <p><Link to ="/">HOME</Link></p>
        <p><Link to ="/Display">DISPLAY</Link></p>
        
        <p><Link to ="/Packages">PACKAGES</Link></p>
        <p><Link to ="/Booking">BOOKING</Link></p>
        <p><Link to ="/Contacts">CONTACTS</Link></p>
        </div> 
        
{/* // <<<<<<< Starlin */}
        <div className=''>
            <div>
              {username==null && <div onClick={toLogin}>LOGIN/SIGNUP</div> }
              {username!=null && <div>{username}</div> }
            </div>
        </div>
{/* // ======= */}
       {/* <div className="flex flex row space-x-4 ">
        
            <p><Link to ="/Login">LOGIN</Link></p>
            <p><Link to ="/Signup">SIGNUP</Link></p> */}
{/* // >>>>>>> main */}
        {/* </div> */}
    </nav>
  )
}

export default Navbar
