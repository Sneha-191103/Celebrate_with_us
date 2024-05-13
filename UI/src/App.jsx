import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/User/login'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import LandingPage from './pages/User/landingPage'
import FAQPage from './pages/User/faqPage'
import GalleryPage from './pages/User/gallery'
import ContactPage from './pages/User/contact'
import Sidebar from './pages/Admin/sidebar'
import Dashboard from './pages/Admin/dashboard'
import Themes from './pages/Admin/themes'
import Cakes from './pages/Admin/cake'
import Menu from './pages/Admin/menu'
import Event from './pages/User/event'
import { Provider } from 'react-redux'
import store from './redux/store'; 
import Slider from './pages/User/Slider'
import Packages from './pages/User/packages'
import PremiumPage from './pages/User/premium'
import ReviewPage from './pages/User/purchase'
import RegistrationForm from './pages/User/registrationForm'
import GoldenPage from './pages/User/golden'
import TermConditions from './pages/shared/terms'
import PrivacyPolicy from './pages/shared/privacy'
import UserTable from './pages/Admin/user'
import BookingStatus from './pages/Admin/tab'
import Payment from './pages/User/payment'
import SilverPage from './pages/User/silver'
import SuccessPage from './pages/User/success'


function App() {
  return (
    <>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/event" element={<Packages/>}/>
          <Route path="/premium" element={<PremiumPage/>}/>
          <Route path="/gold" element={<GoldenPage/>}/>
          <Route path="/silver" element={<SilverPage/>}/>
          <Route path="/review" element={<ReviewPage/>}/>
          <Route path="/registration" element={<RegistrationForm/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/terms" element={<TermConditions/>}/>
          <Route path="/pay" element={<Payment/>}/>
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          <Route path="/confirm" element={<SuccessPage/>}/>
          <Route path="/gallery" element={<GalleryPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/slider" element={<Slider/>}/>
        </Routes>
        <Routes>
        <Route path='sidebar' element={<Sidebar/>}>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="user" element={<UserTable/>}/>
                <Route path="book" element={<BookingStatus/>}/>
                <Route path="theme" element={<Themes/>}/>
                <Route path="cake" element={<Cakes/>}/>
                <Route path="menu" element={<Menu/>}/>
        </Route>
        </Routes>
      </BrowserRouter>
      {/* </Provider> */}
    </>
  )
}

export default App
