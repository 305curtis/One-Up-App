import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Modal from 'react-modal';
import './Fingerprint.css';

class Fingerprint extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Fingerprint</h1>
                    <p className="lead">Place your security finger, that you would like to use to either Authorize or Not Authorize a purchase to go through, in the section at the bottom of the page.</p>
                    <h3 className="cover-heading">Place Fingerprint Here:</h3>
                    <p className="lead">
                    <Link to="Fingerprint_Confirm">
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

export default Fingerprint;