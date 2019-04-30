import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
