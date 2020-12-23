import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import General from "./pages/General";

function App() {

  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path={"/employee-directory-react"} component={General} />
      </Wrapper>
      <Footer />
    </Router >
  );
}

export default App;
