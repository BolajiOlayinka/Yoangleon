import React from 'react';

import './App.css';
import Home from './Component/Home';
import {Route, Switch} from 'react-router-dom';
import About from './Component/About';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Event from './Component/Event';
import Cause from './Component/Cause';

function App() {
  return (
    <div className="App">
    
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/event" component={Event}></Route>
      <Route path="/cause" component={Cause}></Route>
      </Switch>
      <Footer/>
    
     
    </div>
  );
}

export default App;
