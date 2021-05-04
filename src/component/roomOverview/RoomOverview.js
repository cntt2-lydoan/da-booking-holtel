import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { datas } from './../../connectFirebase/firebaseConnect';
import { chuyenDoiURL } from './../../utils/notification';

export default class RoomOverview extends Component {
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
    componentDidMount() {

        datas.ref('room').child(this.props.match.params.id).on("value", res => {
            console.log(res.val())
            this.setState({
                room: res.val()
            });
        })
    }

    getFacility = (arr) => {
        const {room}=this.state;
        console.log(arr);
        let res = arr.map((v, k) => {
            return (
                <div className={`col-md-`+12/(arr.length +1)}>
                    <figure>
                        <figcaption>
                            <span className="fa fa-bed" />
                            <p>{v}</p>
                        </figcaption>
                    </figure>
                </div>
            )
        })
        return (<div className="row">
            {res}
            {<div className={`col-md-`+12/(arr.length +1)}>
                <figure>
                    <figcaption>
                        <span className="fa fa-bed" />
                        <p>{room.capacity} person</p>
                    </figcaption>
                </figure>
            </div>}
        </div>)
    }
    redirectToBooking(room) {
        this.props.history.push(`/booking-step-one/id=/${this.props.match.params.id}/name=/${chuyenDoiURL(room.name)}`)
    }
    getSlide = (arr) => {
        let res = arr.map((val, key) => {
            return (
                <div className="item" key={key}>
                    <img src={val} alt="" />
                </div>
            )
        });
        return res;
    }

    render() {
        const { room } = this.state;
        console.log(room);
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        console.log(room);
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
                                    <Slider {...settings}>
                                        {this.getSlide(room.listImage)}
                                    </Slider>

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
                                                <div className="btn btn-clean" onClick={() => this.redirectToBooking(room)} > Book now
                                                <small>Best Prices Guaranteed</small>
                                                </div>
                                            </div>
                                        </div> {/*/row*/}
                                    </div>{/*/booking-wrapper*/}
                                </div> {/*/container*/}
                            </div> {/*/booking*/}
                            {/* ===  Room overview === */}
                            <div className="room-overview">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-sm-offset-1 col-md-12 col-md-offset-12    ">
                                            {/* === Room aminities === */}
                                            <div className="room-block room-aminities">
                                                <h2 className="title">Room aminities</h2>
                                                    {this.getFacility(room.facility)}
                                                    
                                            </div>
                                            {/* === Room block === */}
                                            <div className="room-block">
                                                <h2 className="title">Room overview</h2>
                                                <p style={{textAlign:'center'}}>
                                                    {room.description}
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

                </div>

            </div>
        )
    }
}
