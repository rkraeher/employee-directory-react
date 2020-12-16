import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import my pages
// Import my components


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
