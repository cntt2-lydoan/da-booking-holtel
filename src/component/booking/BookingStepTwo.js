import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class BookingStepTwo extends Component {
    render() {
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
                                    <li className="col-md-4 active">
                                        <a href="reservation-1.html"><span data-text="Room & rates" /></a>
                                    </li>
                                    <li className="col-md-4 active">
                                        <a href="reservation-2.html"><span data-text="Reservation" /></a>
                                    </li>
                                    <li className="col-md-4">
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
                                                {/* === login-wrapper === */}
                                                <div className="login-wrapper">
                                                    <div className="white-block">
                                                        {/*signin*/}
                                                        <div className="login-block login-block-signin">
                                                            <div className="h4">Sign in <a href="javascript:void(0);" className="btn btn-main btn-xs btn-register pull-right">create an account</a></div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <input type="text" defaultValue className="form-control" placeholder="User ID" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <input type="password" defaultValue className="form-control" placeholder="Password" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-6">
                                                                    <span className="checkbox">
                                                                        <input type="checkbox" id="checkBoxId3" />
                                                                        <label htmlFor="checkBoxId3">Remember me</label>
                                                                    </span>
                                                                </div>
                                                                <div className="col-xs-6 text-right">
                                                                    <a href="#" className="btn btn-main">Login</a>
                                                                </div>
                                                            </div>
                                                        </div> {/*/signin*/}
                                                        {/*signup*/}
                                                        <div className="login-block login-block-signup">
                                                            <div className="h4">Register now <a href="javascript:void(0);" className="btn btn-main btn-xs btn-login pull-right">Log in</a></div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" defaultValue className="form-control" placeholder="First name: *" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" defaultValue className="form-control" placeholder="Last name: *" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <input type="text" defaultValue className="form-control" placeholder="Company name:" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <input type="text" defaultValue className="form-control" placeholder="Zip code: *" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div className="form-group">
                                                                        <input type="text" defaultValue className="form-control" placeholder="City: *" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" defaultValue className="form-control" placeholder="Email: *" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" defaultValue className="form-control" placeholder="Phone: *" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <hr />
                                                                    <span className="checkbox">
                                                                        <input type="checkbox" id="checkBoxId1" />
                                                                        <label htmlFor="checkBoxId1">I have read and accepted the <a href="#">terms</a>, as well as read and understood our terms of <a href="#">business contidions</a></label>
                                                                    </span>
                                                                    <span className="checkbox">
                                                                        <input type="checkbox" id="checkBoxId2" />
                                                                        <label htmlFor="checkBoxId2">Subscribe to exciting newsletters and great tips</label>
                                                                    </span>
                                                                    <hr />
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <a href="#" className="btn btn-main btn-block">Create account</a>
                                                                </div>
                                                            </div>
                                                        </div> {/*/signup*/}
                                                    </div>
                                                </div> {/*/login-wrapper*/}
                                            </div> {/*/col-md-6*/}
                                            {/* === right content === */}
                                            <div className="col-md-6">
                                                <div className="white-block">
                                                    <div className="h4">Choose payment</div>
                                                    <hr />
                                                    <span className="checkbox">
                                                        <input type="radio" id="paymentCart" name="paymentOption" />
                                                        <label htmlFor="paymentCart">
                                                            <strong>Pay via credit cart</strong> <br />
                                                            <small>(MasterCard, Maestro, Visa, Visa Electron, JCB and American Express)</small>
                                                        </label>
                                                    </span>
                                                    <span className="checkbox">
                                                        <input type="radio" id="paymentPayPal" name="paymentOption" />
                                                        <label htmlFor="paymentPayPal">
                                                            <strong>PayPal</strong> <br />
                                                            <small>Purchase with your fingertips. Look for us the next time you're paying from a mobile app, and checkout faster on thousands of mobile websites.</small>
                                                        </label>
                                                    </span>
                                                    <div className="payment payment-paypal">
                                                        <p><strong>Note:</strong></p>
                                                        <p>Please allow three working days for the payment confirmation to reflect in your <a href="#">online account</a>. Once your payment is confirmed, we will generate your e-invoice, which you can view/print from your account or email.</p>
                                                    </div>
                                                    <div className="payment payment-cart">
                                                        <div className="row">
                                                            <div className="col-xs-12">
                                                                <div className="payment-header">
                                                                    <div>
                                                                        <strong>Payment details</strong>
                                                                    </div>
                                                                    <div>
                                                                        <i className="fa fa-cc-visa" />
                                                                        <i className="fa fa-cc-mastercard" />
                                                                        <i className="fa fa-cc-discover" />
                                                                        <i className="fa fa-cc-amex" />
                                                                        <i className="fa fa-cc-diners-club" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div className="form-group">
                                                                    <input className="form-control" type="tel" defaultValue name="cardNumber" placeholder="Card Number" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-8">
                                                                <div className="form-group">
                                                                    <input className="form-control" type="tel" defaultValue name="cardExpiry" placeholder="MM / YY" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-4">
                                                                <div className="form-group">
                                                                    <input className="form-control" type="tel" defaultValue name="cardCVC" placeholder="CVC" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12">
                                                                <div className="form-group">
                                                                    <input className="btn btn-main btn-block" type="submit" defaultValue="Submit" name="cardNumber" />
                                                                </div>
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
                                                <NavLink to="/booking-step-one" className="btn btn-clean-dark">Back</NavLink>
                                            </div>
                                            <div>
                                                {/* <a href="reservation-3.html" className="btn btn-main">Checkout <span className="icon icon-chevron-right" /></a> */}
                                                <NavLink to="/booking-step-three">Checkout <span className="icon icon-chevron-right" /></NavLink>
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
