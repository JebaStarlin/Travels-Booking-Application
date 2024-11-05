import './App.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singledetails from './components/Singledetails'
import NavBar from './components/navbar'
import Story from './components/Story'
import Entry from './components/Entry'
import Packages from './components/Packages'
import TopSearches from './components/TopSearches'
import Displayhome from './components/Displayhome'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
