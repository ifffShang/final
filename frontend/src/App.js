import './App.css';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage/Homepage";
import Navibar from "./Components/Navbar/Navibar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from './context/userContext';

// backend url
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Navibar/>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
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
    </ UserContextProvider>
  );
}

export default App;
