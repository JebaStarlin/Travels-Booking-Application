import './App.css'
// import Singledetails from './components/Singledetails'
// import Vehiclehome from './components/Vehiclehome'

// import Story from './components/Story'
// import Entry from './components/Entry'
// import Packages from './components/Packages'
// import TopSearches from './components/TopSearches'
// import Displayhome from './components/Displayhome'
// import Footer from './components/Footer'
// import Login from './components/Login'
// import Signup from './components/Signup'
import { useState } from 'react';
import Navbar from './components/navbar'


function App() {

    const [token,setToken] = useState(null)

    function handleToken(t){
      setToken(t)
    }
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
//           <Route path='/sign-up' element={<Signup/>} />
//           <Route path='/login' element={<Login token={token} handleToken={handleToken} />} />
//           <Route path='/' element={<>
//              <NavBar token={token} handleToken={handleToken}/>
//             <Entry/>
//             <TopSearches/>
//             <Displayhome/>
//             <Packages/>
//             <Story/>
//             <Footer/>
//           </>} />
        <Route path="/" element={<>
<NavBar/><Entry/><TopSearches/><Displayhome/><Vehiclehome/><Packages/><Story/><Footer/>
      </> }/>
      <Route path="/Packages" element={<><NavBar/><PackageEntryFill/><Packages/><Packages/><Footer/></>}/>
      <Route path="/Contacts" element={<><NavBar/><Contacts/><Footer/></>}/>
      <Route path="/Login" element={<><Login/></>}/>
      <Route path="/Signup" element={<><Signup/></>}/>
      <Route path="/Booking" element={<><Navbar/><Search/><Singledetails/><Singledetails/><Singledetails/><Footer/></>}/>
      <Route path="/Display" element={<><NavBar/><Display/><Footer/></>}/>
      <Route path="/ViewDetails" element={<><NavBar/><ViewDetails/><Footer/></>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
