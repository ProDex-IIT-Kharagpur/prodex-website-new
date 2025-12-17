import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Portfolio from "./components/Portfolio/Portfolio";
import EventPage from "./components/Portfolio/Years data/eventsPage";
import Members from "./components/Members";
import Mentors from "./components/Mentors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
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
