import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
