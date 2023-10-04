import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import App from './App';
import AppHome from './pages/app/app-home';
import AppAboutUs from './pages/app/app-about-us';
import AppShoppingCart from './pages/app/app-shopping-cart';
import AppContactUs from './pages/app/app-contact-us';
import CheckoutForm from './pages/app/app-checkout-form';
import AppTrackOrder from './pages/app/app-track-order';
import AdminPage from './pages/admin/admin';
import AdminDashBoard from './pages/admin/admin-dashbard';
import AdminMyQR from './pages/admin/admin-myQR';
import PageNotFound from './pages/Error';


function AppRoutes() {
  
  return (
    <>
       <Routes>
      
        <Route path="/" element={<Home/>} />
        <Route path="ns/app/:appId" element={<App/>}>
          <Route path="" element={<AppHome/>} />
          <Route path="about-us" element={<AppAboutUs/>} />
          <Route path="contact-us" element={<AppContactUs/>} />
          <Route path="shopping-cart" element={<AppShoppingCart/>} />
          <Route path="check-out-form" element={<CheckoutForm/>} />
          <Route path="track-order" element={<AppTrackOrder/>} />
        </Route>
        <Route path="s/user" element={<>Secure</>}></Route>
        <Route path="a/admin/:appId" element={<AdminPage/>}>
          <Route path="" element={<AdminDashBoard/>} />
          <Route path="my-qr" element={<AdminMyQR/>} />
        </Route>
        <Route path="o/owner" element={<>Admin</>}></Route>
        <Route path="*" element={<PageNotFound/>} />
       </Routes>
    </>
  )
}

export default AppRoutes;



