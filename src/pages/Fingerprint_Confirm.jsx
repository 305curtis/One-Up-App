import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Modal from 'react-modal';
import './Fingerprint.css';

class FingerprintConfirm extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Please Confirm Your Fingerprint</h1>
                    <p className="lead">Place your chosen security lock finger, from the page before, in the section at the bottom of the page.</p>
                    <h3 className="cover-heading">Place Fingerprint Here:</h3>
                    <p className="lead">
                    <Link to="Phone">
                        <button className="fingur"></button>
                    </Link>
                   
                    </p>
                </main>
                </div>
                </div>
                <div className="container"></div>
            </div>
        );
    }
}

export default FingerprintConfirm;