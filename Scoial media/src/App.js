import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import Dashboard from './Component/DashBoard';
import './App.css';

function App() {
  return (
  
    
    <Router>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    
    
  );
}

export default App;
