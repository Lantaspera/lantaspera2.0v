import './App.css';
import Navbar from './components/Navbar/Navbar';

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';



const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>

        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/about" component={About} exact>
          <About/>
        </Route>

        <Route path="/services" component={Services} exact>
          <Services/>
        </Route>

        <Route path="/contact" component={Contact} exact>
          <Contact />
        </Route>

      </Switch>
    </Router>



  )
}

export default App
