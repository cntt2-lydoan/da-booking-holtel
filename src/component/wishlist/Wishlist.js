import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { chuyenDoiURL } from '../../utils/notification';

class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishlist: []
        }
    }
    componentDidMount() {
        let array = JSON.parse(localStorage.getItem('wishlist')) || [];
        this.setState({
            wishlist: array
        })
        // console.log(array);

    }

    redirectToDetails(value) {
        this.props.history.push(`/room-details/id=/${value.id}/name=/${chuyenDoiURL(value.name)}`)
    }
    delWishlist = (id) =>{ 
        console.log(id);
        console.log(this.state.wishlist);
        let wl= this.state.wishlist;
        wl=wl.filter(w=>w.id!=id)
        this.setState({wishlist:wl});
        localStorage.setItem("wishlist",JSON.stringify(wl))
        localStorage.setItem("countWishlist",JSON.stringify(wl))
    }

    renderRoom = (array) => {
        let res = array.map((value, key) => {
                return (
                    <div className="col-sm-12 col-md-12">
                        <div className="item">
                            <article style={{margin: '10px 0'}}>
                                <div className="image col-md-3" onClick={() => this.redirectToDetails(value)} style={{ display: 'inline-block'}}>
                                    <img src={value.listImage[0]} alt="" />
                                </div>
                                <div className="details col-md-9" style={{ display: 'inline-block', float: 'right'}}>
                                    <div className="text">
                                        {/* <a href="room-overview.html">Presidential Suite</a> */}
                                        <h2 className="title"><NavLink to="/room-overview" onClick={() => this.redirectToDetails(value)}>{value.name}</NavLink></h2>
                                        <p>{value.categoryRoom}</p>
                                    </div>
                                    <div className="book">
                                        <div>
                                            <NavLink to={"/booking-step-one/id=/"+value.id+"/name=/"+chuyenDoiURL(value.name)} className="btn btn-main" style={{marginRight: '10px'}}>Book now</NavLink>
                                            <button className="btn btn-main" onClick={(id) => this.delWishlist(value.id)}>Delete</button>
                                        </div>
                                        <div>
                                            <span className="price h2">{value.unit} {value.price}</span>
                                            <span>per night</span>
                                        </div>
                                    </div>
                                    {/* <div className="book">
                                        <div>
                                            
                                        </div>
                                        
                                    </div> */}
                                </div>
                            </article>
                        </div>
                    </div>
                )
            
        })
        return res;
    }

    render() {
        const {wishlist} = this.state;
        return (
            <section className="page">
                <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                    <div className="container">
                        <h2 className="title">Wishlist</h2>
                        <p>Your wishlist room of our hotel </p>
                    </div>
                </div>
                <div className="rooms rooms-category">
                    <div className="container">
                        <div className="row">
                        {wishlist.length>0 ? this.renderRoom( wishlist ) : <div className="col-sm-12 col-md-12">
                            <p style={{ color: 'white'}} >You have not added anything to your wishlist</p>
                            </div>}
                        </div>
                    </div> 
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        wishlist: state.wishlist,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
