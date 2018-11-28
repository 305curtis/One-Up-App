import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Enable One-Up Security</h1>
                    <p className="lead">The One-Up security feature gives credit/debit card users the ability to accept or deny purchases via the cell-phone/device using the one-up feature.</p>
                    <p className="lead">
                    <Link to="Settings">
                        <button className="btn btn-lg btn-secondary">Get Started</button>
                    </Link>
                   
                    </p>
                </main>
                </div>
                </div>
                <div className="container"></div>
                <Footer className="fixed-bottom"/>
            </div>
        );
    }
}

export default Home;