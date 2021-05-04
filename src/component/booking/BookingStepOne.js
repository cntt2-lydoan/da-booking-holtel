import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { datas } from './../../connectFirebase/firebaseConnect';
import { chuyenDoiURL, getCurrentDate } from './../../utils/notification';

export default class BookingStepOne extends Component {
    constructor(props) {
        super(props)
        this.state = {

            room: {
                id: this.props.match.params.id,
                facility: [],
                listImage: []
            },
            guest_count: 1,
            night:1
        }
    }

    isChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    componentDidMount() {

        datas.ref('room').child(this.props.match.params.id).on("value", res => {
            console.log(res.val())
            this.setState({
                room: res.val()
            });
        })
    }

    redirectToDetails(value) {
        this.props.history.push(`/room-details/id=/${this.props.match.params.id}/name=/${chuyenDoiURL(value.name)}`)
    }

    redirect = (r) => {
        localStorage.setItem('guest_count', this.state.guest_count);
        localStorage.setItem('night', this.state.night);
        localStorage.setItem('total', this.state.night*this.state.room.price);

       setTimeout(() => {
        this.props.history.push(`/booking-step-two/id=/${this.props.match.params.id}/name=/${chuyenDoiURL(r.name)}`)
       }, 1000);
    }

    

    ridirect = (r) => {
        this.props.history.push(`/booking-step-one/id=/${this.props.match.params.id}/name=/${chuyenDoiURL(r.name)}}`)
    }


    render() {
        const { room, guest_count, night } = this.state;
        return (
            <div>
                {/* ========================  Checkout ======================== */}
                <section className="page">
                    {/* ===  Page header === */}
                    <div className="page-header" style={{ backgroundImage: 'url(assets/images/header-1.jpg)' }}>
                        <div className="container">
                            <h2 className="title">Make a reservation</h2>
                            <p>Proceed to booking step 2</p>
                        </div>
                    </div>
                    {/* ===  Checkout steps === */}
                    <div className="step-wrapper">
                        <div className="container">
                            <div className="stepper">
                                <ul className="row">
                                    <li className="col-md-4 active">
                                        <span data-text="Room & rates"  />
                                    </li>
                                    {/* <li className="col-md-4">
                                        <span data-text="Reservation" />
                                    </li>
                                    <li className="col-md-4">
                                        <span data-text="Checkout"/>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="checkout">
                        <div className="container">
                            <div className="clearfix">
                                <div className="cart-wrapper">
                                    <div className="cart-block cart-block-header clearfix">
                                        <div>
                                            <span>Room type</span>
                                        </div>
                                        <div className="text-right">
                                            <span>Price</span>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="cart-block cart-block-item clearfix">
                                            <div className="image">
                                                <a href="room-overview.html"><img src={room.listImage[0]} alt="" /></a>
                                            </div>
                                            <div className="title">
                                                <div className="h2"><a href="room-overview.html">{room.name}</a></div>
                                                <p>
                                                    <strong>Arrival date</strong> <br /> <a href="#">{getCurrentDate()}</a>
                                                </p>
                                                <p>
                                                    <strong>Guests (person)</strong> <br />
                                                    <input className="col-md-12" min="1" type="number" value={guest_count} name="guest_count" onChange={(e) => this.isChange(e)} /> 
                                                    </p>
                                                <p>
                                                    <strong>Nights</strong> <br />
                                                    <input className="col-md-12" min="1" type="number" value={night} name="night" onChange={(e) => this.isChange(e)} />
                  </p>
                                            </div>
                                            <div className="price">
                                                <span className="final h3">{room.unit} {night * room.price}</span>
                                            </div>
                                            <span className="icon icon-cross icon-delete" />
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                                            <div>
                                                <div className="btn btn-clean-dark" onClick={() => this.redirectToDetails(room)}>Change</div>
                                            </div>
                                            <div>
                                                {/* <a href="reservation-2.html" className="btn btn-main">Reservation <span className="icon icon-chevron-right" /></a> */}
                                                <div onClick={() => this.redirect(room)}  className="btn btn-main">Reservation <span className="icon icon-chevron-right" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </section>
            </div>

        )
    }
}