import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import App from './App';
import AppHome from './pages/app/app-home';
import AppAboutUs from './pages/app/app-about-us';
import AppShoppingCart from './pages/app/app-shopping-cart';
import AppContactUs from './pages/app/app-contact-us';
import CheckoutForm from './pages/app/app-checkout-form';
import AppTrackOrder from './pages/app/app-track-order';
import AdminHome from './pages/admin/admin-home';
import AdminPage from './pages/admin/admin';


function AppRoutes() {
  
  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="ns/app" element={<App/>}>
          <Route path="" element={<AppHome/>} />
          <Route path="about-us" element={<AppAboutUs/>} />
          <Route path="contact-us" element={<AppContactUs/>} />
          <Route path="shopping-cart" element={<AppShoppingCart/>} />
          <Route path="check-out-form" element={<CheckoutForm/>} />
          <Route path="track-order" element={<AppTrackOrder/>} />
        </Route>
        <Route path="s/user" element={<>Secure</>}></Route>
        <Route path="a/admin" element={<AdminPage/>}>
          <Route path="" element={<AdminHome/>} />
        </Route>
        <Route path="o/owner" element={<>Admin</>}></Route>
       </Routes>
    </>
  )
}

export default AppRoutes;


