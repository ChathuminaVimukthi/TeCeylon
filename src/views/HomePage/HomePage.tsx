import React, {useEffect, useState} from "react"
import {useTranslation} from "react-i18next";
import CarouselItem from "./Carousel/Carousel";
import {Img} from "../Common/Img";
import Highlights from "./Highlights";
import Footer from "../Common/Footer";
import parallaxImage from "../../resources/images/tea-leaves.jpg"
import {Button} from "react-bootstrap";
import { isBrowser, isMobile } from 'react-device-detect';

export default function HomePage() {
    const {t} = useTranslation();

    return (
        <>
            <div className="fixed-div">
                <CarouselItem/>
            </div>

            <div className="site-content" style={{height: 0, marginLeft: 0, position: 'sticky', top: 35}}>
                <div className="row col-lg-12 col-md-12 col-sm-12 col-12" style={{margin: 0}}>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5" style={{ height: 80, backgroundColor: "#fff", opacity: "0.98"}}>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 logo-header-container" style={{ height: 80, backgroundColor: "#fff", opacity: "0.98"}}>
                        {/*<Img id="te-logo" className={logoHeaderIsTop ? "logo-header-top mx-auto d-block" : "logo-header mx-auto d-block"} name={"logo/black/logo_header.png"}/>*/}
                        <Img id="te-logo" className={"logo-header-top mx-auto d-block"} name={"logo/black/logo_header.png"}/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5"  style={{ height: 80, backgroundColor: "#fff", opacity: "0.98"}}>
                    </div>
                </div>
            </div>

            <div>
                <div className="row col-lg-12 col-md-12 col-sm-12 g-0" style={{backgroundColor: "#fff", position: "relative", marginLeft: 0, top: 0}}>

                    <div className="col-lg-1 col-md-1 col-1">
                    </div>
                    <div className="col-lg-10 col-md-10 col-12" style={isMobile ? {marginTop: 130, marginBottom: 50, backgroundColor: "#fff", position: "relative", padding: 0} : {marginTop: 130, marginBottom: 50, backgroundColor: "#fff", position: "relative"}}>

                        <div className="highlights">
                            <Highlights/>
                        </div>

                    </div>
                    <div className="col-lg-1 col-md-1 col-1">
                    </div>
                </div>

                <div>
                    <div className="row col-lg-12 col-md-12 col-sm-12 col-12" style={{backgroundColor: "#e2e6ea", position: "relative", marginLeft: 0, top: 0}}>

                        <div className="col-lg-1 col-md-1 col-1">
                        </div>
                        <div className="col-lg-10 col-md-10 col-10"  style={isMobile ? {marginTop: 50,  marginBottom: 50, padding: 0} : {marginTop: 50,  marginBottom: 50}}>

                            <div className="about">
                                <div className="row">
                                    {
                                        isMobile?
                                            <div className="col-md-6 col-12" style={{marginBottom: 20}}>
                                                <Img className="homepage-image d-block w-100 br-20" imageHeight={200} name={"SLIDE_03.jpg"}/>
                                            </div>:
                                            <></>
                                    }
                                    <div className="col-md-6 col-12" style={{margin: 'auto'}}>
                                        <h1 className="welcome-header">
                                            {t('home.aboutUs.title')}
                                        </h1>
                                        <br/>
                                        <p className="welcome-description">
                                            {t('home.aboutUs.description')}
                                        </p>
                                        <Button variant="outline-primary view-more">View</Button>
                                    </div>
                                    <br/>
                                    {
                                        isBrowser ?
                                            <div className="col-md-6 col-12">
                                                <Img className="homepage-image d-block w-100" imageHeight={400} name={"SLIDE_03.jpg"}/>
                                            </div>:
                                            <></>
                                    }

                                </div>
                            </div>

                        </div>
                        <div className="col-lg-1 col-md-1 col-1">
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row col-lg-12 col-md-12 col-sm-12 col-12" style={{backgroundColor: "#fff", position: "relative", marginLeft: 0, top: 0}}>
                        <div className="col-lg-1 col-md-1 col-1">
                        </div>
                        <div className="col-lg-10 col-md-10 col-10"  style={isMobile ? {marginTop: 50,  marginBottom: 50, padding: 0} : {marginTop: 50,  marginBottom: 50}}>

                            <div className="about">
                                <div className="row">
                                    {
                                        isBrowser ?
                                            <div className="col-md-6">
                                                <Img className="homepage-image  d-block w-100" imageHeight={400} name={"dark_tea.jpg"}/>
                                            </div>:
                                            <div className="col-md-6 col-12" style={{marginBottom: 20}}>
                                                <Img className="homepage-image d-block w-100 br-20" imageHeight={200} name={"dark_tea.jpg"}/>
                                            </div>
                                    }
                                    <div className="col-md-6" style={{margin: 'auto'}}>
                                        <h1 className="welcome-header">
                                            {t('home.designerTea.title')}
                                        </h1>
                                        <br/>
                                        <p className="welcome-description">
                                            {t('home.designerTea.description')}
                                        </p>
                                        <Button variant="outline-primary view-more">View</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-1">
                        </div>
                    </div>
                </div>

                <div>
                    <div className="row col-lg-12 col-md-12 col-sm-12 col-12" style={{backgroundColor: "#e2e6ea", position: "relative", marginLeft: 0, top: 0}}>
                        <div className="col-lg-1 col-md-1 col-1">
                        </div>
                        <div className="col-lg-10 col-md-10 col-10"  style={isMobile ? {marginTop: 50,  marginBottom: 50, padding: 0} : {marginTop: 50,  marginBottom: 50}}>

                            <div className="about">
                                <div className="row">
                                    {
                                        isMobile?
                                            <div className="col-md-6 col-12" style={{marginBottom: 20}}>
                                                <Img className="homepage-image d-block w-100 br-20" imageHeight={200} name={"SLIDE_02.jpg"}/>
                                            </div>:
                                            <></>
                                    }
                                    <div className="col-md-6" style={{margin: 'auto'}}>
                                        <h1 className="welcome-header">
                                            {t('home.process.title')}
                                        </h1>
                                        <br/>
                                        <p className="welcome-description">
                                            {t('home.process.description')}
                                        </p>
                                        <Button variant="outline-primary view-more">View</Button>
                                    </div>
                                    {
                                        isBrowser?
                                            <div className="col-md-6">
                                                <Img className="homepage-image d-block w-100" imageHeight={400} name={"SLIDE_02.jpg"}/>
                                            </div>:
                                            <></>
                                    }
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-1 col-md-1 col-1">
                        </div>
                    </div>
                </div>

                <div className="parallax-effect " style={{backgroundImage: `url(${parallaxImage})`}}>
                    <div className="row col-lg-12 col-md-12 col-sm-12 parallax-image-overlay" style={{marginLeft: 0, top: 0}}>


                        <div className="col-lg-1 col-md-1">
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12" style={{marginBottom: 100,}}>



                            <div className="about">
                                <div className="row col-md-12">

                                </div>
                            </div>


                        </div>
                        <div className="col-lg-1 col-md-1">
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="row col-lg-12 col-md-12 col-sm-12 col-12" style={{backgroundColor: "#222", position: "relative", marginLeft: 0, top: 0}}>
                    <Footer/>
                </div>
            </div>

        </>
    )
}

