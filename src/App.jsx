import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  
  return (
    <>
      <Header></Header>
       <Routes>
        <Route path="/H" element={<Home/>}>
          <Route path="A" element={<h1>A</h1>} />
          <Route path="B" element={<h1>B</h1>} />
        </Route>
        <Route path="/aboutus" element={<>aboutus</>}/>
        <Route path="/contactus" element={<>contactus</>}/>
       </Routes>
    </>
  )
}

export default App

