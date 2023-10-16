import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Bannner/Banner'
import './App.css'
import Rawpost from './Components/RawPost/Rawpost'
import {actions, originals, comedy} from './/Components/urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rawpost title='Netflix Originals' url={originals} />
      <Rawpost  title='Action'url={actions} isSmall/>
      <Rawpost  title='Comedy'url={comedy} isSmall/>
    </div>
  )
}

export default App