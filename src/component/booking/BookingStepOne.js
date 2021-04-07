import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class BookingStepOne extends Component {
    render() {
        return (
            <div>
  {/* ========================  Checkout ======================== */}
  <section className="page">
    {/* ===  Page header === */}
    <div className="page-header" style={{backgroundImage: 'url(assets/images/header-1.jpg)'}}>
      <div className="container">
        <h2 className="title">Make a reservation</h2>
        <p>Proceed to booking step 2</p>
      </div>
    </div>
    {/* ===  Checkout steps === */}
    <div className="step-wrapper">
      <div className="container">
        <div className="stepper">
          <ul className="row">
            <li className="col-md-4 active">
              {/* <a href="reservation-1.html"><span data-text="Room & rates" /></a> */}
              <NavLink to="/booking-step-one"><span data-text="Room & rates"/></NavLink>
            </li>
            <li className="col-md-4">
              {/* <a href="reservation-2.html"><span data-text="Reservation" /></a> */}
              <NavLink to="/booking-step-two"><span data-text="Reservation" /></NavLink>
            </li>
            <li className="col-md-4">
              {/* <a href="reservation-3.html"><span data-text="Checkout" /></a> */}
              <NavLink to="/booking-step-three" class="btn btn-main" ><span data-text="Checkout" />Checkout</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* ===  Checkout === */}
    <div className="checkout">
      <div className="container">
        <div className="clearfix">
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
                  <p>
                    <strong>Arrival date</strong> <br /> <a href="#">(September 22, 2017)</a>
                  </p>
                  <p>
                    <strong>Guests</strong> <br />  2 Adults, 1 Child
                  </p>
                  <p>
                    <strong>Nights</strong> <br /> 7
                  </p>
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
                  <span className="checkbox">
                    <input type="checkbox" id="couponCodeID" />
                    <label htmlFor="couponCodeID">Promo code</label>
                    <input type="text" className="form-control form-coupon" defaultValue placeholder="Enter your coupon code" />
                  </span>
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
                  <a href="#" className="btn btn-clean-dark">Change</a>
                </div>
                <div>
                  {/* <a href="reservation-2.html" className="btn btn-main">Reservation <span className="icon icon-chevron-right" /></a> */}
                  <NavLink to="/booking-step-two" className="btn btn-main">Reservation <span className="icon icon-chevron-right" /></NavLink>
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
