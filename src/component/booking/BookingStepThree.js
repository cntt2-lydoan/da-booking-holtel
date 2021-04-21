import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { chuyenDoiURL, getCurrentDate } from './../../utils/notification';
import { datas } from './../../connectFirebase/firebaseConnect';

export default class BookingStepThree extends Component {
    constructor(props) {
        super(props)
        this.state = {

            room: {
                id: this.props.match.params.id,
                facility: [],
                listImage: []
            }
        }

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
    }
    render() {
        const {room} = this.state;
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
                                    <li className="col-md-4 active">
                                        <a href="reservation-1.html"><span data-text="Room & rates" /></a>
                                    </li>
                                    <li className="col-md-4 active">
                                        <a href="reservation-2.html"><span data-text="Reservation" /></a>
                                    </li>
                                    <li className="col-md-4 active">
                                        <a href="reservation-3.html"><span data-text="Checkout" /></a>
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
                                                                <span>John Doe</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Email</strong><br />
                                                                <span>johndoe@company.com</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Phone</strong><br />
                                                                <span>+122 523 352</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Zip</strong><br />
                                                                <span>94107</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>City</strong><br />
                                                                <span>San Francisco, California</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Address</strong><br />
                                                                <span>795 Folsom Ave, Suite 600</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Company name</strong><br />
                                                                <span>Your company name</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Company phone</strong><br />
                                                                <span>+122 333 6665</span>
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
                                                                <span>06/30/2017 at 00:59</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Amount</strong><br />
                                                                <span>$ 1259,00</span>
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
                                </div>
                                
                            </div>
                        </div> 
                    </div> 
                </section>
            </div>

        )
    }
}
