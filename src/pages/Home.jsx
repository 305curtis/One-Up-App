import React, { Component } from 'react';
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
                    <p className="lead">The One-Up security feature gives credit/debit card users the ability to accept of deny purchases via the cell-phone/device using the one-up feature.</p>
                    <p className="lead">
                    <a href="/Settings" class="btn btn-lg btn-secondary">Get Started</a>
                    </p>
                </main>
                </div>
                </div>
                <div className="container"></div>
                <Footer />
            </div>
        );
    }
}

export default Home;