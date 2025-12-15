import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Portfolio from "./components/Portfolio/Portfolio.tsx";
import EventPage from "./components/Portfolio/Years data/eventsPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home / Portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Dynamic Event Pages */}
        <Route path="/years/:slug" element={<EventPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
