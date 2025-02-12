import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection";
import AboutUsSection from "./components/AboutUsSection"
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
        
        {/* navigation bar */}
        <NavBar></NavBar>

        <Routes>
          <Route
            path="/"
            element= {
              <>
                {/* header section (hero section) */}
                <HeroSection></HeroSection>


                {/* about us */}
                <AboutUsSection></AboutUsSection>
              </>
            }
          />

          {/* other pages: About, Sponsors, Contact */}
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App
