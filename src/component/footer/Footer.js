import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        {/*footer links*/}
                        <div className="footer-links">
                            <div className="row">
                                <div className="col-sm-6 footer-left">
                                    <a href="#">Sitemap</a> &nbsp; | &nbsp; <a href="#">Privacy policy</a> | &nbsp; <a href="#">Guest book</a>
                                </div>
                                <div className="col-sm-6 footer-right">
                                    <a href="#">Gallery</a> &nbsp; | &nbsp; <a href="#">Reservations</a> | &nbsp; <a href="#">Help center</a>
                                </div>
                            </div>
                        </div>
                        {/*footer social*/}
                        <div className="footer-social">
                            <div className="row">
                                <div className="col-sm-12 text-center hidden">
                                    <a href className="footer-logo"><img src="assets/images/logo.png" alt="Alternate Text" /></a>
                                </div>
                                <div className="col-sm-12 icons">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                        <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-12 copyright">
                                    <small>Copyright © 2017 &nbsp; | &nbsp; <a href="https://themeforest.net/item/colina-hotel-website-template/20977257">Buy Colina Template</a></small>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <img src="assets/images/logo-footer.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}
