import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bootcamp, setBootcamp] = useState("Rookies");

  return (
    <div className="App">
      <Home bootcamp={bootcamp} />
      <Navbar />
    </div>
  );
}

export default App;
