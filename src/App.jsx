import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Country from './Components/Country'
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:id' element={<Country />} />
      </Routes>
    </div>
  )
}

export default App