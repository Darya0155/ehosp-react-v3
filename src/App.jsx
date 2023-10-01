import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App


