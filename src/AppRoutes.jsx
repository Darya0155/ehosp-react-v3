import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


function AppRoutes() {
  
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/app" element={<>APP</>}></Route>
       </Routes>
    </>
  )
}

export default AppRoutes;

