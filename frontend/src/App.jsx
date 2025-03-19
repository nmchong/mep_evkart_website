import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/layout/NavBar"
import HeroSection from "./components/sections/HeroSection";
import AboutUsSection from "./components/sections/AboutUsSection"
import MetricsSection from "./components/sections/MetricsSection"
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
                <MetricsSection></MetricsSection>
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
