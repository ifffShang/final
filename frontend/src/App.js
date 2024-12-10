import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      {/* default page */}
      <Route path="/" element={<Homepage />} />
      {/* register page */}
      <Route path="/register" element={<Register />}></Route>
      {/* login page */}
      <Route path="/login" element={<Login />}></Route>
      {/* profile page */}
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
    </>
  );
}

export default App;
