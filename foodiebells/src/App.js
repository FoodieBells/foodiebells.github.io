import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import PrivacyPolicy from './components/privacy-policy/PrivacyPolicy';
import ContactUs from './components/contactus/ContactUs';
import Shop from './components/shop/Shop';
import Recipes from './components/recipes/Recipes';
import RecipePage from './components/recipe-page/RecipePage';
import ScrollToTop from 'react-router-scroll-top';

function App() {
  return (
    <Router>
    
    <ScrollToTop>
      <Header/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipe/" component={RecipePage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/shop" component={Shop} />
      <Footer/>
    
    </ScrollToTop>
    </Router>
  );
}

export default App;
