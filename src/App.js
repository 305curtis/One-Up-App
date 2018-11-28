import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Settings from './pages/Settings';
import Security from './pages/Security';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Settings" component={Settings}/>
          <Route path="/Security" component={Security}/>
        </div>
      </Router>
    );
  }
}

export default App;
