import './App.css'
import Singledetails from './components/Singledetails'
import NavBar from './components/navbar'
import Story from './components/Story'
import Entry from './components/Entry'
import Packages from './components/Packages'
import TopSearches from './components/TopSearches'
import Displayhome from './components/Displayhome'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Singledetails/>

      <Story/>
      <NavBar/>
      <Entry/>
      <TopSearches/>
      <Displayhome/>
      <Packages/>
      <Story/>
      <Footer/>
    </>
  )
}

export default App
