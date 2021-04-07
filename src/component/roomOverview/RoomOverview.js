import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class RoomOverview extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* ========================  Room ======================== */}
                    <section className="page">
                        {/* ===  Page header === */}
                        <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                            <div className="container">
                                <h2 className="title">Luxury appartment</h2>
                                <p>Available from 199€ per night</p>
                            </div>
                        </div>
                        <div className="room">
                            {/* === Room gallery === */}
                            <div className="room-gallery">
                                <div className="container">
                                    <div className="owl-slider owl-theme owl-slider-gallery">
                                        {/* === slide item === */}
                                        <div className="item" style={{ backgroundImage: 'url(assets/images/room-4.jpg)' }}>
                                            <img src="assets/images/room-4.jpg" alt="" />
                                        </div>
                                        {/* === slide item === */}
                                        <div className="item" style={{ backgroundImage: 'url(assets/images/room-2.jpg)' }}>
                                            <img src="assets/images/room-2.jpg" alt="" />
                                        </div>
                                        {/* === slide item === */}
                                        <div className="item" style={{ backgroundImage: 'url(assets/images/room-1.jpg)' }}>
                                            <img src="assets/images/room-1.jpg" alt="" />
                                        </div>
                                    </div> {/*/owl-slider*/}
                                </div>
                            </div> {/*/room-gallery*/}
                            {/* === Booking === */}
                            <div className="booking booking-inner">
                                <div className="container">
                                    <div className="booking-wrapper">
                                        <div className="row">
                                            {/*=== date arrival ===*/}
                                            <div className="col-xs-4 col-sm-3">
                                                <div className="date" id="dateArrival" data-text="Arrival">
                                                    <input className="datepicker" readOnly="readonly" />
                                                    <div className="date-value" />
                                                </div>
                                            </div>
                                            {/*=== date departure ===*/}
                                            <div className="col-xs-4 col-sm-3">
                                                <div className="date" id="dateDeparture" data-text="Departure">
                                                    <input className="datepicker" readOnly="readonly" />
                                                    <div className="date-value" />
                                                </div>
                                            </div>
                                            {/*=== guests ===*/}
                                            <div className="col-xs-4 col-sm-2">
                                                <div className="guests" data-text="Guests">
                                                    <div className="result">
                                                        <input className="qty-result" type="text" defaultValue={2} id="qty-result" readOnly="readonly" />
                                                        <div className="qty-result-text date-value" id="qty-result-text" />
                                                    </div>
                                                    {/*=== guests list ===*/}
                                                    <ul className="guest-list">
                                                        <li className="header">
                                                            Please choose number of guests <span className="qty-apply"><i className="icon icon-cross" /></span>
                                                        </li>
                                                        {/*=== adults ===*/}
                                                        <li className="clearfix">
                                                            {/*=== Adults value ===*/}
                                                            <div>
                                                                <input className="qty-amount" defaultValue={2} type="text" id="ticket-adult" data-value={2} readOnly="readonly" />
                                                            </div>
                                                            <div>
                                                                <span>Adults <small>16+ years</small></span>
                                                            </div>
                                                            {/*=== Add/remove quantity buttons ===*/}
                                                            <div>
                                                                <input className="qty-btn qty-minus" defaultValue="-" type="button" data-field="ticket-adult" />
                                                                <input className="qty-btn qty-plus" defaultValue="+" type="button" data-field="ticket-adult" />
                                                            </div>
                                                        </li>
                                                        {/*=== chilrens ===*/}
                                                        <li className="clearfix">
                                                            {/*=== Adults value ===*/}
                                                            <div>
                                                                <input className="qty-amount" defaultValue={0} type="text" id="ticket-children" data-value={0} readOnly="readonly" />
                                                            </div>
                                                            {/*=== Label ===*/}
                                                            <div>
                                                                <span>Children <small>2-11 years</small></span>
                                                            </div>
                                                            {/*=== Add/remove quantity buttons ===*/}
                                                            <div>
                                                                <input className="qty-btn qty-minus" defaultValue="-" type="button" data-field="ticket-children" />
                                                                <input className="qty-btn qty-plus" defaultValue="+" type="button" data-field="ticket-children" />
                                                            </div>
                                                        </li>
                                                        {/*=== Infants ===*/}
                                                        <li className="clearfix">
                                                            {/*=== Adults value ===*/}
                                                            <div>
                                                                <input className="qty-amount" defaultValue={0} type="text" id="ticket-infants" data-value={0} readOnly="readonly" />
                                                            </div>
                                                            {/*=== Label ===*/}
                                                            <div>
                                                                <span>Infants <small>Under 2 years</small></span>
                                                            </div>
                                                            {/*=== Add/remove quantity buttons ===*/}
                                                            <div>
                                                                <input className="qty-btn qty-minus" defaultValue="-" type="button" data-field="ticket-infants" />
                                                                <input className="qty-btn qty-plus" defaultValue="+" type="button" data-field="ticket-infants" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/*=== button ===*/}
                                            <div className="col-xs-12 col-sm-4">
                                                {/* <a href="reservation-1.html" className="btn btn-clean">
                                                    Book now
                  <small>Best Prices Guaranteed</small>
                                                </a> */}
                                                <NavLink to="/booking-step-one" className="btn btn-clean" > Book now
                                                <small>Best Prices Guaranteed</small>
                                                </NavLink>
                                            </div>
                                        </div> {/*/row*/}
                                    </div>{/*/booking-wrapper*/}
                                </div> {/*/container*/}
                            </div> {/*/booking*/}
                            {/* ===  Room overview === */}
                            <div className="room-overview">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                            {/* === Room aminities === */}
                                            <div className="room-block room-aminities">
                                                <h2 className="title">Room aminities</h2>
                                                <div className="row">
                                                    {/*=== item ===*/}
                                                    <div className="col-xs-6 col-sm-2">
                                                        <figure>
                                                            <figcaption>
                                                                <span className="hotelicon hotelicon-air-condition" />
                                                                <p>Aircondition</p>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    {/*=== item ===*/}
                                                    <div className="col-xs-6 col-sm-2">
                                                        <figure>
                                                            <figcaption>
                                                                <span className="hotelicon hotelicon-king-bed" />
                                                                <p>1 Kingsize bed</p>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    {/*=== item ===*/}
                                                    <div className="col-xs-6 col-sm-2">
                                                        <figure>
                                                            <figcaption>
                                                                <span className="hotelicon hotelicon-guest" />
                                                                <p>2 People</p>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    {/*=== item ===*/}
                                                    <div className="col-xs-6 col-sm-2">
                                                        <figure>
                                                            <figcaption>
                                                                <span className="hotelicon hotelicon-wifi" />
                                                                <p>Internet</p>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    {/*=== item ===*/}
                                                    <div className="col-xs-6 col-sm-2">
                                                        <figure>
                                                            <figcaption>
                                                                <span className="hotelicon hotelicon-washer" />
                                                                <p>Washer</p>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                    {/*=== item ===*/}
                                                    <div className="col-xs-6 col-sm-2">
                                                        <figure>
                                                            <figcaption>
                                                                <span className="hotelicon hotelicon-roomservice" />
                                                                <p>Room service</p>
                                                            </figcaption>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* === Room block === */}
                                            <div className="room-block">
                                                <h2 className="title">Room overview</h2>
                                                <p>
                                                    The Superior Rooms pay tribute to fashion and craftsmanship. The rooms are approximately 19m2 with views of Rue d'Alger and Jardin des Tuileries.
                                                    The selection and pairing of materials has been carefully chosen to give you a cool experience. The super soft bed topper is simply extravagant!
                                                    Every room is different but the colour palette uses unique and expertly matched hues.
                                                    An openwork brass screen separates the bathroom from the bedroom. This original feature helps make every room your very own cosy and peaceful haven.
                                                    Bathrobes, slippers and SOTHYS toiletries are provided in the bathroom to pamper you.
                </p>
                                            </div>
                                            {/* === Room block === */}
                                            <div className="room-block">
                                                <h2 className="title">House rules</h2>
                                                {/* === box === */}
                                                <div className="box">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p><strong>Check-In</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>14:00 - 22:00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* === box === */}
                                                <div className="box">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p><strong>Check-out</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>14:00 - 22:00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* === box === */}
                                                <div className="box">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p><strong>Luggage storage</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>14:00 - 22:00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* === box === */}
                                                <div className="box">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p><strong>Cancellation/prepayment</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>
                                                                Cancellation and prepayment policies vary according to room type. Please enter the dates of your stay and check the conditions of your required room.
                      </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* === box === */}
                                                <div className="box">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p><strong>Children and extra beds</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>All children are welcome.</p>
                                                            <p>One child under 6 years is charged EUR 50 per night when using existing beds.</p>
                                                            <p>There is no capacity for extra beds in the room.</p>
                                                            <p>Supplements are not calculated automatically in the total costs and will have to be paid for separately during your stay.                                      </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* === box === */}
                                                <div className="box">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p><strong>Pets</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Pets are not allowed.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* === box === */}
                                                <div className="box">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <p><strong>Additional info</strong></p>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Please note that the restaurant is closed each Sunday.</p>
                                                            <p>The restaurant will also be closed during Christmas (25-26 December).</p>
                                                            <p>Please note that parking spaces cannot be reserved or guaranteed.</p>
                                                            <p>
                                                                For a group booking more than 5 rooms up to 4 weeks prior to arrival cancellation is
                                                                100% free of charge, within 2 until 4 weeks 50% free of charge, and within 2 weeks the
                                                                property will charge you in full. Please note that Ozo hotel always charges city tax
                                                                prior to your arrival with the non-refundable rate or group booking.
                      </p>
                                                            <p>
                                                                Please note that the credit card that is used for the booking needs to be present at check-in.
                                                                When this credit card is not available please bring a photocopy of the credit card with
                                                                authorization of the owner.
                      </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> {/*/col-sm-10*/}
                                    </div> {/*/row*/}
                                </div> {/*/container*/}
                            </div> {/*/room-overview*/}
                        </div>
                    </section>
                    {/* ========================  Blog ======================== */}
                    <section className="blog blog-widget">
                        {/* === stretcher header === */}
                        <div className="section-header">
                            <div className="container">
                                <h2 className="title">Latest news <a href="blog-category.html" className="btn btn-sm btn-clean-dark">Explore more</a></h2>
                                <p>
                                    Events, place to go, tour info &amp; more
        </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {/* === article item === */}
                                <div className="col-sm-4">
                                    <a href="blog-item.html">
                                        <article>
                                            <div className="image">
                                                <img src="assets/images/activity-3.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <div className="time">
                                                    <span>22</span>
                                                    <span>05</span>
                                                    <span>2014</span>
                                                </div>
                                                <h2 className="h5 title">
                                                    What to do when holidays go wrong
                </h2>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                {/* === article item === */}
                                <div className="col-sm-4">
                                    <a href="blog-item.html">
                                        <article>
                                            <div className="image">
                                                <img src="assets/images/activity-4.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <div className="time">
                                                    <span>22</span>
                                                    <span>05</span>
                                                    <span>2014</span>
                                                </div>
                                                <h2 className="h5 title">
                                                    Everything you need to know about vaccinations
                </h2>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                                {/* === article item === */}
                                <div className="col-sm-4">
                                    <a href="blog-item.html">
                                        <article>
                                            <div className="image">
                                                <img src="assets/images/activity-5.jpg" alt="" />
                                            </div>
                                            <div className="text">
                                                <div className="time">
                                                    <span>22</span>
                                                    <span>05</span>
                                                    <span>2014</span>
                                                </div>
                                                <h2 className="h5 title">
                                                    Six simple ways to save money on airport car parking
                </h2>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </div> {/*/row*/}
                        </div> {/*/container*/}
                    </section>
                    {/* ========================  Stretcher widget ======================== */}
                    <section className="stretcher-wrapper">
                        {/* === stretcher header === */}
                        <div className="section-header">
                            <div className="container">
                                <h2 className="title">Resort facilities <a href="facility.html" className="btn btn-sm btn-clean-dark">Explore more</a></h2>
                                <p>
                                    With the best luxury spa, salon and fitness experiences
        </p>
                            </div>
                        </div>
                        {/* === stretcher === */}
                        <ul className="stretcher">
                            {/* === stretcher item === */}
                            <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/services-1.jpg)' }}>
                                {/*logo-item*/}
                                <div className="stretcher-logo">
                                    <div className="text">
                                        <span className="text-intro h4">Spa center</span>
                                    </div>
                                </div>
                                {/*main text*/}
                                <figure>
                                    <h4>Spa center</h4>
                                    <figcaption>Unparalleled devotion to luxury</figcaption>
                                </figure>
                                {/*anchor*/}
                                <a href="facility.html">Anchor link</a>
                            </li>
                            {/* === stretcher item === */}
                            <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/services-2.jpg)' }}>
                                {/*logo-item*/}
                                <div className="stretcher-logo">
                                    <div className="text">
                                        <span className="text-intro h4">Gym</span>
                                    </div>
                                </div>
                                {/*main text*/}
                                <figure>
                                    <h4>Gym</h4>
                                    <figcaption>Care about results</figcaption>
                                </figure>
                                {/*anchor*/}
                                <a href="facility.html">Anchor link</a>
                            </li>
                            {/* === stretcher item === */}
                            <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/services-3.jpg)' }}>
                                {/*logo-item*/}
                                <div className="stretcher-logo">
                                    <div className="text">
                                        <span className="text-intro h4">Fitness</span>
                                    </div>
                                </div>
                                <figure>
                                    <h4>Fitness</h4>
                                    <figcaption>Your daily activities</figcaption>
                                </figure>
                                {/*anchor*/}
                                <a href="facility.html">Anchor link</a>
                            </li>
                            {/* === stretcher item === */}
                            <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/services-4.jpg)' }}>
                                {/*logo-item*/}
                                <div className="stretcher-logo">
                                    <div className="text">
                                        <span className="text-intro h4">Beauty salon</span>
                                    </div>
                                </div>
                                {/*main text*/}
                                <figure>
                                    <h4>Beauty salon</h4>
                                    <figcaption>Hair salons and spas</figcaption>
                                </figure>
                                {/*anchor*/}
                                <a href="facility.html">Anchor link</a>
                            </li>
                            {/* === stretcher item more === */}
                            <li className="stretcher-item more">
                                <div className="more-icon">
                                    <span data-title-show="Show more" data-title-hide="+" />
                                </div>
                                <a href="facility.html">Anchor link</a>
                            </li>
                        </ul>
                    </section>
                    {/* ========================  Cards ======================== */}
                    <section className="cards">
                        {/* === cards header === */}
                        <div className="section-header">
                            <div className="container">
                                <h2 className="title">Near by <a href="#" className="btn btn-sm btn-clean-dark">View all</a></h2>
                                <p>Here's a selection of ionic sites related to art, fashion and design.</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                {/* === item === */}
                                <div className="col-xs-12 col-md-8">
                                    <figure>
                                        <figcaption style={{ backgroundImage: 'url(assets/images/activity-1.jpg)' }}>
                                            <img src="assets/images/activity-1.jpg" alt="" />
                                        </figcaption>
                                        <a href="#" className="btn btn-clean" onclick>Museums</a>
                                    </figure>
                                </div>
                                {/* === item === */}
                                <div className="col-xs-6 col-md-4">
                                    <figure>
                                        <figcaption style={{ backgroundImage: 'url(assets/images/activity-2.jpg)' }}>
                                            <img src="assets/images/activity-2.jpg" alt="" />
                                        </figcaption>
                                        <a href="#" className="btn btn-clean">Nightlife</a>
                                    </figure>
                                </div>
                                {/* === item === */}
                                <div className="col-xs-6 col-md-4">
                                    <figure>
                                        <figcaption style={{ backgroundImage: 'url(assets/images/activity-3.jpg)' }}>
                                            <img src="assets/images/activity-3.jpg" alt="" />
                                        </figcaption>
                                        <a href="#" className="btn btn-clean">Food &amp; drink</a>
                                    </figure>
                                </div>
                                {/* === item === */}
                                <div className="col-xs-6 col-md-4">
                                    <figure>
                                        <figcaption style={{ backgroundImage: 'url(assets/images/activity-4.jpg)' }}>
                                            <img src="assets/images/activity-4.jpg" alt="" />
                                        </figcaption>
                                        <a href="#" className="btn btn-clean">Shopping</a>
                                    </figure>
                                </div>
                                {/* === item === */}
                                <div className="col-xs-6 col-md-4">
                                    <figure>
                                        <figcaption style={{ backgroundImage: 'url(assets/images/activity-5.jpg)' }}>
                                            <img src="assets/images/activity-5.jpg" alt="" />
                                        </figcaption>
                                        <a href="#" className="btn btn-clean">The City</a>
                                    </figure>
                                </div>
                            </div> {/*/row*/}
                        </div> {/*/container*/}
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

            </div>
        )
    }
}
