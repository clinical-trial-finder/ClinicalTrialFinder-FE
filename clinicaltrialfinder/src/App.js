import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import TrialsList from "./components/TrialsList";
import SignUp from "./components/SignUp";

function App() {
  console.log("hello1");
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h2>Login</h2>
          <Route path="/" component={Login} />
          <PrivateRoute path="/protected" component={TrialsList} />
          <h2>Sign Up</h2>
          <Route path="/" component={SignUp} />
        </div>
      </div>
    </Router>
  );
}

export default App;
