import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/login";
import Home from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
// Import other components that you want to route to

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          {/* Add more Route components for other pages */}
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
