import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ React ,useEffect}from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Aos from 'aos';
import"aos/dist/aos.css";
import WebDesign from "./components/Servicescontents/WebDesign"
import NavbarTab from './components/Navbar/Navbar';



const App = () => {
  useEffect(() => {
    Aos.init({duration:1500});
  
    
  }, []);
  return (

    <Router>
      <NavbarTab />

      <Switch>

        <Route path="/" component={Home} exact >
          <Home />
        </Route>

        <Route path="/about" component={About} exact>
          <About/>
        </Route>

        <Route path="/services" component={Services} exact >
          <Services/>
        </Route>

        <Route path="/contact" component={Contact} exact >
          <Contact />
        </Route>

        
        <Route path="/webdesign" component={WebDesign} exact >
          <WebDesign />
        </Route>

      </Switch>
    </Router>


  )
}

export default App
