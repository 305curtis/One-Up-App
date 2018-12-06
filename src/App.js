import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.jsx';
import Settings from './pages/Settings';
import Security from './pages/Security';
import Fingerprint from './pages/Fingerprint';
import Password from './pages/Password';
import Pattern from './pages/Pattern';
import Pincode from './pages/Pincode';
import Phone from './pages/Phone';
import Code from './pages/Code';
import Success from './pages/Success';
import FingerprintConfirm from './pages/Fingerprint_Confirm';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Settings" component={Settings}/>
          <Route path="/Security" component={Security}/>
          <Route path="/Fingerprint" component={Fingerprint}/>
          <Route path="/Password" component={Password}/>
          <Route path="/Pattern" component={Pattern}/>
          <Route path="/Pincode" component={Pincode}/>
          <Route path="/Phone" component={Phone}/>
          <Route path="/Code" component={Code}/>
          <Route path="/Success" component={Success}/>
          <Route path="/Fingerprint_Confirm" component={FingerprintConfirm}/>
          <Route path="/Login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
