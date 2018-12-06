import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './Phone.css';


class Phone extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Phone Verification</h1>
                    <p className="lead">For added security please place your phone number in the box below and press next.</p>
                    <div className="lead ">
                            <input type="text" className="form-control phonecenter" />
                        </div>
                    <p className="lead">
                    <Link to="Code">
                        <button className="btn btn-lg btn-secondary">Next</button>
                    </Link>
                   
                    </p>
                </main>
                </div>
                </div>
                <div className="container"></div>
                {/* <Footer className="fixed-bottom"/> */}
            </div>        
        );
    }

}

export default Phone;