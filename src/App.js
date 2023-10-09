import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Bannner/Banner'
import './App.css'
import Rawpost from './Components/RawPost/Rawpost'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rawpost/>
    </div>
  )
}

export default App