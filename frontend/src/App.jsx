import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar"
import SocialMediaButtons from "./components/SocialMediaButtons"
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
                {/* header section */}
                <main className="flex flex-col items-center justify-center bg-blue-500 py-12 md:py-20 pb-10 text-white">

                    {/* large text */}
                    <nav className="text-6xl font-bold text-center p-12 mb-10">
                        MEP evKart
                    </nav>

                    {/* social media buttons */}
                    <SocialMediaButtons></SocialMediaButtons>
                </main>


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
