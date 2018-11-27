import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped">
                <h2>Welcome to the best place on earth.</h2>
                <p>This is where all of your dreams come true.</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;