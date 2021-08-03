import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home'
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        < Route component={Home} path="/" exact />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
