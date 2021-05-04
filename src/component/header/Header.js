import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import LoginAnt from './../login/LoginAnt';
import LoginModal from './../login/index';

import firebase from 'firebase';
import { getCount } from './../../utils/notification';
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',  
        count: 0   }
    }

    componentDidMount() {

        var array = parseInt(localStorage.getItem('countWishlist')) || 0;
        this.setState({
            count: array
        });
               
        var ahihi = this;

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('This is the user: ', user)
                ahihi.setState({
                    displayName: user.displayName,
                    user: user
                });
            } else {
                console.log('There is no logged in user');
            }
        });


    }

    displayCount(countLocal, countProps) {
        let res;

        if(countLocal == 0 && countProps == 0) {
            res = 0;
        }
        else {
              if(countLocal > countProps) {
            res=countLocal
        }
        else {
            res=countProps
        }
        }
        return res;

    }

    logout = () => {

        firebase.auth().signOut().then(res => {
            localStorage.removeItem('email')
            console.log('ĐĂng xuất thành công');
            this.setState({
                user: ''
            })
            // console.log(this.state.user);
            // notificationComponent('success', 'Logout success')

        })
        .catch(err => {
                localStorage.removeItem('token')
                localStorage.removeItem('username')
            });

    }
    render() {
        console.log(this.state.user);
        const { user, wishlist} = this.state;

        console.log(this.props.countWishlist)
        return (
            <div>
                <header id="header" className=''>
                    <div className="container">
                        <nav className="navigation-top clearfix">
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
                        <nav className="navigation-main clearfix">
                            <div className="logo animated fadeIn">
                                <a href="index.html">
                                    <img className="logo-desktop" src="assets/images/logo.png" alt="Alternate Text" />
                                    <img className="logo-mobile" src="assets/images/logo-mobile.png" alt="Alternate Text" />
                                </a>
                            </div>
                            <div className="toggle-menu"><i className="icon icon-menu" /></div>
                            <div className="navigation-block clearfix">
                                <ul className="navigation-left">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about-us">About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/room-category">Room</NavLink>
                                    </li>
                                </ul>
                                <ul className="navigation-right">
                                    <li>
                                        <NavLink to="/facilities">Facilities</NavLink>
                                    </li>
                                    <li>

                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/wishlist">  <i class="fa fa-list" aria-hidden="true"></i> Wishlist<span className="number-of-wishlist">{this.displayCount(this.state.count, this.props.countWishlist)}</span> </NavLink>
                                   
                                    </li>
                                    
                                        {user == '' ? <LoginModal/>  : <li className="btn-login" style={{ cursor: 'pointer' }} onClick={() => this.logout()}>Logout</li>}
                                                            
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        countWishlist: state.countWishlist,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);