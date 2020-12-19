import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import General from './pages/General';
//import API from "./utils/API";

//Do I need this div here?

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route path="/" component={General} />
        </Wrapper>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
