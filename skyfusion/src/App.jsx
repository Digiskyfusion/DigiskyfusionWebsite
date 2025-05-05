import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/Aboutus";
import Footer from "./Components/Footer";
import Membershipplan from "./Components/Membershipplan";
import Services from "./Pages/Services";
import ContactUs from "./Components/Contactus";
import NavPortfolio from "./Components/NavPortfolio";
import Contactuspage from "./Pages/Contactuspage";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import ScrollToTop from "./Components/ScrollToTop"


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensure this is inside BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/ContactUs" element={<Contactuspage />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
