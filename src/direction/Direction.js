import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';
import Header from './../component/header/Header';
import Footer from './../component/footer/Footer';
import AboutUs from './../component/aboutUs/AboutUs';
import RoomCategory from './../component/roomCategory/RoomCategory';
import RoomOverview from './../component/roomOverview/RoomOverview';
import BookingStepOne from './../component/booking/BookingStepOne';
import BookingStepTwo from './../component/booking/BookingStepTwo';
import BookingStepThree from './../component/booking/BookingStepThree';
import Facility from './../component/facility/Facility';
import BlogCategory from './../component/blog/BlogCategory';
import BlogItem from './../component/blog/BlogItem';
import Contact from './../component/contact/Contact';
import Home from './../component/home/Home';
import Wishlist from './../component/wishlist/Wishlist';



export default class Direction extends Component {
    render() {
        return (
            <Fragment>
                <Route path="/" component={Header}></Route>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about-us" component={AboutUs}></Route> 
                <Route exact path="/room-category" component={RoomCategory}></Route> 
                <Route exact path="/room-details/id=/:id/name=/:name" component={RoomOverview}></Route> 
                <Route exact path="/booking-step-one/id=/:id/name=/:name" component={BookingStepOne}></Route> 
                <Route exact path="/booking-step-two/id=/:id/name=/:name" component={BookingStepTwo}></Route> 
                <Route exact path="/booking-step-three/id=/:id/name=/:name" component={BookingStepThree}></Route> 
                <Route exact path="/facilities" component={Facility}></Route> 
                <Route exact path="/wishlist" component={Wishlist}></Route> 
                <Route exact path="/blog-category" component={BlogCategory}></Route> 
                <Route exact path="/blog-item" component={BlogItem}></Route> 
                <Route exact path="/contact" component={Contact}></Route> 
                <Route path="/" component={Footer}></Route> 
            </Fragment>
        )
    }
}
