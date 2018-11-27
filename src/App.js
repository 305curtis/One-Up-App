import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Settings from './pages/Settings';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/Settings" component={Settings}/>
        </div>
      </Router>
    );
  }
}

export default App;
