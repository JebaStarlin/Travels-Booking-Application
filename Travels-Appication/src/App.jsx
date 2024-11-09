import './App.css'
import Singledetails from './components/Singledetails'
import Vehiclehome from './components/Vehiclehome'

import Story from './components/Story'
import Entry from './components/Entry'
import Packages from './components/Packages'
import TopSearches from './components/TopSearches'
import Displayhome from './components/Displayhome'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import { useState } from 'react';
import Navbar from './components/navbar'
import { Route , BrowserRouter, Routes} from 'react-router-dom';
import PackageEntryFill from './components/PackageEntryFill';
import Contacts from './components/Contacts'
import Search from './components/Search'
import Display from './components/Display'
import ViewDetails from './components/ViewDetails'


function App() {

    const [token,setToken] = useState(null)

    function handleToken(t){
      console.log(" sbcsdnevcsdvcihs")
      setToken(t)
    }
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          {/* Demopage */}
        <Route path="/" element={<>
<Navbar token={token}/><Entry/><TopSearches/><Displayhome/><Vehiclehome/><Packages/><Story/><Footer/>
      </> }/>
      <Route path="/Packages" element={<><Navbar token={token}/><PackageEntryFill/><Packages/><Packages/><Footer/></>}/>
      <Route path="/Contacts" element={<><Navbar token={token}/><Contacts/><Footer/></>}/>
      <Route path="/Login" element={<><Login token={token} handleToken={(t)=>{handleToken(t)}}/></>}/>
      <Route path="/Signup" element={<><Signup/></>}/>
      <Route path="/Booking" element={<><Navbar token={token}/><Search/><Singledetails/><Singledetails/><Singledetails/><Footer/></>}/>
      <Route path="/Display" element={<><Navbar token={token}/><Display/><Footer/></>}/>
      <Route path="/ViewDetails" element={<><Navbar token={token}/><ViewDetails/><Footer/></>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
