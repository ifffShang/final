import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";

const Home = () => <h1>Home Page</h1>;

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
