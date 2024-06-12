import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Route,Routes } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/userCart'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobiles' element={<MobilePage/>}/>
        <Route path='/mobiles/:id' element={<MobileSingle/>}/>
         <Route path='/cart' element={<UserCart/>}/>
        
      </Routes>
    
    </div>
  )
}

export default App