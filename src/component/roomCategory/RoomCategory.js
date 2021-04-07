import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class RoomCategory extends Component {
    render() {
        return (
            <div>
                <div>
                    <section className="page">
                        {/* ========================  Page header ======================== */}
                        <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                            <div className="container">
                                <h2 className="title">Rooms &amp; Suites</h2>
                                <p>At home while on the road. </p>
                            </div>
                        </div>
                        {/* === rooms content === */}
                        <div className="rooms rooms-category">
                            <div className="container">
                                <div className="row">
                                    {/* === rooms item === */}
                                    <div className="col-sm-6 col-md-6">
                                        <div className="item">
                                            <article>
                                                <div className="image">
                                                    <img src="assets/images/apartment-1.jpg" alt="" />
                                                </div>
                                                <div className="details">
                                                    <div className="text">
                                                    {/* <a href="room-overview.html">Presidential Suite</a> */}
                                                        <h2 className="title"><NavLink to="/room-overview">Presidential Suite</NavLink></h2>
                                                        <p>Family room</p>
                                                    </div>
                                                    <div className="book">
                                                        <div>
                                                            {/* <a href="room-overview.html" className="btn btn-main">Book now</a> */}
                                                            <NavLink to="/booking-step-one" className="btn btn-main">Book now</NavLink>
                                                        </div>
                                                        <div>
                                                            <span className="price h2">€ 299,00</span>
                                                            <span>per night</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    {/* === rooms item === */}
                                    <div className="col-sm-6 col-md-6">
                                        <div className="item">
                                            <article>
                                                <div className="image">
                                                    <img src="assets/images/apartment-2.jpg" alt="" />
                                                </div>
                                                <div className="details">
                                                    <div className="text">
                                                        <h2 className="title"><a href="room-overview.html">Luxury appartment</a></h2>
                                                        <p>Family room</p>
                                                    </div>
                                                    <div className="book">
                                                        <div>
                                                            {/* <a href="room-overview.html" className="btn btn-main">Book now</a> */}
                                                            <NavLink to="/booking-step-one" className="btn btn-main">Book now</NavLink>
                                                        </div>
                                                        <div>
                                                            <span className="price h2">€ 199,00</span>
                                                            <span>per night</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    {/* === rooms item === */}
                                    <div className="col-sm-6 col-md-4">
                                        <div className="item">
                                            <article>
                                                <div className="image">
                                                    <img src="assets/images/room-1.jpg" alt="" />
                                                </div>
                                                <div className="details">
                                                    <div className="text">
                                                        <h2 className="title"><a href="room-overview.html">Club Room</a></h2>
                                                        <p>Single room</p>
                                                    </div>
                                                    <div className="book">
                                                        <div>
                                                            {/* <a href="room-overview.html" className="btn btn-main">Book now</a> */}
                                                            <NavLink to="/booking-step-one" className="btn btn-main">Book now</NavLink>
                                                        </div>
                                                        <div>
                                                            <span className="price h2">€ 98,00</span>
                                                            <span>per night</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    {/* === rooms item === */}
                                    <div className="col-sm-6 col-md-4">
                                        <div className="item">
                                            <article>
                                                <div className="image">
                                                    <img src="assets/images/room-2.jpg" alt="" />
                                                </div>
                                                <div className="details">
                                                    <div className="text">
                                                        <h2 className="title"><a href="room-overview.html">Classic Room</a></h2>
                                                        <p>Double room</p>
                                                    </div>
                                                    <div className="book">
                                                        <div>
                                                            {/* <a href="room-overview.html" className="btn btn-main">Book now</a> */}
                                                            <NavLink to="/booking-step-one" className="btn btn-main">Book now</NavLink>
                                                        </div>
                                                        <div>
                                                            <span className="price h2">€ 129,00</span>
                                                            <span>per night</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    {/* === rooms item === */}
                                    <div className="col-sm-6 col-md-4">
                                        <div className="item">
                                            <article>
                                                <div className="image">
                                                    <img src="assets/images/room-3.jpg" alt="" />
                                                </div>
                                                <div className="details">
                                                    <div className="text">
                                                        <h2 className="title"><a href="room-overview.html">Superior Room</a></h2>
                                                        <p>Queen size bed</p>
                                                    </div>
                                                    <div className="book">
                                                        <div>
                                                            {/* <a href="room-overview.html" className="btn btn-main">Book now</a> */}
                                                            <NavLink to="/booking-step-one" className="btn btn-main">Book now</NavLink>
                                                        </div>
                                                        <div>
                                                            <span className="price h2">€ 159,00</span>
                                                            <span>per night</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div> {/*/container*/}
                        </div>
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
