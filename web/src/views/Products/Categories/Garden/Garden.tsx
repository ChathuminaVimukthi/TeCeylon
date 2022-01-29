import React, {useState} from 'react'
import {Img} from "../../../Common/Img";
import {Breadcrumb, Button, Card, CardImg} from "react-bootstrap";
import dark_tea from "../../../../resources/images/dark_tea.jpg"
import estate_tea from "../../../../resources/images/SLIDE_03.jpg"
import Footer from "../../../Common/Footer";
import {NavLink, useLocation} from "react-router-dom";
import queryString from 'query-string'

export default function Garden() {
    const { search } = useLocation();
    const values = queryString.parse(search);
    const productLine = values.tea_range as string

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const [readMore, setReadMore] = useState(false)

    return <>
        <div className="fixed-div">
            <Img className="products-image" name={"products/garden/garden_cover_full.jpg"}/>
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
            <div className="row col-lg-12 col-md-12 col-sm-12" style={{backgroundColor: "#fff", position: "relative", marginLeft: 0, top: 0}}>


                <div className="col-lg-1 col-md-1">
                </div>
                <div className="col-lg-10 col-md-10 col-sm-12" style={{marginTop: 130,  marginBottom: 50,}}>

                    <div className="about">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="product-description">
                                    Just like all fine arts, tea offers a spectrum of characters like flavours,
                                    aromas and infusion to sooth the mind, body and soul of the tea drinker.
                                    As with wine, each tea has its own unique character ranging from origin to origin and region to region
                                    due to change in its terroir. All true teas come from the one plant Camelia sinensis.
                                    Tea plant is the only plant that offers this wide spectrum of taste, flavour, texture
                                    and variety based on the varying climatic and soil factors from one geographic location to another.
                                    The people of the ancient China called this the influence of heaven and earth as the tea bushes are watered by sky,
                                    nourished by rock and soil.
                                </p>
                                <p className="product-description" style={readMore ? {display: "block"}: {display: "none"}}>

                                </p>
                                {/*<Button variant="outline-primary view-more" onClick={() => setReadMore(!readMore)}>{readMore ? "Less" : "Read More"}</Button>*/}
                            </div>

                            <div className="col-md-6">
                                <Img className="homepage-image  d-block w-100" imageHeight={400} name={"paradise-regional.png"}/>
                            </div>


                        </div>
                    </div>


                </div>
                <div className="col-lg-1 col-md-1">
                </div>
            </div>

            <div>
                <div className="row col-lg-12 col-md-12 col-sm-12" style={{backgroundColor: "#fbfbfb", position: "relative", marginLeft: 0, top: 0}}>


                    <div className="col-lg-1 col-md-1">
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12"  style={{marginTop: 50,  marginBottom: 100,}}>

                        <div className="about">
                            <div className="row">
                                <div className="col-md-6">
                                    <Card className="bg-dark text-white" style={{border: 0, borderRadius: "0.25rem !important", cursor: "pointer"}}>
                                        <Card.Img src={estate_tea} alt="Card image" className="homepage-image  d-block w-100" style={{height: 400, borderRadius: "0.25rem !important"}}/>
                                        <Card.ImgOverlay>
                                            <Card.Title className="card-header">ESTATE</Card.Title>
                                            <Card.Text className="card-description">
                                                Just like all fine arts, tea offers a spectrum of characters like flavours,
                                                aromas and infusion to sooth the mind, body and soul of the tea drinker.
                                                As with wine, each tea has its own unique character ranging from origin to origin and region to region
                                                due to change in its terroir.
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>

                                {/*<div className="col-lg-2 col-md-">*/}
                                {/*</div>*/}

                                <div className="col-md-6">
                                    <Card className="bg-dark text-white" style={{border: 0, borderRadius: "0.25rem !important", cursor: "pointer"}}>
                                        <Card.Img src={dark_tea} alt="Card image" className="homepage-image  d-block w-100" style={{height: 400, borderRadius: "0.25rem !important"}}/>
                                        <Card.ImgOverlay>
                                            <Card.Title className="card-header">REGIONAL</Card.Title>
                                            <Card.Text className="card-description">
                                                Just like all fine arts, tea offers a spectrum of characters like flavours,
                                                aromas and infusion to sooth the mind, body and soul of the tea drinker.
                                                As with wine, each tea has its own unique character ranging from origin to origin and region to region
                                                due to change in its terroir.
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-lg-1 col-md-1">
                    </div>
                </div>
            </div>

            <div>
                <div className="row col-lg-12 col-md-12 col-sm-12" style={{backgroundColor: "#222", position: "relative", marginLeft: 0, top: 0}}>
                    <Footer/>
                </div>
            </div>
        </div>

    </>
}