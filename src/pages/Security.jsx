import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class Security extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <div className="container topped">
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Security Lock Options</h6>
                        <div className="media text-muted pt-3">
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Fingerprint </strong>
                                    <Link to="Fingerprint"><button >Turn On</button></Link>
                                </div>
                                <span className="d-block">Enable security fingerprint feature</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Password</strong>
                                    <Link to="Password"><button >Turn On</button></Link>
                                </div>
                                <span className="d-block">Choose a security password</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Pattern</strong>
                                    <Link to="Pattern"><button >Turn On</button></Link>
                                </div>
                                <span className="d-block">Choose a security pattern</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Pincode</strong>
                                    <Link to="Pincode"><button >Turn On</button></Link>
                                </div>
                                <span className="d-block">Choose a security pincode</span>
                            </div>
                        </div>
                        <small className="d-block text-right mt-3">
                            <Link to="Settings">Back To Settings</Link>
                        </small>
                    </div>
                    </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Security;