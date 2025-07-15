import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './HomePage/HomePage.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './HomePage/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Allcon' element={<HomePage/>}></Route>
    </Routes>
  </BrowserRouter>
)
