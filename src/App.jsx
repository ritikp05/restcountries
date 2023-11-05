import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Country from './Components/Country'
import Home from './Components/Home';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country/:id' element={<Country />} />
      </Routes>
    <ToastContainer/>
    </BrowserRouter>
    </div>
  )
}

export default App
