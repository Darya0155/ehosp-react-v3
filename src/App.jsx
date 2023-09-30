import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/app" element={<>APP</>}></Route>
       </Routes>
    </>
  )
}

export default App

