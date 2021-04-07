import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* ======================== About ======================== */}
                    <section className="page">
                        {/* ===  Page header === */}
                        <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                            <div className="container">
                                <h2 className="title">The hotel</h2>
                                <p>The place, our services &amp; our team</p>
                            </div>
                        </div>
                        <div className="image-blocks image-blocks-category">
                            <div className="container">
                                <div className="about">
                                    {/*text-block*/}
                                    <div className="text-block">
                                        <div className="row">
                                            <div className="col-md-8 col-md-offset-2">
                                                <div className="text">
                                                    <h2>About Colina Hotel</h2>
                                                    {/* ===  Gallery === */}
                                                    <div className="gallery">
                                                        <div className="owl-slider owl-slider-gallery">
                                                            {/* === slide item === */}
                                                            <div className="item" style={{ backgroundImage: 'url(assets/images/slide-2.jpg)' }} />
                                                            {/* === slide item === */}
                                                            <div className="item" style={{ backgroundImage: 'url(assets/images/room-3.jpg)' }} />
                                                            {/* === slide item === */}
                                                            <div className="item" style={{ backgroundImage: 'url(assets/images/slide-3.jpg)' }} />
                                                        </div> {/*/owl-slider*/}
                                                    </div>
                                                    <p><strong className="text-center">The begining</strong></p>
                                                    <p>
                                                        The intimate side of our 19-room hotel enables us to provide personal customer service so we can help you during
                                                        stay in Paris and ensure you have a great experience.
                  </p>
                                                    <p>
                                                        We are delighted that 97.9% of our guests were happy with our service in 2015 (source – customer survey
                                                        This is what has made Hôtel La Tamise such a popular place among our guests who have ranked us top out of
                                                        1809 hotels in Paris on Trip Advisor.
                  </p>
                                                    <p>
                                                        <img src="assets/images/room-2.jpg" alt="Colina Hotel - Resort & accommodation" />
                                                    </p>
                                                    <p><strong className="text-center">Facilities</strong></p>
                                                    <p>
                                                        A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided may range from a
                                                        modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a fridge and
                                                        other kitchen facilities, upholstered chairs, a flatscreen television and en-suite bathrooms. Small, lower-priced
                                                        hotels may offer only the most basic guest services and facilities.
                  </p>
                                                    <p>
                                                        Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre
                                                        (with computers, printers and other office equipment), childcare, conference and event facilities, tennis or basketball
                                                        courts, gymnasium, restaurants, day spa and social function services.
                                                        Hotel rooms are usually numbered (or named in some smaller hotels and B&amp;Bs) to allow guests to
                                                        identify their room. Some boutique, high-end hotels have custom decorated rooms. Some hotels offer meals as part of
                                                        a room and board arrangement. In the United Kingdom, a hotel is required by law to serve food and drinks to all guests
                                                        within certain stated hours. In Japan, capsule hotels provide a tiny room suitable only for sleeping and shared
                                                        bathroom facilities.
                  </p>
                                                    <p><strong className="text-center">A bit of history</strong></p>
                                                    <p>
                                                        The precursor to the modern hotel was the inn of medieval Europe. For a period of about 200 years from the mid-17th
                                                        century, coaching inns served as a place for lodging for coach travelers. Inns began to cater to richer clients in
                                                        the mid-18th century. One of the first hotels in a modern sense was opened in Exeter in 1768. Hotels proliferated
                                                        throughout Western Europe and North America in the early 19th century, and luxury hotels began to spring up in the
                                                        later part of the 19th century.
                  </p>
                                                </div>
                                                <h2>Meet our team</h2>
                                                <p>
                                                    Our architects and designers constantly and carefully monitor the environment, they accept and develop changes, research fashion and architectural, as well as sociological, changes and transform them into unique design.
                </p>
                                                {/* === Our team === */}
                                                <div className="team">
                                                    <div className="row">
                                                        {/* === team member === */}
                                                        <div className="col-sm-3">
                                                            <article>
                                                                <div className="details details-text">
                                                                    <div className="inner">
                                                                        <h4 className="title">Lea Nils</h4>
                                                                        <h6 className="title">Director</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="image">
                                                                    <img src="assets/images/user-5.jpg" alt="" />
                                                                </div>
                                                                <div className="details details-social">
                                                                    <div className="inner">
                                                                        <a href="#"><i className="fa fa-phone" /></a>
                                                                        <a href="#"><i className="fa fa-envelope" /></a>
                                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        </div>
                                                        {/* === team member === */}
                                                        <div className="col-sm-3">
                                                            <article>
                                                                <div className="details details-text">
                                                                    <div className="inner">
                                                                        <h4 className="title">Nora Star</h4>
                                                                        <h6 className="title">Architect</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="image">
                                                                    <img src="assets/images/user-4.jpg" alt="" />
                                                                </div>
                                                                <div className="details details-social">
                                                                    <div className="inner">
                                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        </div>
                                                        {/* === team member === */}
                                                        <div className="col-sm-3">
                                                            <article>
                                                                <div className="details details-text">
                                                                    <div className="inner">
                                                                        <h4 className="title">Jenna Hale</h4>
                                                                        <h6 className="title">Quality director</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="image">
                                                                    <img src="assets/images/user-3.jpg" alt="" />
                                                                </div>
                                                                <div className="details details-social">
                                                                    <div className="inner">
                                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        </div>
                                                        {/* === team member === */}
                                                        <div className="col-sm-3">
                                                            <article>
                                                                <div className="details details-text">
                                                                    <div className="inner">
                                                                        <h4 className="title">Glen Jordan</h4>
                                                                        <h6 className="title">Supervisor</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="image">
                                                                    <img src="assets/images/user-4.jpg" alt="" />
                                                                </div>
                                                                <div className="details details-social">
                                                                    <div className="inner">
                                                                        <a href="#"><i className="fa fa-facebook" /></a>
                                                                        <a href="#"><i className="fa fa-twitter" /></a>
                                                                        <a href="#"><i className="fa fa-google-plus" /></a>
                                                                        <a href="#"><i className="fa fa-linkedin" /></a>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        </div>
                                                    </div> {/*/row*/}
                                                </div> {/*/team*/}
                                            </div> {/*/col*/}
                                        </div> {/*/row*/}
                                    </div>
                                    {/*=== item block === */}
                                    <div className="blocks blocks-left">
                                        <div className="item">
                                            <div className="text">
                                                <div className="h2">Hotel information</div>
                                                <ul>
                                                    <li>Check-in Time: 3 PM</li>
                                                    <li>Check-out Time: 12 PM</li>
                                                    <li>Complimentary WiFi for All Members</li>
                                                    <li>Valet Parking $65-$75/day</li>
                                                    <li>Pets Welcome (fee)</li>
                                                    <li>Early Check-In Available</li>
                                                    <li>Best Prices Guaranteed</li>
                                                    <li>Free parking for All Inclusive package</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="image" style={{ backgroundImage: 'url(assets/images/slide-1.jpg)' }}>
                                            <img src="assets/images/slide-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    {/*=== item block === */}
                                    <div className="blocks blocks-right">
                                        <div className="item">
                                            <div className="text">
                                                <div className="h2">Hotel features</div>
                                                <ul>
                                                    <li>FIT ® Gym &amp; Fitness</li>
                                                    <li>Wired Business Center</li>
                                                    <li>All Inclusive ® Service</li>
                                                    <li>Bliss &amp; Spa</li>
                                                    <li>SPG Keyless</li>
                                                    <li>Resturant &amp; lounge bar</li>
                                                    <li>Private rooms</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="image" style={{ backgroundImage: 'url(assets/images/services-4.jpg)' }}>
                                            <img src="assets/images/services-4.jpg" alt="" />
                                        </div>
                                    </div>
                                    {/* === text-card === */}
                                    <div className="text-block">
                                        <div className="row">
                                            <div className="col-md-8 col-lg-offset-2">
                                                <h2>Luxury</h2>
                                                <p>
                                                    Timeshare and destination clubs are a form of property ownership involving ownership of an individual unit
                                                    of accommodation for seasonal usage. A motel is a small-sized low-rise lodging with direct access to individual
                                                    rooms from the car park. Boutique hotels are typically hotels with a unique environment or intimate setting.
                                                    A number of hotels have entered the public consciousness through popular culture, such as the Ritz Hotel in London.
                </p>
                                                <h2>Near by</h2>
                                                <p>
                                                    Some hotels are built specifically as a destination in itself, for example at casinos and holiday resorts.
                                                    Most hotel establishments are run by a General Manager who serves as the head executive (often referred to as
                                                    the "Hotel Manager"), department heads who oversee various departments within a hotel (e.g., food service),
                                                    middle managers, administrative staff, and line-level supervisors. The organizational chart and volume
                                                    of job positions and hierarchy varies by hotel size, function and class, and is often determined by hotel
                                                    ownership and managing companies.
                </p>
                                                <div className="cards cards-block">
                                                    <div className="row">
                                                        {/* === item === */}
                                                        <div className="col-xs-12 col-md-6">
                                                            <figure>
                                                                <figcaption style={{ backgroundImage: 'url(assets/images/activity-1.jpg)' }}>
                                                                    <img src="assets/images/activity-1.jpg" alt="" />
                                                                </figcaption>
                                                                <a href="#" className="btn btn-clean" onclick>Museums</a>
                                                            </figure>
                                                        </div>
                                                        {/* === item === */}
                                                        <div className="col-xs-6 col-md-6">
                                                            <figure>
                                                                <figcaption style={{ backgroundImage: 'url(assets/images/activity-2.jpg)' }}>
                                                                    <img src="assets/images/activity-2.jpg" alt="" />
                                                                </figcaption>
                                                                <a href="#" className="btn btn-clean">Nightlife</a>
                                                            </figure>
                                                        </div>
                                                        {/* === item === */}
                                                        <div className="col-xs-6 col-md-12">
                                                            <figure>
                                                                <figcaption style={{ backgroundImage: 'url(assets/images/activity-3.jpg)' }}>
                                                                    <img src="assets/images/activity-3.jpg" alt="" />
                                                                </figcaption>
                                                                <a href="#" className="btn btn-clean">Food &amp; drink</a>
                                                            </figure>
                                                        </div>
                                                        {/* === item === */}
                                                        <div className="col-xs-6 col-md-6">
                                                            <figure>
                                                                <figcaption style={{ backgroundImage: 'url(assets/images/activity-4.jpg)' }}>
                                                                    <img src="assets/images/activity-4.jpg" alt="" />
                                                                </figcaption>
                                                                <a href="#" className="btn btn-clean">Shopping</a>
                                                            </figure>
                                                        </div>
                                                        {/* === item === */}
                                                        <div className="col-xs-6 col-md-6">
                                                            <figure>
                                                                <figcaption style={{ backgroundImage: 'url(assets/images/activity-5.jpg)' }}>
                                                                    <img src="assets/images/activity-5.jpg" alt="" />
                                                                </figcaption>
                                                                <a href="#" className="btn btn-clean">The City</a>
                                                            </figure>
                                                        </div>
                                                    </div> {/*/row*/}
                                                </div> {/*/cards*/}
                                            </div> {/*/col*/}
                                        </div> {/*/row*/}
                                    </div>
                                </div> {/*/container*/}
                            </div>
                        </div>
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
