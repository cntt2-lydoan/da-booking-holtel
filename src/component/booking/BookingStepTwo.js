import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { datas } from './../../connectFirebase/firebaseConnect';
import { chuyenDoiURL, getCurrentDate } from './../../utils/notification';
import firebase from 'firebase';
import LoginModal from '../login';
export default class BookingStepTwo extends Component {

    constructor(props) {
        super(props)
        this.state = {

            room: {
                id: this.props.match.params.id,
                facility: [],
                listImage: []
            },
            user: {},
            paymentOption: '',
            isLogin: '',
            loginUser: {}
        }
    }
    componentDidMount() {
        var ahihi = this;

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('This is the user: ', user)
                ahihi.setState({
                    loginUser: user
                });
            } else {
                console.log('There is no logged in user');
            }
        });

        datas.ref('room').child(this.props.match.params.id).on("value", res => {
            console.log(res.val())
            this.setState({
                room: res.val()
            });
        });

        let array = JSON.parse(localStorage.getItem('personal-information')) || {};
        this.setState({
            user: array
        })
        let adad = localStorage.getItem('email') || '';
        this.setState({
            isLogin: adad
        })

    }

    isChangeUser = (e) => {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
        });
    }

    isChangeRadio = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    redirectThree = (r) => {
        const { user, room, loginUser } = this.state;
        let guest_count = localStorage.getItem("guest_count")
        let night = localStorage.getItem("night")
        let total = localStorage.getItem("total")
        localStorage.setItem("personal-information", JSON.stringify(user))
        datas.ref().child('order').push({
            room: room,
            guest_count: guest_count,
            night: night,
            total: total,
            personal_information: user,
            idUser: loginUser.uid
        })
        setTimeout(() => {
            this.props.history.push(`/booking-step-three/id=/${this.props.match.params.id}/name=/${chuyenDoiURL(r.name)}`)
        }, 2000);
    }



    ridirectBack = (r) => {
        this.props.history.push(`/booking-step-one/id=/${this.props.match.params.id}/name=/${chuyenDoiURL(r.name)}}`)
    }


    render() {
        const { room, user, paymentOption, isLogin } = this.state;
        
        return (
            <div>
                {/* ========================  Checkout ======================== */}
                <section className="page">
                    {/* ===  Page header === */}
                    <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                        <div className="container">
                            <h2 className="title">Confirm your reservation</h2>
                            <p>Guest information</p>
                        </div>
                    </div>
                    {/* ===  Step wrapper === */}
                    <div className="step-wrapper">
                        <div className="container">
                            <div className="stepper">
                                <ul className="row">
                                    {/* <li className="col-md-4 active">
                                        <span data-text="Room & rates" />
                                    </li> */}
                                    <li className="col-md-4 active">
                                        <span data-text="Reservation" />
                                    </li>
                                    {/* <li className="col-md-4">
                                        <span data-text="Checkout" />
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* ===  Checkout === */}
                    <div className="checkout">
                        <div className="container">
                            <div className="clearfix">
                                {/* ========================  Note block ======================== */}
                                <div className="cart-wrapper">
                                    <div className="note-block">
                                        <div className="row">
                                            {/* === left content === */}
                                            <div className="col-md-12">
                                                {/* === login-wrapper === */}
                                                <div className="login-wrapper">
                                                    <div className="white-block">
                                                        <div className="login-block login-block-signup">
                                                            <div className="h4">Personal Information  <div className="btn btn-main btn-xs btn-login pull-right btn-login-m">{isLogin !== '' ? isLogin : <LoginModal/>}</div></div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" name="firstname" value={user.firstname} onChange={(e) => this.isChangeUser(e)} className="form-control" placeholder="First name" />
                                                                        <small><i><b>Firstname</b></i></small>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" name="lastname" value={user.lastname} onChange={(e) => this.isChangeUser(e)} className="form-control" placeholder="Last name" />
                                                                        <small><i><b>Lastname</b></i></small>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <input type="text" name="address" value={user.address} onChange={(e) => this.isChangeUser(e)} className="form-control" placeholder="Address" />
                                                                        <small><i><b>Address</b></i></small>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <input type="text" name="zipcode" value={user.zipcode} onChange={(e) => this.isChangeUser(e)} className="form-control" placeholder="Zip code" />
                                                                        <small><i><b>Zipcode</b></i></small>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="form-group">
                                                                        <input type="text" name="city" value={user.city} onChange={(e) => this.isChangeUser(e)} className="form-control" placeholder="City" />
                                                                        <small><i><b>City</b></i></small>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" name="email" value={user.email} onChange={(e) => this.isChangeUser(e)} className="form-control" placeholder="Email" />
                                                                        <small><i><b>Email</b></i></small>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" name="phone" value={user.phone} onChange={(e) => this.isChangeUser(e)} className="form-control" placeholder="Phone" />
                                                                        <small><i><b>Phone</b></i></small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="cart-wrapper">
                                    <div className="clearfix">
                                        <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                                            <div>
                                                <div onClick={() => this.ridirectBack(room)} className="btn btn-clean-dark">Back</div>
                                            </div>
                                            <div>
                                                <div onClick={isLogin !== ''?() => this.redirectThree(room): "Log in"} style={{ cursor: 'pointer' }} class="btn btn-main">Finish <span className="icon icon-chevron-right" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> {/*/container*/}
                    </div> {/*/checkout*/}
                </section>
            </div>

        )
    }
}