import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Modal from 'react-modal';


class Pattern extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Footer />
            </div>
        );
    }
}

export default Pattern;