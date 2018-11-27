import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer fixed-bottom">
                <div className="container justify-content-md-center">
                    <span className="text-muted justify-content-md-center">One-Up Feature &#169; {new Date().getFullYear()}</span>
                </div>
            </footer>
        );
    }
}

export default Footer;