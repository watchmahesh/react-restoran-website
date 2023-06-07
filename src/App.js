import './App.css';
import {Route,Routes} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ServicePage from './pages/ServicePage';
// import TestimonialPage from './pages/AboutPage';
import ReservationPage from './pages/Reservation';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
function App() {
  return (

    <div>
    <Routes>
      <Route path="/" element ={<HomePage />} />
      <Route path="/about" element ={<AboutPage />} />
      <Route path="/service" element ={<ServicePage />} />
      <Route path="/menu" element ={<MenuPage />} />
      <Route path="/contact" element ={<ContactPage />} />
      <Route path="/reservation" element ={<ReservationPage />} />
    </Routes>

    </div>
  );
}

export default App;
