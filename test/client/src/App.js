import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Communiti</h1>
      <Router>
        <div>
          <h1>Welcome to the communiti</h1>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    </div>
  );
}

export default App;
