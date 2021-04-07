import React, { Component } from 'react'

export default class BlogCategory extends Component {
    render() {
        return (
            <div>
                {/* ========================  Blog ======================== */}
                <section className="page">
                    {/* ===  Page header === */}
                    <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                        <div className="container">
                            <h2 className="title">Blog</h2>
                            <p>Events &amp; culture</p>
                        </div>
                    </div>
                    {/* ===  Blog === */}
                    <div className="blog blog-category">
                        <div className="container">
                            <div className="row">
                                {/* === blog-content === */}
                                <div className="col-sm-8 col-md-9">
                                    <div className="row">
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-6">
                                            <a href="blog-item.html">
                                                <article>
                                                    <div className="image">
                                                        <img src="assets/images/activity-1.jpg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="time">
                                                            <span>22</span>
                                                            <span>05</span>
                                                            <span>2014</span>
                                                        </div>
                                                        <h2 className="h4 title">
                                                            The only guide to travel insurance you'll ever need
                      </h2>
                                                    </div>
                                                </article>
                                            </a>
                                        </div>
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-6">
                                            <a href="blog-item.html">
                                                <article>
                                                    <div className="image">
                                                        <img src="assets/images/activity-2.jpg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="time">
                                                            <span>22</span>
                                                            <span>05</span>
                                                            <span>2014</span>
                                                        </div>
                                                        <h2 className="h4 title">
                                                            10 simple ways to survive the airport experience
                      </h2>
                                                    </div>
                                                </article>
                                            </a>
                                        </div>
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-4">
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
                                        <div className="col-sm-6 col-md-4">
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
                                        <div className="col-sm-6 col-md-4">
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
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-4">
                                            <a href="blog-item.html">
                                                <article>
                                                    <div className="image">
                                                        <img src="assets/images/event-1.jpg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="time">
                                                            <span>22</span>
                                                            <span>05</span>
                                                            <span>2014</span>
                                                        </div>
                                                        <h2 className="h4 title">
                                                            10 tips for avoiding holiday villa fraud
                      </h2>
                                                    </div>
                                                </article>
                                            </a>
                                        </div>
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-4">
                                            <a href="blog-item.html">
                                                <article>
                                                    <div className="image">
                                                        <img src="assets/images/event-2.jpg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="time">
                                                            <span>22</span>
                                                            <span>05</span>
                                                            <span>2014</span>
                                                        </div>
                                                        <h2 className="h4 title">
                                                            How to claim compensation for lost, delayed or damaged luggage
                      </h2>
                                                    </div>
                                                </article>
                                            </a>
                                        </div>
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-4">
                                            <a href="blog-item.html">
                                                <article>
                                                    <div className="image">
                                                        <img src="assets/images/services-1.jpg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="time">
                                                            <span>22</span>
                                                            <span>05</span>
                                                            <span>2014</span>
                                                        </div>
                                                        <h2 className="h4 title">
                                                            The best boutique hotels in Europe's coolest city
                      </h2>
                                                    </div>
                                                </article>
                                            </a>
                                        </div>
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-4">
                                            <a href="blog-item.html">
                                                <article>
                                                    <div className="image">
                                                        <img src="assets/images/services-2.jpg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="time">
                                                            <span>22</span>
                                                            <span>05</span>
                                                            <span>2014</span>
                                                        </div>
                                                        <h2 className="h4 title">
                                                            How to have the perfect holiday in our hotel
                      </h2>
                                                    </div>
                                                </article>
                                            </a>
                                        </div>
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-4">
                                            <a href="blog-item.html">
                                                <article>
                                                    <div className="image">
                                                        <img src="assets/images/services-3.jpg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="time">
                                                            <span>22</span>
                                                            <span>05</span>
                                                            <span>2014</span>
                                                        </div>
                                                        <h2 className="h4 title">
                                                            The five best destinations for a family holiday in October
                      </h2>
                                                    </div>
                                                </article>
                                            </a>
                                        </div>
                                        {/* === article item === */}
                                        <div className="col-sm-6 col-md-4">
                                            <a href="blog-item.html">
                                                <article>
                                                    <div className="image">
                                                        <img src="assets/images/services-4.jpg" alt="" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="time">
                                                            <span>22</span>
                                                            <span>05</span>
                                                            <span>2014</span>
                                                        </div>
                                                        <h2 className="h4 title">
                                                            What is a babymoon – and should I have one?
                      </h2>
                                                    </div>
                                                </article>
                                            </a>
                                        </div>
                                    </div>
                                    {/* === pagination === */}
                                    <div className="pagination-wrapper">
                                        <ul className="pagination">
                                            <li>
                                                <a href="#" aria-label="Previous">
                                                    <span aria-hidden="true">«</span>
                                                </a>
                                            </li>
                                            <li className="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li>
                                                <a href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> {/*/pagination*/}
                                </div>
                                {/* === blog-menu === */}
                                <div className="col-sm-4 col-md-3">
                                    <aside>
                                        <div className="box box-search">
                                            <input type="text" defaultValue className="form-control" placeholder="Search the blog" />
                                            <button className="btn btn-main btn-sm">Go!</button>
                                        </div>
                                        <div className="booking booking-default-theme">
                                            <div className="booking-wrapper">
                                                <h5>Check availability</h5>
                                                <div className="row">
                                                    {/*=== date arrival ===*/}
                                                    <div className="col-xs-6 col-sm-6">
                                                        <div className="date" id="dateArrival" data-text="Arrival">
                                                            <input className="datepicker" readOnly="readonly" />
                                                            <div className="date-value" />
                                                        </div>
                                                    </div>
                                                    {/*=== date departure ===*/}
                                                    <div className="col-xs-6 col-sm-6">
                                                        <div className="date" id="dateDeparture" data-text="Departure">
                                                            <input className="datepicker" readOnly="readonly" />
                                                            <div className="date-value" />
                                                        </div>
                                                    </div>
                                                    {/*=== button ===*/}
                                                    <div className="col-xs-12 col-sm-12">
                                                        <a href="reservation-1.html" className="btn btn-clean">
                                                            Book now
                        <small>Best Prices Guaranteed</small>
                                                        </a>
                                                    </div>
                                                </div> {/*/row*/}
                                            </div>{/*/booking-wrapper*/}
                                        </div>
                                        <div className="box box-categories">
                                            <h4 className="title">Blog categories</h4>
                                            <ul>
                                                <li><a href="#">City guide</a></li>
                                                <li className="active"><a href="#">Shopping</a></li>
                                                <li><a href="#">Adventures</a></li>
                                                <li><a href="#">Ultimate Itineraries</a></li>
                                                <li><a href="#">Last minute deals</a></li>
                                            </ul>
                                        </div>
                                        <div className="box box-posts">
                                            <h4 className="title">Popular posts</h4>
                                            <ul>
                                                <li>
                                                    <a href="blog-item.html">
                                                        <span className="date">
                                                            <span>Jun</span>
                                                            <span>22</span>
                                                        </span>
                                                        <span className="text">What to do when holidays go wrong</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-item.html">
                                                        <span className="date">
                                                            <span>Jun</span>
                                                            <span>19</span>
                                                        </span>
                                                        <span className="text">How to claim compensation for lost or damaged luggage</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-item.html">
                                                        <span className="date">
                                                            <span>Jun</span>
                                                            <span>18</span>
                                                        </span>
                                                        <span className="text">The best boutique hotels in Europe's coolest city</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-item.html">
                                                        <span className="date">
                                                            <span>Jun</span>
                                                            <span>10</span>
                                                        </span>
                                                        <span className="text">The five best destinations for a family holiday in October</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-item.html">
                                                        <span className="date">
                                                            <span>Jun</span>
                                                            <span>31</span>
                                                        </span>
                                                        <span className="text">Everything you need to know about vaccinations</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="box box-tags">
                                            <h4 className="title">Popular tags</h4>
                                            <ul className="clearfix">
                                                <li><a href="#">accommodation</a></li>
                                                <li><a href="#">rooms</a></li>
                                                <li><a href="#">suits</a></li>
                                                <li><a href="#">hotel</a></li>
                                                <li><a href="#">airport</a></li>
                                                <li><a href="#">places</a></li>
                                                <li><a href="#">resturants</a></li>
                                                <li><a href="#">booking</a></li>
                                                <li><a href="#">payment</a></li>
                                                <li><a href="#">reservation</a></li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                            </div> {/*/row*/}
                        </div>{/*/container*/}
                    </div> {/*/blog-category*/}
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
