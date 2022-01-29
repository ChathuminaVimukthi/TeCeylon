import React, {useEffect} from "react"
import {FaPaperPlane, FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa"
import {Button, Form} from "react-bootstrap";

export default function Footer() {

    return <div>
        <div className="footer-wrap">
            <div className="container first_class">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <h3>BE THE FIRST TO KNOW</h3>
                        <p>Discover new dimensions of tea with our favourite herb in mixology and gastronomy, learn about its health benefits,
                            how your cuppa helps make the world a better place,
                            and stay updated on our exciting tea inspired challenges ​ - when you sign up here</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Form className="newsletter">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button type="submit" className="newsletter_submit_btn">
                                <FaPaperPlane/>
                            </Button>
                        </Form>

                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="col-md-12">
                            <div className="standard_social_links">
                                <div>
                                    <li className="round-btn btn-facebook">
                                        <a href="#">
                                            <FaFacebookF/>
                                        </a>

                                    </li>
                                    <li className="round-btn btn-instagram">
                                        <a href="#">
                                            <FaInstagram/>
                                        </a>

                                    </li>
                                    <li className="round-btn btn-twitter">
                                        <a href="#">
                                            <FaTwitter/>
                                        </a>

                                    </li>
                                    {/*<li className="round-btn btn-instagram"><a href="#"><i className="fab fa-instagram"*/}
                                    {/*                                                       aria-hidden="true"></i></a>*/}

                                    {/*</li>*/}
                                    {/*<li className="round-btn btn-whatsapp"><a href="#"><i className="fab fa-whatsapp"*/}
                                    {/*                                                      aria-hidden="true"></i></a>*/}

                                    {/*</li>*/}
                                    {/*<li className="round-btn btn-envelop"><a href="#"><i className="fa fa-envelope"*/}
                                    {/*                                                     aria-hidden="true"></i></a>*/}

                                    {/*</li>*/}
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12"><h3 style={{textAlign: "left"}}>Stay Connected</h3></div>
                    </div>
                </div>
            </div>
            <div className="second_class">
                <div className="container second_class_bdr">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h3>Quick LInks</h3>
                            <ul className="footer-links">
                                <li><a href="#">Home</a>
                                </li>
                                <li><a href="#">About us</a>
                                </li>
                                <li><a href="#">Té Online</a>
                                </li>
                                <li><a href="#">Contact Us</a>
                                </li>
                                <li><a href="#">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3>OUR PRODUCTS</h3>
                            <ul className="footer-category">
                                <li><a href="#">Té Garden</a>
                                </li>
                                <li><a href="#">Té Bliss</a>
                                </li>
                                {/*<li><a href="#">Resume Edge - Resume Writing Services</a>*/}
                                {/*</li>*/}
                                {/*<li><a href="#">Readers Galleria - Curated Library</a>*/}
                                {/*</li>*/}
                                {/*<li><a href="#">Trideus - Campus Ambassadors</a>*/}
                                {/*</li>*/}
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3>triedge Events</h3>
                            <ul className="footer-links">
                                <li><a href="#">Triedge Events</a>
                                </li>

                                <li><a href="#">Jobs &AMP; Internship Fair 2019</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h3>Contact Us</h3>
                            <div className="address-footer">
                                <address>
                                    Té Ceylon Tea Company PLC,<br/>
                                    111 Negombo Road,<br/>
                                    Peliyagoda,<br/>
                                    Sri Lanka.<br/>
                                </address>
                            </div>

                            <div className="address-footer">
                                <address>
                                    + 94 11 482 2000<br/>
                                    + 94 11 482 2000<br/>
                                </address>
                            </div>

                            <div className="address-footer">
                                <address>
                                    info@teceylon.com
                                </address>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">

                <div className="container-fluid">
                    <div className="copyright"> Copyright © 2021 | All Rights Reserved by Té Ceylon Pvt. Ltd.
                    </div>
                </div>

            </div>
        </div>

    </div>
}