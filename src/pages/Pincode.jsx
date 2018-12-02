import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Modal from 'react-modal';

class Pincode extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Pincode</h1>
                    <p className="lead">Input the security Pincode that you would like to use to either Authorize or Not Authorize a purchase to go through in the field below and press Next. </p>
                    <div className="lead ">
                            <input type="text" className="form-control phonecenter" />
                        </div>
                    <p className="lead">
                    <Link to="Phone">
                        <button className="btn btn-lg btn-secondary">Next</button>
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

export default Pincode;