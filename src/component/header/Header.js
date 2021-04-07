import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    {/* ======================== Navigation ======================== */}
                    <div className="container">
                        {/* === navigation-top === */}
                        <nav className="navigation-top clearfix">
                            {/* navigation-top-left */}
                            <div className="navigation-top-left">
                                <a className="box" href="#">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a className="box" href="#">
                                    <i className="fa fa-twitter" />
                                </a>
                                <a className="box" href="#">
                                    <i className="fa fa-youtube" />
                                </a>
                            </div>
                            {/* navigation-top-right */}
                            <div className="navigation-top-right">
                                <a className="box" href="#">
                                    <i className="icon icon-star" />
                            Special offers
                            </a>
                                <a className="box" href="reservation-1.html">
                                    <i className="icon icon-tag" />
                            Reservations
                            </a>
                                <a className="box" href="#">
                                    <i className="icon icon-phone-handset" />
                            (01) 252-3333
                            </a>
                            </div>
                        </nav>
                        {/* === navigation-main === */}
                        <nav className="navigation-main clearfix">
                            {/* logo */}
                            <div className="logo animated fadeIn">
                                <a href="index.html">
                                    <img className="logo-desktop" src="assets/images/logo.png" alt="Alternate Text" />
                                    <img className="logo-mobile" src="assets/images/logo-mobile.png" alt="Alternate Text" />
                                </a>
                            </div>
                            {/* toggle-menu */}
                            <div className="toggle-menu"><i className="icon icon-menu" /></div>
                            {/* navigation-block */}
                            <div className="navigation-block clearfix">
                                {/* navigation-left */}
                                <ul className="navigation-left">
                                    <li>
                                        {/* <a href="index.html">Home <span className="open-dropdown"><i className="fa fa-angle-down" /></span></a>
                                        <ul>
                                            <li><a href="index.html">Home - Booking intro</a></li>
                                            <li><a href="index-2.html">Home - Booking box</a></li>
                                            <li><a href="index-3.html">Home - Rooms intro</a></li>
                                        </ul> */}
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        {/* <a href="#">AboutUs <span className="open-dropdown"><i className="fa fa-angle-down" /></span></a>
                                        <ul>
                                            <li><a href="about.html">About us</a></li>
                                            <li><a href="rooms-category.html">Rooms category</a></li>
                                            <li><a href="room-overview.html">Room overview</a></li>
                                            <li><a href="404.html">404 Not found</a></li>
                                            <li><a href="shortcodes.html">Shortcodes</a></li>
                                        </ul> */}
                                        <NavLink to="/about-us">About Us</NavLink>
                                    </li>
                                    <li>
                                        {/* <a href="#">Booking <span className="open-dropdown"><i className="fa fa-angle-down" /></span></a>
                                        <ul>
                                            <li><NavLink to="/booking-step-one">Booking step 1</NavLink></li>
                                            <li><NavLink to="/booking-step-two">Booking step 2</NavLink></li>
                                            <li><NavLink to="/booking-step-three">Booking step 3</NavLink></li>
                                        </ul> */}
                                        <NavLink to="/room-category">Room</NavLink>
                                    </li>
                                </ul>
                                {/* navigation-right */}
                                <ul className="navigation-right">
                                    <li>
                                        {/* <a href="facility.html">Facilities</a> */}
                                        <NavLink to="/facilities">Facilities</NavLink>
                                    </li>
                                    <li>
                                        {/* <a href="#">Blog <span className="open-dropdown"><i className="fa fa-angle-down" /></span></a>
                                        <ul>
                                            <li><a href="blog-category.html">Blog category</a></li>
                                            <li><a href="blog-item.html">Blog item</a></li>
                                        </ul> */}

                                    </li>
                                    <li>
                                        {/* <a href="contact.html">Contact</a> */}
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div> {/*/navigation-block*/}
                        </nav>
                    </div> {/*/container*/}
                </header>

            </div>
        )
    }
}
