import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* ========================  Header content ======================== */}
                    <section className="frontpage-slider">
                        <div className="owl-slider owl-slider-header">
                            {/* === slide item === */}
                            <div className="item" style={{ backgroundImage: 'url(assets/images/slide-3.jpg)' }}>
                                <div className="box text-center">
                                    <div className="container">
                                        <h2 className="title animated h1" data-animation="fadeInDown">Fairmont managed!</h2>
                                        <div className="desc animated" data-animation="fadeInUp">The elegant Champagne Bar, the stylish Colina Club.</div>
                                        <div className="desc animated" data-animation="fadeInUp">Guestrooms and luxurious suites</div>
                                        <div className="animated" data-animation="fadeInUp">
                                            <a href="#" className="btn btn-clean">Get insipred</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* === slide item === */}
                            <div className="item" style={{ backgroundImage: 'url(assets/images/slide-2.jpg)' }}>
                                <div className="box text-center">
                                    <div className="container">
                                        <h2 className="title animated h1" data-animation="fadeInDown">
                                            A moment of <br /> <span>pure prestige</span>
                                        </h2>
                                        <div className="desc animated" data-animation="fadeInUp">
                                            Lavish social and business events
            </div>
                                        <div className="desc animated" data-animation="fadeInUp">
                                            and unforgettable weddings.
            </div>
                                        <div className="animated" data-animation="fadeInUp">
                                            <a href="https://themeforest.net/item/colina-hotel-website-template/20977257" className="btn btn-clean">Buy this template</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* === slide item === */}
                            <div className="item" style={{ backgroundImage: 'url(assets/images/slide-1.jpg)' }}>
                                <div className="box text-center">
                                    <div className="container">
                                        <h2 className="title animated h1" data-animation="fadeInDown">
                                            The privacy and <br />
              individuality of a custom
            </h2>
                                        <div className="desc animated" data-animation="fadeInUp">
                                            The Residences have their own dedicated private entrance as well <br />
              as an anonymous "celebrity" entrance, for ultimate privacy.
            </div>
                                        <div className="animated" data-animation="fadeInUp">
                                            <a href="#" className="btn btn-clean">Virtual tour</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> {/*/owl-slider*/}
                    </section>
                    {/* ========================  Rooms ======================== */}
                    <section className="rooms rooms-widget rooms-inner">
                        {/* === rooms header === */}
                        <div className="section-header">
                            <div className="container">
                                <h2 className="title">Rooms accommodation <a href="rooms-category.html" className="btn btn-sm btn-clean">View all</a></h2>
                                <p>Designed as a privileged almost private place where you'll feel right at home</p>
                            </div>
                        </div>
                        {/* === rooms content === */}
                        <div className="container">
                            <div className="owl-rooms owl-theme">
                                {/* === rooms item === */}
                                <div className="item">
                                    <article>
                                        <div className="image">
                                            <img src="assets/images/room-1.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <div className="text">
                                                <h3 className="title"><a href="room-overview.html">Club Room</a></h3>
                                                <p>Single room</p>
                                            </div>
                                            <div className="book">
                                                <div>
                                                    {/* <a href="room-overview.html" className="btn btn-main">Book now</a> */}
                                                    <NavLink to="/booking-step-one" className="btn btn-main">Book now</NavLink>
                                                </div>
                                                <div>
                                                    <span className="price h4">$ 98,00</span>
                                                    <span>per night</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* === rooms item === */}
                                <div className="item">
                                    <article>
                                        <div className="image">
                                            <img src="assets/images/room-2.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <div className="text">
                                                <h3 className="title"><a href="room-overview.html">Classic Room</a></h3>
                                                <p>Double room</p>
                                            </div>
                                            <div className="book">
                                                <div>
                                                    <a href="room-overview.html" className="btn btn-main">Book now</a>
                                                </div>
                                                <div>
                                                    <span className="price h4">$ 129,00</span>
                                                    <span>per night</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* === rooms item === */}
                                <div className="item">
                                    <article>
                                        <div className="image">
                                            <img src="assets/images/room-3.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <div className="text">
                                                <h3 className="title"><a href>Superior Room</a></h3>
                                                <p>Queen size bed</p>
                                            </div>
                                            <div className="book">
                                                <div>
                                                    <a href="room-overview.html" className="btn btn-main">Book now</a>
                                                </div>
                                                <div>
                                                    <span className="price h4">$ 159,00</span>
                                                    <span>per night</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                {/* === rooms item === */}
                                <div className="item">
                                    <article>
                                        <div className="image">
                                            <img src="assets/images/room-4.jpg" alt="" />
                                        </div>
                                        <div className="details">
                                            <div className="text">
                                                <h3 className="title"><a href="room-overview.html">Family Suite</a></h3>
                                                <p>Family room</p>
                                            </div>
                                            <div className="book">
                                                <div>
                                                    <a href="room-overview.html" className="btn btn-main">Book now</a>
                                                </div>
                                                <div>
                                                    <span className="price h4">$ 199,00</span>
                                                    <span>per night</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>{/*/owl-rooms*/}
                        </div> {/*/container*/}
                    </section>
                    {/* ======================== Booking ======================== */}
                    <section className="booking booking-default-theme">
                        <div className="section-header">
                            <div className="container">
                                <h2 className="title">Check Availability</h2>
                            </div>
                        </div>
                        <div className="booking-wrapper">
                            <div className="container">
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
                                        <a href="reservation-1.html" className="btn btn-clean">
                                            Book now
              <small>Best Prices Guaranteed</small>
                                        </a>
                                    </div>
                                </div> {/*/row*/}
                            </div>{/*/booking-wrapper*/}
                        </div> {/*/container*/}
                    </section>
                    {/* ========================  Stretcher widget ======================== */}
                    <section className="stretcher-wrapper">
                        {/* === stretcher header === */}
                        <div className="section-header">
                            <div className="container">
                                <h2 className="title">Facilities <a href="facility.html" className="btn btn-sm btn-clean-dark">Explore more</a></h2>
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
                                                <h2 className="h4 title">
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
                                                <h2 className="h4 title">
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
                                                <h2 className="h4 title">
                                                    Six simple ways to save money on airport car parking
                </h2>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </div> {/*/row*/}
                        </div> {/*/container*/}
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
                    {/* ======================== Image blocks ======================== */}
                    <section className="image-blocks image-blocks-header">
                        <div className="section-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                            <div className="container">
                                <h2 className="title">Apartment residences <a href="rooms-category.html" className="btn btn-sm btn-clean">View all</a></h2>
                                <p>At home while on the road. </p>
                            </div>
                        </div>
                        <div className="container">
                            {/*item block */}
                            <div className="blocks blocks-left">
                                <div className="item">
                                    <div className="text">
                                        {/* === room info === */}
                                        <h2 className="title">Presidential <br />Suite</h2>
                                        <p>
                                            Newly refurnished luxury accommodation with finest quality linen &amp; quality decor.
                                            Air Conditioning Electric Blankets, Ironing Boards, Mini Bar, Flat Screen &amp; Free Inhouse Movies, WiFi
                                            and Housekeeping by request.
            </p>
                                        {/* === room facilities === */}
                                        <div className="room-facilities">
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-guest" /> 4 Persons</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-roomservice" /> Room service</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-king-bed" /> Kingsize bed</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-kitchen" /> All inclusive</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-compas" /> 460 sqft room</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-tv" /> TV</figcaption>
                                            </figure>
                                        </div>
                                        {/* === booking === */}
                                        <div className="book">
                                            <div>
                                                <a href="room-overview.html" className="btn btn-danger btn-lg">Book</a>
                                            </div>
                                            <div>
                                                <span className="price h2">$ 129,00</span>
                                                <span>per night</span>
                                            </div>
                                        </div> {/*/booking*/}
                                    </div>{/*/text*/}
                                </div> {/*/item*/}
                                <div className="image" style={{ backgroundImage: 'url(assets/images/apartment-1.jpg)' }}>
                                    <img src="assets/images/apartment-1.jpg" alt="" />
                                </div>
                            </div>
                            {/*item block */}
                            <div className="blocks blocks-right">
                                <div className="item">
                                    <div className="text">
                                        {/* === room info === */}
                                        <h2 className="title">Luxury <br />appartment</h2>
                                        <p>
                                            The highest level of living with luxury. Residences are distinctively designed and exquisitely appointed,
                                            creating ideal places where memories are made and experiences are genuine.
            </p>
                                        {/* === room facilities === */}
                                        <div className="room-facilities">
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-guest" /> 4 Persons</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-king-bed" /> Kingsize bed</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-roomservice" /> Room service</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-kitchen" /> All inclusive</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-compas" /> 460 sqft room</figcaption>
                                            </figure>
                                            {/*=== icon ===*/}
                                            <figure>
                                                <figcaption><i className="hotelicon hotelicon-tv" /> TV</figcaption>
                                            </figure>
                                        </div>
                                        {/* === booking === */}
                                        <div className="book">
                                            <div>
                                                <a href="room-overview.html" className="btn btn-danger btn-lg">Book</a>
                                            </div>
                                            <div>
                                                <span className="price h2">$ 229,00</span>
                                                <span>per night</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="image" style={{ backgroundImage: 'url(assets/images/apartment-2.jpg)' }}>
                                    <img src="assets/images/apartment-2.jpg" alt="" />
                                </div>
                            </div>
                        </div> {/*/container*/}
                    </section>
                    {/* ======================== Quotes ======================== */}
                    <section className="quotes quotes-slider" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                        <div className="container">
                            {/* === Quotes header === */}
                            <div className="section-header">
                                <h2 className="title">Testimonials</h2>
                                <p>What other think about us</p>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="quote-carousel">
                                        {/* === quoute item === */}
                                        <div className="quote">
                                            <div className="text">
                                                <h4>Jenna Hale</h4>
                                                <p>Ipsum dolore eros dolore <br />dolor dolores sit iriure</p>
                                            </div>
                                            <div className="more">
                                                <div className="rating">
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* === quoute item === */}
                                        <div className="quote">
                                            <div className="text">
                                                <h4>Glen Jordan</h4>
                                                <p>Ipsum dolore eros dolore <br />dolor dolores sit iriure</p>
                                            </div>
                                            <div className="more">
                                                <div className="rating">
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* === quoute item === */}
                                        <div className="quote">
                                            <div className="text">
                                                <h4>Lea Nils</h4>
                                                <p>Ipsum dolore eros dolore <br />dolor dolores sit iriure</p>
                                            </div>
                                            <div className="more">
                                                <div className="rating">
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* === quoute item === */}
                                        <div className="quote">
                                            <div className="text">
                                                <h4>Nora Star</h4>
                                                <p>Ipsum dolore eros dolore <br />dolor dolores sit iriure</p>
                                            </div>
                                            <div className="more">
                                                <div className="rating">
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* === quoute item === */}
                                        <div className="quote">
                                            <div className="text">
                                                <h4>Glen Jordan</h4>
                                                <p>Ipsum dolore eros dolore <br />dolor dolores sit iriure</p>
                                            </div>
                                            <div className="more">
                                                <div className="rating">
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                    <span className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> {/*/quote-carousel*/}
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
