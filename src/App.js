import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./Component/Resume";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";

function App() {
  return (
    <div>
        <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}
export default App;
