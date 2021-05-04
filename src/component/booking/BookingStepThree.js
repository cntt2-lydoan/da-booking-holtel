import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { chuyenDoiURL, getCurrentDate, getMoment } from './../../utils/notification';
import { datas } from './../../connectFirebase/firebaseConnect';

export default class BookingStepThree extends Component {
    constructor(props) {
        super(props)
        this.state = {

            room: {
                id: this.props.match.params.id,
                facility: [],
                listImage: []
            },
            user: {},
            total: 0
        }

    }

    returnhome() {
        this.props.history.push("/")
    }

    ridirectBack = (r) => {
        this.props.history.push(`/booking-step-two/id=/${this.props.match.params.id}/name=/${chuyenDoiURL(r.name)}}`)
    }
    componentDidMount() {

        datas.ref('room').child(this.props.match.params.id).on("value", res => {
            console.log(res.val())
            this.setState({
                room: res.val()
            });
        })

        
        let array = JSON.parse(localStorage.getItem('personal-information')) || {};
        this.setState({
            user: array
        })

        let aggag = localStorage.getItem('total');
        this.setState({
            total: aggag
        })
    }
    render() {
        const {room, user , total} = this.state;
        console.log(room);
        return (
            <div>
                {/* ========================  Checkout ======================== */}
                <section className="page">
                    {/* ===  Page header === */}
                    <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                        <div className="container">
                            <h2 className="title">Reservation completed</h2>
                            <p>Thank you!</p>
                        </div>
                    </div>
                    {/* ===  Step wrapper === */}
                    <div className="step-wrapper">
                        <div className="container">
                            <div className="stepper">
                                <ul className="row">
                                    {/* <li className="col-md-4 active">
                                        <span data-text="Room & rates" />
                                    </li>
                                    <li className="col-md-4 active">
                                       <span data-text="Reservation" />
                                    </li> */}
                                    <li className="col-md-4 active">
                                        <span data-text="Checkout" />
                                    </li>
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
                                            <div className="col-md-6">
                                                <div className="white-block">
                                                    <div className="h4">Guest information</div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Name</strong> <br />
                                                                <span> {user.firstname}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Email</strong><br />
                                                                <span>{user.email}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Phone</strong><br />
                                                                <span>{user.phone}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Zip</strong><br />
                                                                <span>{user.zipcode}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>City</strong><br />
                                                                <span>{user.city}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Address</strong><br />
                                                                <span>{user.address}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> {/*/col-md-6*/}
                                            </div>
                                            {/* === right content === */}
                                            <div className="col-md-6">
                                                <div className="white-block">
                                                    <div className="h4">Reservation details</div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Order no.</strong> <br />
                                                                <span>52522-63259226</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Transaction ID</strong> <br />
                                                                <span>2265996</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Order date</strong> <br />
                                                                <span>{getCurrentDate()}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="h4">Payment details</div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Transaction time</strong> <br />
                                                                <span>{getCurrentDate()} at {getMoment()}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Amount</strong><br />
                                                                <span>{room.unit} {total}</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Reservation type</strong><br />
                                                                <span>{room.name}</span>
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
                                                <div onClick={()=> this.ridirectBack(room)} className="btn btn-clean-dark">Back</div>
                                            </div>
                                            <div>
                                                <div onClick={() => this.returnhome()} style={{cursor: 'pointer'}} class="btn btn-main">HOME <span className="icon icon-chevron-right" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                        </div> 
                    </div> 
                </section>
            </div>

        )
    }
}