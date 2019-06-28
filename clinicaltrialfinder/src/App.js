import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import TrialsList from "./views/TrialsList";
import SignUp from "./components/SignUp";
import TrialSearchList from "./components/TrialSearchList";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/protected" component={TrialsList} />
          <Route path="/signup" component={SignUp} />
          <Route path="/search/:query" component={TrialSearchList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
