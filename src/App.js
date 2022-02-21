import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";
import WebDesign from "./components/Servicescontents/WebDesign"
import NavbarTab from './components/Navbar/Navbar';
import Webdevelopment from './components/Servicescontents/Webdevelopment';
import AppDevelopment from './components/Servicescontents/AppDevelopment';
import GraphicsDesign from './components/Servicescontents/GraphicsDesign';
import SocialMedia from './components/Servicescontents/SocialMedia';
import DigitalMarket from './components/Servicescontents/DigitalMarket';
import ErrorPage from './components/ERROR/ErrorPage';
import SectionFive from './components/Landingpage/SectionFive';
import AboutFour from './components/Aboutpage/AboutFour';
import AboutTwo from './components/Aboutpage/AboutTwo';
import SectionSeven from './components/Landingpage/SectionSeven';



const App = () => {



  useEffect(() => {
    Aos.init({ duration: 1500 });


  }, []);
  return (

    <Router basename='/built' >
      <div className='App'>
        <NavbarTab />


        <Switch>

          <Route path="/home" exact component={Home}  >
            <Home />
          </Route>
          <Route path="/services" component={Services}  >
            <Services />
          </Route>

          <Route path="/about" component={About} >
            <About />
          </Route>
          <Route path="/contact" component={Contact}  >
            <Contact />
          </Route>
          {/* 

        

          


          <Route path="/webdesign" component={WebDesign} >
            <WebDesign />
          </Route>

          <Route path="/webdevelopment" component={Webdevelopment}  >
            <Webdevelopment />
          </Route>


          <Route path="/appdevelopment" component={AppDevelopment}  >
            <AppDevelopment />
          </Route>

          <Route path="/graphicdesign" component={GraphicsDesign} >
            <GraphicsDesign />
          </Route>

          <Route path="/digitalmarket" component={DigitalMarket}  >
            <DigitalMarket />
          </Route>

          <Route path="/socialmedia" component={SocialMedia}  >
            <SocialMedia />
          </Route>

          <Route path="/errorpage" component={ErrorPage}  >
            <ErrorPage />
          </Route>

          <Route path="/sectionfive" component={SectionFive}  >
            <SectionFive />
          </Route>

          <Route path="/faq" component={AboutFour} >
            <AboutFour />
          </Route>

          <Route path="/features" component={AboutTwo}  >
            <AboutTwo />
          </Route> */}

        </Switch>
        <SectionSeven/>
      </div>
    </Router>


  )
}

export default App
