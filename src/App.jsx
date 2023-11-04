import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Country from './Components/Country'
import Home from './Components/Home';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:id' element={<Country />} />
      </Routes>
    <ToastContainer/>
    </div>
  )
}

export default App