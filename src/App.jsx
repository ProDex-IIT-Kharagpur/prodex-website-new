import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Portfolio from "./components/Portfolio/Portfolio";
import EventPage from "./components/Portfolio/Years data/eventsPage";
import Members from "./components/Members";
import Mentors from "./components/Mentors";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <HeroSection />
              </section>

              <section id="about">
                 {/* <About />  <-- when we have the about component */}
                 <div style={{padding: '50px', textAlign: 'center'}}>About Section Placeholder</div>
              </section>

              <section id="team">
                <Members />
                <Mentors />
              </section>

              <section id="portfolio">
                <Portfolio />
              </section>

              <section id="faq">
                <FAQ />
              </section>

              <section id="contact">
                 {/* <Contact /> <-- when contact page is ready */}
                 <div style={{padding: '50px', textAlign: 'center'}}>Contact Section Placeholder</div>
              </section>
            </>
          }
        />

        <Route path="/years/:slug" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;