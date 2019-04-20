import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import "./App.css"

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Articles}/>
                <Route exact path="/articles" component={Articles}/>
                <Route exact path="/articles/:id" component={Detail}/>
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
);

export default App;