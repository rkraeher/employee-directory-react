import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import General from "./pages/General";
import API from "./utils/API";
import Sorted from "./pages/Sorted";

//Sort and General views are working but there are problems
// Nothing renders on root url - have to go to sort first
// Also general and sort aren't actually different components, but this was the inelegant work around that I came up with for the moment
// I eliminated duplicates by using exact path.

function App() {

  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={General} />
      </Wrapper>
      <Footer />
    </Router >
  );
}

export default App;
