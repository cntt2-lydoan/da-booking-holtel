import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import firebase from 'firebase';
import Register from './Register';
import Login from './Login';

class LoginAnt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true
        }
    }

    showLogin = () => {
        this.setState({
            showLogin: true
        })
    }

    showRegister = () => {
        this.setState({
            showLogin: false
        })
    }
    

    render() {
        const { showLogin } = this.state;
        console.log(this.state);
        return (
            <div className="col-md-12">
                <div className="profile-head">
                    <ul className="nav nav-tabs">
                        <li className="nav-item col-md-6">
                            <div className="nav-link "  onClick={() => this.showLogin()}>Login</div>
                        </li>
                        <li className="nav-item  col-md-6">
                            <div className="nav-link" onClick={() => this.showRegister()}>Register</div>
                        </li>
                    </ul>
                </div>
                <div className="col-md-12">
                            {showLogin ==true ?<Login />: <Register />}
                </div>
            </div>


        );
    }
}

export default LoginAnt;