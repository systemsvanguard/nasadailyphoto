// src/App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SiteFooter from './includes/SiteFooter'
// import SiteHeader from './includes/SiteHeader'
import SiteNavBar from './SiteNavBar'
import Home from './pages/Home'
import DailyPhoto from './pages/DailyPhoto'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <SiteNavBar />
      <Switch>
       <Route component={Home} path='/' exact />
       <Route component={DailyPhoto} path='/dailyphoto' />
       <Route component={About} path='/about' />
       <Route component={Resources} path='/resources' />
       <Route component={Contact} path='/contact' />
      </Switch>
      <SiteFooter />
    </div>
    </BrowserRouter>
  );
}

export default App;
