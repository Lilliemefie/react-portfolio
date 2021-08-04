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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/react-portfolio" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
