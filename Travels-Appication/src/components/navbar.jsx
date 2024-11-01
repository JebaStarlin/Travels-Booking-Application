

function Navbar() {
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
        
        <div className='' >
            <p>Login/Signup</p>
        </div>
    </nav>
  )
}

export default Navbar
