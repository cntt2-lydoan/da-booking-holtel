import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class BookingStepThree extends Component {
    render() {
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
                                                                <span>06/30/2017</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Shipping arrival</strong> <br />
                                                                <span>07/30/2017</span>
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
                                                                <strong>Cart details</strong><br />
                                                                <span>**** **** **** 5446</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <strong>Reservation type</strong><br />
                                                                <span>Luxury appartment</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ========================  Cart wrapper ======================== */}
                                <div className="cart-wrapper">
                                    {/*cart header */}
                                    <div className="cart-block cart-block-header clearfix">
                                        <div>
                                            <span>Room type</span>
                                        </div>
                                        <div className="text-right">
                                            <span>Price</span>
                                        </div>
                                    </div>
                                    {/*cart items*/}
                                    <div className="clearfix">
                                        <div className="cart-block cart-block-item clearfix">
                                            <div className="image">
                                                <a href="room-overview.html"><img src="assets/images/room-4.jpg" alt="" /></a>
                                            </div>
                                            <div className="title">
                                                <div className="h2"><a href="room-overview.html">Luxury appartment</a></div>
                                                <div>
                                                    <strong>Arrival date</strong> <a href="#">(September 22, 2017)</a>
                                                </div>
                                                <div>
                                                    <strong>Guests</strong> 2 Adults, 1 Child
                  </div>
                                                <div>
                                                    <strong>Nights</strong> 7
                  </div>
                                            </div>
                                            <div className="price">
                                                <span className="final h3">$ 1.998</span>
                                                <span className="discount">$ 2.666</span>
                                            </div>
                                            {/*delete-this-item*/}
                                            <span className="icon icon-cross icon-delete" />
                                        </div>
                                    </div>
                                    {/*cart prices */}
                                    <div className="clearfix">
                                        <div className="cart-block cart-block-footer clearfix">
                                            <div>
                                                <strong>Discount 15%</strong>
                                            </div>
                                            <div>
                                                <span>$ 159,00</span>
                                            </div>
                                        </div>
                                        <div className="cart-block cart-block-footer clearfix">
                                            <div>
                                                <strong>TAX</strong>
                                            </div>
                                            <div>
                                                <span>$ 59,00</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/*cart final price */}
                                    <div className="clearfix">
                                        <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                                            <div>
                                                Promo code included!
                </div>
                                            <div>
                                                <div className="h2 title">$ 1259,00</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ========================  Cart navigation ======================== */}
                                    <div className="clearfix">
                                        <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                                            <div>
                                                {/* <a href="reservation-1.html" className="btn btn-clean-dark">Back</a> */}
                                                <NavLink to="/booking-step-two" className="btn btn-clean-dark"><span data-text="Reservation" />Back</NavLink>
                                            </div>
                                            <div>
                                                <a onclick="window.print()" className="btn btn-main">Print <span className="icon icon-printer" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> {/*/container*/}
                    </div> {/*/checkout*/}
                </section>
                {/* ========================  Subscribe ======================== */}
                <section className="subscribe">
                    <div className="container">
                        <div className="box">
                            <h2 className="title">Subscribe</h2>
                            <div className="text">
                                <p>&amp; receive free premium gifts</p>
                            </div>
                            <div className="form-group">
                                <input type="text" defaultValue placeholder="Subscribe" className="form-control" />
                                <button className="btn btn-sm btn-main">Go</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
