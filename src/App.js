import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterEl from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <FooterEl />
    </BrowserRouter>
  );
}

export default App;
