import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

class Settings extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped">
                    <div class="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 class="border-bottom border-gray pb-2 mb-0">Settings</h6>
                        <div class="media text-muted pt-3">
                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <strong class="text-gray-dark">One Up </strong>
                                    <a href="#">Turn On</a>
                                </div>
                                <span class="d-block">Security Feature</span>
                            </div>
                        </div>
                        <div class="media text-muted pt-3">
                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <strong class="text-gray-dark">Email</strong>
                                    <a href="#">Update</a>
                                </div>
                                <span class="d-block">Notification Settings</span>
                            </div>
                        </div>
                        <div class="media text-muted pt-3">
                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <strong class="text-gray-dark">About Our App</strong>
                                    <a href="#">Visit</a>
                                </div>
                                <span class="d-block">Learn More</span>
                            </div>
                        </div>
                        <small class="d-block text-right mt-3">
                            <a href="#">Advanced Settings</a>
                        </small>
                    </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Settings;