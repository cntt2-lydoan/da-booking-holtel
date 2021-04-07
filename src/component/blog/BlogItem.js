import React, { Component } from 'react'

export default class BlogItem extends Component {
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
                    {/* ===  Blog item === */}
                    <div className="blog blog-item">
                        <div className="container">
                            <div className="row">
                                {/* === blog-content === */}
                                <div className="col-sm-8 col-md-9">
                                    <article>
                                        {/*=== blog image ===*/}
                                        <div className="image">
                                            <img src="assets/images/activity-2.jpg" alt="" />
                                        </div>
                                        {/*=== blog content ===*/}
                                        <div className="content">
                                            {/*=== blog title ===*/}
                                            <div className="h1 title">
                                                The only guide to travel insurance you'll ever need
                </div>
                                            <div className="blog-info blog-info-top">
                                                <div className="entry">
                                                    <i className="fa fa-user" />
                                                    <span>Administrator</span>
                                                </div>
                                                <div className="entry">
                                                    <i className="fa fa-calendar" />
                                                    <span>22.09.2017</span>
                                                </div>
                                                <div className="entry">
                                                    <i className="fa fa-comments" />
                                                    <span>4 comments</span>
                                                </div>
                                            </div> {/*/blog-info*/}
                                            <p>
                                                When holidaymaker Michael Doyle contracted blood poisoning in Bulgaria in July,
                                                his family attempted to arrange a medical flight to bring him back to the UK.
                                                But his travel insurers refused to pay for the flight or medical bills, saying
                                                that his policy didn't cover him – and three weeks later, Doyle died from kidney failure.
                </p>
                                            <p>
                                                Another significant change has been the introduction of new, lower age limits, so that
                                                whereas most premiums used to be available to under-65s, now you often find that they
                                                rise when you reach 45 or 50. Limitations on family policies have also tightened: it
                                                used to be easy to find a policy that would cover dependent children at college or
                                                university up to the age of 23; they are often restricted to children under
                </p>
                                            <p>
                                                Here is our comprehensive guide to buying travel insurance – and ensuring it covers
                                                all of your travel plans.
                </p>
                                            <p>A step-by-step guide to buying travel insurance</p>
                                            <p>
                                                How do you find the best-value travel insurance policy? Easy, you might think.
                                                Just go to a price-comparison website and buy the cheapest. But there is a catch.
                                                Price-comparison sites seem to be having an interesting effect. Because they are
                                                so powerful and used by so many people, there is intense competition among companies
                                                to keep the price of their products and services as low as possible to try to ensure
                                                that they appear near the top of the results.
                </p>
                                            <h2>Book independently</h2>
                                            <p>
                                                Another point to bear in mind about insurance is that travellers have different needs,
                                                depending not only on their age, but also on the value of their luggage,
                                                the type of travelling they do (there are endless exclusions and limitations
                                                relating to outdoor activities), how often they like to travel, how risk-averse
                                                they are and so on. In the case of skiers and snowboarders, there are other things
                                                to think about.
                </p>
                                            <h2>Time your stay</h2>
                                            <p>
                                                Multi-trip policies cover all the travelling you do in a calendar year, with limits on
                                                the length of each trip. Whether it is cheaper to buy one of these than separate
                                                policies for each trip depends how much travelling you do in a year – three or four
                                                trips will usually mean you save with multi-trip cover. The other huge advantage of
                                                a multi-trip policy is that you are covered continuously and don’t have to shop for
                                                a new policy each time you book. I chose worldwide cover including the United States
                                                and Canada. Europe only, or worldwide without North America would have been cheaper.
                </p>
                                            <p>
                                                It is cheaper to buy cover for a couple, or a family, under one policy.
                                                I was covering two adults, one child aged 17 and one aged 18 and away at university,
                                                and I wanted a policy that enabled each of us to travel independently.
                                                These are much harder to find than they used to be, but I managed to find one.
                </p>
                                            <h2>Look for last-minute deals</h2>
                                            <p>
                                                For the policy I bought, I have listed below the limits for the key parts of the cover,
                                                all per person and with an excess ranging from nil to £75. I would have been happy
                                                with medical cover of less than half this – the highest claim ever recorded was only
                                                $2 million – but many policies attach much higher limits, apparently for show rather
                                                than out of necessity.
                </p>
                                        </div>
                                        {/* === blog comments === */}
                                        <div className="comments">
                                            {/* === comment header === */}
                                            <div className="comment-header">
                                                <a href="#"><i className="fa fa-facebook" /></a>
                                                <a href="#"><i className="fa fa-twitter" /></a>
                                                <a href="#"><i className="fa fa-google-plus" /></a>
                                                <a href="#"><i className="fa fa-pinterest" /></a>
                                                <a href="#"><i className="fa fa-linkedin" /></a>
                                            </div>
                                            <div className="comment-wrapper">
                                                {/* === comment === */}
                                                <div className="comment-block">
                                                    <div className="comment-user">
                                                        <div><img src="assets/images/user-2.jpg" alt="Alternate Text" width={70} /></div>
                                                        <div>
                                                            <h5>
                                                                John Doe
                          <a href="#" className="btn btn-sm btn-main pull-right"><i className="fa fa-reply" /> Reply</a>
                                                                <small>03.05.2017</small>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    {/* comment description */}
                                                    <div className="comment-desc">
                                                        <p>
                                                            In vestibulum tellus ut nunc accumsan eleifend. Donec mattis cursus ligula, id
                                                            iaculis dui feugiat nec. Etiam ut ante sed neque lacinia volutpat. Maecenas
                                                            ultricies tempus nibh, sit amet facilisis mauris vulputate in. Phasellus
                                                            tempor justo et mollis facilisis. Donec placerat at nulla sed suscipit. Praesent
                                                            accumsan, sem sit amet euismod ullamcorper, justo sapien cursus nisl, nec
                                                            gravida
                      </p>
                                                    </div>
                                                    {/* comment reply */}
                                                    <div className="comment-block">
                                                        <div className="comment-user">
                                                            <div><img src="assets/images/user-2.jpg" alt="Alternate Text" width={70} /></div>
                                                            <div>
                                                                <h5>
                                                                    John Doe
                            <a href="#" className="btn btn-sm btn-main pull-right"><i className="fa fa-reply" /> Reply</a>
                                                                    <small>08.05.2017</small>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="comment-desc">
                                                            <p>
                                                                Curabitur sit amet elit quis tellus tincidunt efficitur. Cras lobortis id
                                                                elit eu vehicula. Sed porttitor nulla vitae nisl varius luctus. Quisque
                                                                a enim nisl. Maecenas facilisis, felis sed blandit scelerisque, sapien
                                                                nisl egestas diam, nec blandit diam ipsum eget dolor. Maecenas ultricies
                                                                tempus nibh, sit amet facilisis mauris vulputate in.
                        </p>
                                                        </div>
                                                    </div>
                                                    {/*/reply*/}
                                                </div>
                                                {/* === comment === */}
                                                <div className="comment-block">
                                                    <div className="comment-user">
                                                        <div><img src="assets/images/user-2.jpg" alt="Alternate Text" width={70} /></div>
                                                        <div>
                                                            <h5>
                                                                John Doe
                          <a href="#" className="btn btn-sm btn-main pull-right"><i className="fa fa-reply" /> Reply</a>
                                                                <small>21.03.2017</small>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>
                                                            Cras lobortis id elit eu vehicula. Sed porttitor nulla vitae nisl varius luctus.
                                                            Quisque a enim nisl. Maecenas facilisis, felis sed blandit scelerisque, sapien
                                                            nisl egestas diam, nec blandit diam ipsum eget dolor. In vestibulum tellus
                                                            ut nunc accumsan eleifend. Donec mattis cursus ligula, id iaculis dui feugiat
                                                            nec. Etiam ut ante sed neque lacinia volutpat. Maecenas ultricies tempus
                                                            nibh, sit amet facilisis mauris vulputate in. Phasellus tempor justo et mollis
                                                            facilisis. Donec placerat at nulla sed suscipit. Praesent accumsan, sem sit
                                                            amet euismod ullamcorper, justo sapien cursus nisl, nec gravida
                      </p>
                                                    </div>
                                                </div>
                                            </div>{/*/comment-wrapper*/}
                                            <div className="comment-header">
                                                <a href="#" className="btn btn-clean-dark">12 comments</a>
                                            </div> {/*/comment-header*/}
                                            {/* === add comment === */}
                                            <div className="comment-add">
                                                <div className="comment-reply-message">
                                                    <div className="h3 title">Leave a Reply </div>
                                                    <p>Your email address will not be published.</p>
                                                </div>
                                                <form action="#" method="post">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="name" defaultValue placeholder="Your Name" required="required" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="name" defaultValue placeholder="Your Email" required="required" />
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea rows={10} className="form-control" placeholder="Your comment" required="required" defaultValue={""} />
                                                    </div>
                                                    <div className="clearfix text-center">
                                                        <input type="submit" className="btn btn-main" defaultValue="Add comment" />
                                                    </div>
                                                </form>
                                            </div>{/*/comment-add*/}
                                        </div> {/*/comments*/}
                                    </article>
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
                    </div> {/*/blog-item*/}
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
