import './App.css';
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
import Webdevelopment from './components/Servicescontents/Webdevelopment';
import AppDevelopment from './components/Servicescontents/AppDevelopment';
import GraphicsDesign from './components/Servicescontents/GraphicsDesign';
import SocialMedia from './components/Servicescontents/SocialMedia';
import DigitalMarket from './components/Servicescontents/DigitalMarket';



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

        <Route path="/webdevelopment" component={Webdevelopment} exact >
          <Webdevelopment/>
        </Route>

        
        <Route path="/appdevelopment" component={AppDevelopment} exact >
          <AppDevelopment/>
        </Route>

        <Route path="/graphicdesign" component={GraphicsDesign} exact >
          <GraphicsDesign/>
        </Route>

        <Route path="/digitalmarket" component={DigitalMarket} exact >
          <DigitalMarket/>
        </Route>

        <Route path="/socialmedia" component={SocialMedia} exact >
          <SocialMedia/>
        </Route>


      </Switch>
    </Router>


  )
}

export default App
