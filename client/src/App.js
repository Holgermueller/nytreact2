import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import AppHeader from "./components/Header";
import "./App.css"

const App = () => (
    <Router>
        <div>
          <AppHeader/>
            <Switch>
                <Route exact path="/" component={Articles}/>
                <Route exact path="/articles" component={Saved}/>
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App;