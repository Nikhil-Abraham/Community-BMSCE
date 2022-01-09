import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
<<<<<<< HEAD
import Home from "./pages/Home";
=======
import Profile from "./pages/profile";

>>>>>>> c98a892533bf5aaecf8624f0a00466bf26901c81
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Welcome to the Community</h1>
      <Home/>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
<<<<<<< HEAD
            <Route path="/" element={<Home />} />
=======
            <Route path="/profile" element={<Profile />} />

>>>>>>> c98a892533bf5aaecf8624f0a00466bf26901c81
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
