import React, { Component } from 'react';
import firebase from 'firebase';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
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

    register(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async( userCredential) => {
                const user = userCredential.user;
                console.log(user);
                this.setState({
                    error: []
                });

                await localStorage.setItem('email', email)

                // if (userCredential !== '') {
                //     setTimeout(() => {
                //      this.props.history.push('/')
                //     }, 2000);
                //  }
            })
            .catch((error) => {
                this.setState({
                    errors: [...this.state.errors, error.message]
                })
            });
    }

    // handleSubmit = (email, password) => {

    //     const { errors } = this.state;
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //         .then(async res => {
    //             const token = await Object.entries(res.user)[5][1].b
                
    //             await localStorage.setItem('token', token);
    //             await localStorage.setItem('username', email);

    //             this.setState({
    //                 error: []
    //             });

    //             notificationComponent('success', 'Chúc mừng bạn đã đăng ký thành công')

    //             if (res !== '') {
    //                setTimeout(() => {
    //                 this.props.history.push('/')
    //                }, 2000);
    //             }
    //         })
    //         .catch(err => {

    //             setTimeout(() => {
    //                 this.props.history.push('/')
    //                }, 2000);
    //             console.log(errors);
    //             this.setState({
    //                 errors: [...this.state.errors, err.message]
    //             })
    //         })
       
    // }


    render() {
        const { email, password, errors } = this.state;
        return (
            <div>
                <span className="login100-form-title p-b-37">
                    Register
                            </span>
                <div className="wrap-input100 validate-input m-b-20" data-validate="Enter username or email">
                    <input value={email} onChange={(event) => this.handleChange(event)} className="input100"
                        type="email" name="email" placeholder="email" />
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
                    <button onClick={() => this.register(email, password)} className="login100-form-btn">
                        Register
                                </button>
                </div>
            </div>


        );
    }
}

export default Register;