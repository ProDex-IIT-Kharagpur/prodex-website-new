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
              <HeroSection />
              <Members />
              <Mentors />
              <Portfolio />
              <FAQ />
            </>
          }
        />

        <Route path="/years/:slug" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
