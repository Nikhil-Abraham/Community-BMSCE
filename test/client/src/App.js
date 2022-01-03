import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Communiti</h1>
      <Router>
        <div>
          <h1>Welcome to the communiti</h1>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
