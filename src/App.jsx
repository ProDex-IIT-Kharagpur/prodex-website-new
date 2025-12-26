import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// --- TEAM'S IMPORTS ---
import Portfolio from "./components/Portfolio/Portfolio";
import EventPage from "./components/Portfolio/Years data/eventsPage";
import Members from "./components/Members";
import Mentors from "./components/Mentors";

// --- YOUR NEW IMPORTS ---
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection.jsx';

function App() {
  return (
    <BrowserRouter>
      {/* 1. Navbar stays visible on ALL pages */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              {/* 2. Your Hero Section acts as the "Cover" */}
              <HeroSection />

              {/* 3. Team's content follows below */}
              <Members />
              <Mentors />
              <Portfolio />
            </>
          }
        />

        {/* Dynamic Event Pages */}
        <Route path="/years/:slug" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;