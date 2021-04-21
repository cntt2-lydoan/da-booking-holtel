import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { chuyenDoiURL } from './../../utils/notification';

export default class RoomCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayData: []
        }
    }
    componentDidMount() {
        let objects = [];

        axios.get('https://booking-hotel-5cb23-default-rtdb.firebaseio.com/room.json')
            .then((response) => {
                if (response.data !== null) {
                    const data = response.data;
                    console.log(data);

                    objects = Object.values(response.data);
                    const keys = Object.keys(data);

                    objects.map((values, key) => {
                        values.id = keys[key];
                    });
                    console.log(objects);
                    this.setState({
                        arrayData: objects
                    });
                }

            });

    }
    redirectToDetails(value) {
        this.props.history.push(`/room-details/id=/${value.id}/name=/${chuyenDoiURL(value.name)}`)
    }

    renderRoom = (array) => {
        let res = array.map((value, key) => {
            return (
                <div className={key < 2 ? "col-sm-6 col-md-6" : "col-sm-6 col-md-4"}>
                    <div className="item">
                        <article>
                            <div className="image" onClick={() => this.redirectToDetails(value)}>
                                <img src={value.listImage[0]} alt="" />
                            </div>
                            <div className="details">
                                <div className="text">
                                    {/* <a href="room-overview.html">Presidential Suite</a> */}
                                    <h2 className="title"><NavLink to="/room-overview" onClick={() => this.redirectToDetails(value)}>{value.name}</NavLink></h2>
                                    <p>{value.categoryRoom}</p>
                                </div>
                                <div className="book">
                                    <div>
                                        {/* <a href="room-overview.html" className="btn btn-main">Book now</a> */}
                                        <NavLink to="/booking-step-one" className="btn btn-main">Book now</NavLink>
                                    </div>
                                    <div>
                                        <span className="price h2">{value.unit} {value.price}</span>
                                        <span>per night</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            )
        })
        return res;
    }

    render() {
        console.log(this.state.arrayData);
        const { arrayData } = this.state;
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
                                    {this.renderRoom(arrayData)}
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
