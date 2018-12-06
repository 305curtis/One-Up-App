import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        return(
            <div className="container topped text-center">
                <Navbar />
                <MuiThemeProvider>
                    <div>
                        <h1>Welcome!</h1>
                        <p>Online &amp; Mobile Security</p>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="username"
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                        />
                        <br/>
                        <Link to="/">
                        <button className="btn btn-lg btn-secondary">Sign In</button>
                        </Link>
                    </div>
                </MuiThemeProvider>
                <Footer />
            </div>
        );
    }
}

const style = {
    margin: 90
};

export default Login;