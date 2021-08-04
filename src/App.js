import React from 'react';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Project from '../src/pages/Project';
import Contact from '../src/pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Home} path="/home" exact/>
        <Route component={About} path="/about" />
        <Route component={Project} path="/project" />
        <Route component={Contact} path="/contact" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
