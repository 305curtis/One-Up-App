import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

class Success extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped text-center">
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main role="main" className="inner cover">
                    <h1 className="cover-heading">Success!!</h1>
                    <p className="lead">You're all set! You are now able to allow or deny purchases via your cell phone using the one-up feature. Thank you for choosing one-up, have a nice day!</p>
                    <p className="lead">
                    <Link to="Settings">
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

export default Success;