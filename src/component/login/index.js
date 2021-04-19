import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'antd';
import { firebaseConnect } from '../../connectFirebase/firebaseConnect';
import LoginAnt from './LoginAnt';
import Register from './Register';
import Home from './../home/Home';
import { Redirect } from 'react-router';
import firebase from 'firebase';
import Login from './Login';

class LoginModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            showLogin: true
        }
    }
    showModal = () => {
        this.setState({
            isModalVisible: true
        })
        console.log(this.state.isModalVisible);
    };
    handleOk = () => {
        this.setState({
            isModalVisible: false
        })
    };
    handleCancel = () => {
        this.setState({
            isModalVisible: false
        })
    };

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
        return (
            <Fragment>
                <li>
                    <span type="button" onClick={this.showModal} className="btn-login">
                        Login
                </span>
               </li>

                <Modal title="" visible={this.state.isModalVisible}
                    onOk={this.handleOk} onCancel={this.handleCancel} >
                    <div className="col-md-12">
                        <div className="profile-head">
                            <ul className="nav nav-tabs">
                                <li className="nav-item col-md-6">
                                    <div className="nav-link" onClick={() => this.showLogin()}>Login</div>
                                </li>
                                <li className="nav-item  col-md-6">
                                    <div className="nav-link" onClick={() => this.showRegister()}>Register</div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            {showLogin == true ? <Login /> : <Register />}
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default LoginModal;