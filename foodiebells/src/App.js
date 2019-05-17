import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy';
import ContactUs from './components/contactus/ContactUs';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/contact" component={ContactUs} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
