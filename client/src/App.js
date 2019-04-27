import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import MainHeader from "./components/Headers/MainHeader";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <MainHeader />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
