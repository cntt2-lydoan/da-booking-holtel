import React, { Component } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: []
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login(email, password) {
        // e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u.user);
                this.props.history.push('/')
                localStorage.setItem('email', email)
            }).catch((error) => {
                this.setState({
                    errors: [...this.state.errors, error.message]
                })
            });
    }
    
    loginWithGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            console.log("error login with google");
        });
    }
    loginWithFacebook(){
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;

            // ...
        })
        .catch((error) => {
            console.log("error login with facebook");
        });
    }

    render() {
        const { errors, email, password } = this.state;
        console.log(this.state);
        return (
            <div>
                <span className="login100-form-title p-b-37">
                    LOGIN
                            </span>
                <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
                    <input value={email} onChange={(event) => this.handleChange(event)} className="input100" type="email" name="email" placeholder="email" />
                    <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
                    <input value={password} onChange={(event) => this.handleChange(event)
                    } className="input100" type="password" name="password" placeholder="password" />
                    <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input m-b-25">
                    {errors.length > 0 ? errors.map(val => <p style={{ color: 'red' }}>{val}</p>) : null}

                </div>
                <div className="container-login100-form-btn">
                    <button onClick={() => this.login(email, password)} className="login100-form-btn">
                        Login
                                </button>
                </div>
                <div className="text-center p-t-57 p-b-20">
                    <span className="txt1">
                        Or login with
                                </span>
                </div>
                <div className="flex-c p-b-112">
                    <a href="#" className="login100-social-item" onClick={() => this.loginWithFacebook()}>
                        <i className="fa fa-facebook-f" />
                    </a>
                    <a href="#" className="login100-social-item" onClick={() => this.loginWithGoogle()}>
                        <img src="login/images/icons/icon-google.png" alt="GOOGLE" />
                    </a>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);