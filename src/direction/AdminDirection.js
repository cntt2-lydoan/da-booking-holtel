import React, { Component, Fragment } from 'react';
import HomeAdmin from './../admin/HomeAdmin';
import Sidebar from './../admin/Sidebar';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../admin/Navbar';
import Footer from '../admin/Footer';
import ManageRooms from './../admin/ManageRooms';

class AdminDirection extends Component {
    render() {
        return (
            <Fragment>
                <div id="wrapper">
                    <Sidebar />


                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Navbar />
                                <Route exact path="/" component={HomeAdmin} />
                                <Route exact path="/manage-rooms" component={ManageRooms} />
                        </div>
                        <Footer />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AdminDirection;