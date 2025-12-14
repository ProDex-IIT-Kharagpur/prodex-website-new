import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Members from "./components/Members";
import Mentors from "./components/Mentors";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Members />
      <Mentors />
    </>
  );
}

export default App;
