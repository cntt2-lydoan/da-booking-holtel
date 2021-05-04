import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import { chuyenDoiURL } from '../../utils/notification';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayData: [],
            arrayWishlist: []
        }
    }
    
    componentDidMount() {
        let objects = [];

        axios.get('https://booking-hotel-5cb23-default-rtdb.firebaseio.com/room.json')
            .then((response) => {
                if (response.data !== null) {
                    const data = response.data;
                    // console.log(data);

                    objects = Object.values(response.data);
                    const keys = Object.keys(data);

                    objects.map((values, key) => {
                        values.id = keys[key];
                    });
                    // console.log(objects);
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
                    <div className="col-3">
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
                                            <NavLink to={"/booking-step-one/id=/"+value.id+"/name=/"+chuyenDoiURL(value.name)} className="btn btn-main">Book now</NavLink>
                                          
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
        var settings = {
            arrow: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        var settings1 = {
            arrow: true,
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const { arrayData } = this.state;
        
        return (
            <div>
                <div>
                    {/* ========================  Header content ======================== */}
                    <section className="frontpage-slider" style={{position: 'relative'}}>
                    <div className="box text-center"  style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: '1000'}}>
                                    <div className="container" style={{color: 'white'}}>
                                        <h2 className="title animated h1" data-animation="fadeInDown" style={{color: 'white'}}>Fairmont managed!</h2>
                                        <div className="desc animated" data-animation="fadeInUp">The elegant Champagne Bar, the stylish Colina Club.</div>
                                        <div className="desc animated" data-animation="fadeInUp">Guestrooms and luxurious suites</div>
                                    </div>
                                </div>
                        <Slider  {...settings}>
                            <div className="item" >
                                <img src="assets/images/slide-3.jpg" className="img-hover"  alt=""/>
                            </div>

                            <div className="item" >
                            <img src="assets/images/slide-2.jpg" className="img-hover"  alt=""/>
                            </div>

                            <div className="item" >
                            <img src="assets/images/slide-1.jpg" className="img-hover"  alt=""/>
                            </div>
                        </Slider>
                    </section>
                    <div className="container">
                            <Slider  {...settings1}>
                                    {this.renderRoom(arrayData)}
                            </Slider>
                        </div> {/*/container*/}
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
