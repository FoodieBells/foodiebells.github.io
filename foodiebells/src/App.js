import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Page404 from './components/page404/Page404';
import Test from './components/Test';

function App() {
  return (
    <Router>
    
      <Header/>
        <ScrollToTop>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/recipe/" component={RecipePage} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/shop" component={Shop} />
          <Route path="/test" component={Test} />
          <Route  component={Page404} />
          </Switch>
        </ScrollToTop>
      <Footer/>
    
    </Router>
  );
}

export default App;
