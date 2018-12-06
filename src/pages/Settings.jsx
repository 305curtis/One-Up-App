import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
  }
};


class Settings extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false 
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
        console.log('print');
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container topped">
                    <div className="my-3 p-3 bg-white rounded shadow-sm">
                        <h6 className="border-bottom border-gray pb-2 mb-0">Settings</h6>
                        <div className="media text-muted pt-3">
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">One Up </strong>
                                    <button onClick={this.openModal}>Turn On</button>
                                </div>
                                <Modal 
                                    isOpen={this.state.modalIsOpen}
                                    onAfterOpen={this.afterOpenModal}
                                    onRequestClose={this.closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <div>Require a security lock to control your purchase requests?</div>
                                    <form>
                                        <Link to='/Security'> <button>Yes</button> </Link>
                                        <button onClick={this.closeModal}>Cancel</button>
                                    </form>
                                </Modal>
                                <span className="d-block">Security Feature</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">Email</strong>
                                    <button href="#">Update</button>
                                </div>
                                <span className="d-block">Notification Settings</span>
                            </div>
                        </div>
                        <div className="media text-muted pt-3">
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">About Our App</strong>
                                    <button href="#">Visit</button>
                                </div>
                                <span className="d-block">Learn More</span>
                            </div>
                        </div>
                        <small className="d-block text-right mt-3">
                            <a href="#">Advanced Settings</a>
                        </small>
                    </div>
                    </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default Settings;