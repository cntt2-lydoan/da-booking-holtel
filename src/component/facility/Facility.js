import React, { Component } from 'react'

export default class Facility extends Component {
    render() {
        return (
            <div>
                {/* ========================  Facility ======================== */}
                <section className="page">
                    {/* ===  Page header === */}
                    <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                        <div className="container text-center">
                            <h2 className="title">Resurant</h2>
                            <p>Restaurants &amp; In-Room Dining</p>
                        </div>
                    </div>
                    <div className="facility">
                        <div className="container">
                            <div className="facility-gallery">
                                <div className="owl-slider owl-theme owl-slider-gallery">
                                    {/* === slide item === */}
                                    <div className="item" style={{ backgroundImage: 'url(assets/images/item-2.jpg)' }}>
                                        <img src="assets/images/item-2.jpg" alt="" />
                                    </div>
                                    {/* === slide item === */}
                                    <div className="item" style={{ backgroundImage: 'url(assets/images/item-1.jpg)' }}>
                                        <img src="assets/images/item-1.jpg" alt="" />
                                    </div>
                                </div> {/*/owl-slider*/}
                            </div> {/*/facilty-gallery*/}
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    {/* === facility-info === */}
                                    <div className="facility-info">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h2>Restaurants</h2>
                                                <p>
                                                    The Resturant is the Colina Resort's iconic dining venue, serving breakfast, afternoon tea and an evening service complimented by
                                                    the recent addition of a bar and craft cocktail program.
                  </p>
                                                {/*<p>
                              Enjoy the world’s finest wines, champagnes, caviar and other indulgences while
                              overlooking Fifth Avenue and the famous Pulitzer Fountain.
                          </p>*/}
                                            </div>
                                            <div className="col-md-6">
                                                <h2>In-room dining</h2>
                                                <p>
                                                    A private meal in the comfort of your room or suite is one of the great pleasures of staying at The Plaza.  Enjoy our celebrated cuisine in the comfort of your own room 24-hours a day.
                  </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* === facility-addons === */}
                                    <div className="facility-addons">
                                        {/* === nav-tabs === */}
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="active">
                                                <a href="#menus" aria-controls="menus" role="tab" data-toggle="tab">
                                                    <i className="hotelicon hotelicon-kitchen" />
                                                    <span className="visible-md visible-lg">Menus</span>
                                                </a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#chefs" aria-controls="chefs" role="tab" data-toggle="tab">
                                                    <i className="hotelicon hotelicon-guestbook" />
                                                    <span className="visible-md visible-lg">Chefs</span>
                                                </a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#events" aria-controls="events" role="tab" data-toggle="tab">
                                                    <i className="hotelicon hotelicon-clock" />
                                                    <span className="visible-md visible-lg">Events</span>
                                                </a>
                                            </li>
                                        </ul>
                                        {/* === tab-panes === */}
                                        <div className="tab-content">
                                            {/* ============ tab #1 ============ */}
                                            <div role="tabpanel" className="tab-pane active" id="menus">
                                                <div className="content">
                                                    <div className="cards">
                                                        <div className="row">
                                                            {/* === item === */}
                                                            <div className="col-xs-12 col-md-6">
                                                                <figure>
                                                                    <figcaption style={{ backgroundImage: 'url(assets/images/food-1.jpg)' }}>
                                                                        <img src="assets/images/food-1.jpg" alt="" />
                                                                    </figcaption>
                                                                    <a href="#" className="btn btn-clean" onclick>Breakfast</a>
                                                                </figure>
                                                            </div>
                                                            {/* === item === */}
                                                            <div className="col-xs-6 col-md-6">
                                                                <figure>
                                                                    <figcaption style={{ backgroundImage: 'url(assets/images/food-2.jpg)' }}>
                                                                        <img src="assets/images/food-2.jpg" alt="" />
                                                                    </figcaption>
                                                                    <a href="#" className="btn btn-clean">Lunch</a>
                                                                </figure>
                                                            </div>
                                                            {/* === item === */}
                                                            <div className="col-xs-6 col-md-6">
                                                                <figure>
                                                                    <figcaption style={{ backgroundImage: 'url(assets/images/food-3.jpg)' }}>
                                                                        <img src="assets/images/food-3.jpg" alt="" />
                                                                    </figcaption>
                                                                    <a href="#" className="btn btn-clean">Dinner</a>
                                                                </figure>
                                                            </div>
                                                            {/* === item === */}
                                                            <div className="col-xs-6 col-md-6">
                                                                <figure>
                                                                    <figcaption style={{ backgroundImage: 'url(assets/images/food-4.jpg)' }}>
                                                                        <img src="assets/images/food-4.jpg" alt="" />
                                                                    </figcaption>
                                                                    <a href="#" className="btn btn-clean">In-room</a>
                                                                </figure>
                                                            </div>
                                                        </div> {/*/row*/}
                                                    </div> {/*/cards*/}
                                                </div>
                                            </div>
                                            {/* ============ tab #2 ============ */}
                                            <div role="tabpanel" className="tab-pane" id="chefs">
                                                <div className="content">
                                                    <div className="image-blocks image-blocks-category">
                                                        {/*=== item block === */}
                                                        <div className="blocks blocks-left">
                                                            <div className="item">
                                                                <div className="text">
                                                                    <h2 className="title">John Mike Doe <small>Executive pastry chef</small></h2>
                                                                    <p>Gubergren eros stet est sit et et magna no praesent nam duo duo dolore dolore hendrerit takimata dolore duo gubergren stet sit commodo eleifend duo</p>
                                                                    <p>Vero sed quis euismod et erat dolore elitr elitr invidunt facilisis amet labore nonumy sea at labore erat et iriure et stet sit dolore justo consetetur id dolor sed diam</p>
                                                                    <p>Et no odio ipsum est eirmod lorem at accusam sit sea eros at sit justo sed suscipit doming sadipscing dolore aliquyam et no accusam dolores</p>
                                                                </div>
                                                            </div>
                                                            <div className="image" style={{ backgroundImage: 'url(assets/images/user-1.jpg)' }}>
                                                                <img src="assets/images/user-1.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        {/*=== item block === */}
                                                        <div className="blocks blocks-right">
                                                            <div className="item">
                                                                <div className="text">
                                                                    <h2 className="title">John Mike Doe <small>Lead chef</small></h2>
                                                                    <p>Gubergren eros stet est sit et et magna no praesent nam duo duo dolore dolore hendrerit takimata dolore duo gubergren stet sit commodo eleifend duo</p>
                                                                    <p>Vero sed quis euismod et erat dolore elitr elitr invidunt facilisis amet labore nonumy sea at labore erat et iriure et stet sit dolore justo consetetur id dolor sed diam</p>
                                                                    <p>Et no odio ipsum est eirmod lorem at accusam sit sea eros at sit justo sed suscipit doming sadipscing dolore aliquyam et no accusam dolores</p>
                                                                </div>
                                                            </div>
                                                            <div className="image" style={{ backgroundImage: 'url(assets/images/user-2.jpg)' }}>
                                                                <img src="assets/images/user-2.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div> {/*/image-blocks*/}
                                                </div> {/*/content*/}
                                            </div>
                                            {/* ============ tab #3 ============ */}
                                            <div role="tabpanel" className="tab-pane" id="events">
                                                <div className="content">
                                                    <div className="image-blocks image-blocks-category">
                                                        {/*=== item block === */}
                                                        <div className="blocks blocks-left">
                                                            <div className="item">
                                                                <div className="text">
                                                                    {/*=== events ===*/}
                                                                    <div className="events">
                                                                        {/*=== event item ===*/}
                                                                        <a href="#">
                                                                            <div className="event">
                                                                                <div className="date">
                                                                                    <div className="date-card">
                                                                                        <span>Sep</span>
                                                                                        <strong>28</strong>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="caption">
                                                                                    Newly renovated by Master Architect Thierry Despont
                                  </div>
                                                                            </div>
                                                                        </a>
                                                                        {/*=== event item ===*/}
                                                                        <a href="#">
                                                                            <div className="event">
                                                                                <div className="date">
                                                                                    <div className="date-card">
                                                                                        <span>Sep</span>
                                                                                        <strong>22</strong>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="caption">
                                                                                    Ideal venue for cocktail style rehearsal dinners
                                  </div>
                                                                            </div>
                                                                        </a>
                                                                    </div> {/*/events*/}
                                                                </div> {/*/text*/}
                                                            </div> {/*/item*/}
                                                            <div className="image" style={{ backgroundImage: 'url(assets/images/event-1.jpg)' }}>
                                                                <img src="assets/images/event-1.jpg" alt="" />
                                                            </div>
                                                        </div> {/*/blocks*/}
                                                        {/*=== item block === */}
                                                        <div className="blocks blocks-right">
                                                            <div className="item">
                                                                <div className="text">
                                                                    <div className="events">
                                                                        {/*=== event item ===*/}
                                                                        <a href="#">
                                                                            <div className="event">
                                                                                <div className="date">
                                                                                    <div className="date-card">
                                                                                        <span>Sep</span>
                                                                                        <strong>28</strong>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="caption">
                                                                                    Newly renovated by Master Architect Thierry Despont
                                  </div>
                                                                            </div>
                                                                        </a>
                                                                        {/*=== event item ===*/}
                                                                        <a href="#">
                                                                            <div className="event">
                                                                                <div className="date">
                                                                                    <div className="date-card">
                                                                                        <span>Sep</span>
                                                                                        <strong>22</strong>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="caption">
                                                                                    Ideal venue for cocktail style rehearsal dinners
                                  </div>
                                                                            </div>
                                                                        </a>
                                                                    </div> {/*/events*/}
                                                                </div>
                                                            </div>
                                                            <div className="image" style={{ backgroundImage: 'url(assets/images/event-2.jpg)' }}>
                                                                <img src="assets/images/event-2.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div> {/*/image-blocks*/}
                                                </div> {/*/content*/}
                                            </div>
                                        </div> {/*/tab-content*/}
                                    </div> {/*/facility-addons*/}
                                </div> {/*/col-md-10*/}
                            </div> {/*/row*/}
                        </div> {/*/container*/}
                    </div>
                </section>
                {/* ========================  Stretcher widget ======================== */}
                <section className="stretcher-wrapper stretcher-wrapper-noheader">
                    {/* === stretcher header === */}
                    <div className="section-header hidden">
                        <div className="container">
                            <h2 className="title">Wellness &amp; spa <a href="#" className="btn btn-sm btn-clean-dark">Explore more</a></h2>
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
                                    <span className="text-intro h2">Spa center</span>
                                </div>
                            </div>
                            {/*main text*/}
                            <figure>
                                <h4>Spa center</h4>
                                <figcaption>Unparalleled devotion to luxury</figcaption>
                            </figure>
                            {/*anchor*/}
                            <a href="#">Anchor link</a>
                        </li>
                        {/* === stretcher item === */}
                        <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/services-2.jpg)' }}>
                            {/*logo-item*/}
                            <div className="stretcher-logo">
                                <div className="text">
                                    <span className="text-intro h2">Gym</span>
                                </div>
                            </div>
                            {/*main text*/}
                            <figure>
                                <h4>Gym</h4>
                                <figcaption>Care about results</figcaption>
                            </figure>
                            {/*anchor*/}
                            <a href="#">Anchor link</a>
                        </li>
                        {/* === stretcher item === */}
                        <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/services-3.jpg)' }}>
                            {/*logo-item*/}
                            <div className="stretcher-logo">
                                <div className="text">
                                    <span className="text-intro h2">Fitness</span>
                                </div>
                            </div>
                            <figure>
                                <h4>Fitness</h4>
                                <figcaption>Your daily activities</figcaption>
                            </figure>
                            {/*anchor*/}
                            <a href="#">Anchor link</a>
                        </li>
                        {/* === stretcher item === */}
                        <li className="stretcher-item" style={{ backgroundImage: 'url(assets/images/services-4.jpg)' }}>
                            {/*logo-item*/}
                            <div className="stretcher-logo">
                                <div className="text">
                                    <span className="text-intro h2">Beauty salon</span>
                                </div>
                            </div>
                            {/*main text*/}
                            <figure>
                                <h4>Beauty salon</h4>
                                <figcaption>Hair salons and spas</figcaption>
                            </figure>
                            {/*anchor*/}
                            <a href="#">Anchor link</a>
                        </li>
                        {/* === stretcher item more === */}
                        <li className="stretcher-item more">
                            <div className="more-icon">
                                <span data-title-show="Show more" data-title-hide="+" />
                            </div>
                            <a href="#" />
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

        )
    }
}
