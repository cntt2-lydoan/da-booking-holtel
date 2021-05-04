import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { chuyenDoiURL, notificationComponent } from './../../utils/notification';
import { includes } from 'lodash';
class RoomCategory extends Component {
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

            var array = JSON.parse(localStorage.getItem('wishlist')) || [];
            this.setState(
               { arrayWishlist : array}
            );

    }
    addWishlist = (val) => {
        this.props.addWishlist(val);
        var array = JSON.parse(localStorage.getItem('wishlist')) || [];
        var count = parseInt(localStorage.getItem('countWishlist')) || 0;

        console.log("count", count)
        
        array.push(val);
        count +=1;

        localStorage.setItem("wishlist", JSON.stringify(array));
        localStorage.setItem("countWishlist", count)

    }
    redirectToDetails(value) {
        this.props.history.push(`/room-details/id=/${value.id}/name=/${chuyenDoiURL(value.name)}`)
    }

    renderRoom = (array, array2) => {
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
                                        <div className="d-flex">
                                            {/* <a href="room-overview.html" className="btn btn-main">Book now</a> */}
                                            <NavLink to={"/booking-step-one/id=/"+value.id+"/name=/"+chuyenDoiURL(value.name)} className="btn btn-main">Book now</NavLink>
                                          <button className="" style={{marginLeft: '10px', cursor:'pointer'}} onClick={() => this.addWishlist(value)}
                                          disabled={includes(array2, value) }
                                          ><i class="fa fa-plus" aria-hidden="true"></i></button>
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
        const { arrayData, arrayWishlist } = this.state;
        return (
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
                                    {arrayData.length > 0 ? this.renderRoom(arrayData, arrayWishlist) : <h1 style={{color: 'white'}}>
                                        Loading.......</h1>}
                                </div>
                            </div> {/*/container*/}
                        </div>
                    </section>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addWishlist: (val) => {
            dispatch({ type: "ADD_INTO_WISHLIST", payload: val })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RoomCategory);