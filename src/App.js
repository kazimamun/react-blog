import React from 'react';
import './App.css';
import Home from './containers/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactUs from './containers/ContactUs/index';
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import Posts from './containers/Posts/Posts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path='/contact'>
          <ContactUs />
        </Route>
        <Route path='/post/:postId' component={Posts} />
        <Route exact path="/">
          <Home /> 
        </Route>     
      </div>
    </Router>
  );
}

export default App;
