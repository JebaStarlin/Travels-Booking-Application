import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center bg-black text-white h-20 px-10'>
       <div className="flex flex row space-x-4 ">
       <p><Link to ="/">HOME</Link></p>
        <p><Link to ="/Display">DISPLAY</Link></p>
        
        <p><Link to ="/Packages">PACKAGES</Link></p>
        <p><Link to ="/Booking">BOOKING</Link></p>
        <p><Link to ="/Contacts">CONTACTS</Link></p>
        </div> 
        
       <div className="flex flex row space-x-4 ">
        
            <p><Link to ="/Login">LOGIN</Link></p>
            <p><Link to ="/Signup">SIGNUP</Link></p>
        </div>
    </nav>
  )
}

export default Navbar
