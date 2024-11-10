import './App.css'
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

import BookingVehicleList from './components/BookingVehicleList'


function App() {

    const [token,setToken] = useState(null)
    const [from ,setFrom]=useState("")
    const [to,setTo] = useState("")
    const [date, setDate] = useState('');

    function handleToken(t){
      setToken(t)
    }

    function handleFrom(t){
      setFrom(t)
    }

    function handleTo(t){
      setTo(t)
    }
    function handleDate(t){
      setDate(t)
    }
    function handleDate2(t){
      setDate2(t)
    }


    
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
              <Navbar token={token}/>
              <Entry from={from} to={to} handleFrom={handleFrom} handleTo={handleTo} date={date} handleDate={handleDate} />
              <TopSearches/>
              <Displayhome/>
              <Vehiclehome/>
              <Packages/>
              <Story/>
              <Footer/>
          </> }/>

          <Route path="/Packages" element={<>
            <Navbar token={token}/>
            <PackageEntryFill/>
            <Packages/>
            <Packages/>
            <Footer/>
          </>}/>

          <Route path="/Contacts" element={<>
            <Navbar token={token}/>
            <Contacts/>
            <Footer/>
          </>}/>

          <Route path="/Login" element={<>
            <Login token={token} handleToken={(t)=>{handleToken(t)}}/>
          </>}/>

          <Route path="/Signup" element={<>
            <Signup/>
          </>}/>

          <Route path="/Booking" element={<>
            <Navbar token={token}/>
            <Search from={from} to={to} handleFrom={handleFrom} handleTo={handleTo} date={date} handleDate={handleDate} />
            <BookingVehicleList token={token} from={from} to={to} date={date}/>
            <Footer/>
          </>}/>

          <Route path="/Display" element={<>
            <Navbar token={token}/>
            <Display/>
            <Footer/>
          </>}/>

          <Route path="/ViewDetails" element={<>
            <Navbar token={token}/>
            <ViewDetails/>
            <Footer/>
          </>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
