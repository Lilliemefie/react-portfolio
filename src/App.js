import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
