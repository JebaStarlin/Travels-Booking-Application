import './App.css'
import Singledetails from './components/Singledetails'
import Vehiclehome from './components/Vehiclehome'
import NavBar from './components/Navbar'
import Story from './components/Story'
import Entry from './components/Entry'
import Packages from './components/Packages'
import TopSearches from './components/TopSearches'
import Displayhome from './components/Displayhome'
import Footer from './components/Footer'
import PackageEntryFill from "./components/PackageEntryFill"
import Contacts from "./components/Contacts"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Search from './components/Search'
import Display from './components/Display'
import ViewDetails from './components/ViewDetails'
import Userpop from './components/userpop'
function App() {
  return (
    <BrowserRouter>

    <Routes>
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
      <Route path="/Userpop" element={<><Userpop/></>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
