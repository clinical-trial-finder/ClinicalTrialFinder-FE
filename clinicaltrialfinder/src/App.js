import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import TrialsList from "./components/TrialsList";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/protected" component={TrialsList} />
          <Route path="/signup" component={SignUp} />
        </div>
      </div>
    </Router>
  );
}

export default App;
