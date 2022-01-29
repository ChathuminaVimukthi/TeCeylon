import React, {useEffect, useState, createRef, useRef} from 'react'
import ProductElement from "./ProductElement";
import {MdNavigateBefore, MdNavigateNext} from "react-icons/md";
import Footer from "../Common/Footer";
import Slider from "react-slick";
import {Img} from "../Common/Img";

export default function TeaProducts() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const productList = [
        {
            productName: "Té Garden",
            productPhotoList: ['products/garden/estate/e_01/estate_01_01.png', 'products/garden/region/r_01/region_01_01.png'],
            productDescription: "Just like all fine arts, tea offers a spectrum of characters like flavours, " +
                "aromas and infusion to sooth the mind, body and soul of the tea drinker. As with wine, " +
                "each tea has its own unique character ranging from origin to origin and region to region due to change " +
                "in its terroir. All true teas come from the one plant Camelia sinensis.",
            priceRange: "$23.00",
            backDrop: "/img/cards/Te-bliss-mint.jpg"
        },
        {
            productName: "Té Green",
            productPhotoList: ['products/garden/estate/e_01/estate_01_01.png', 'products/garden/region/r_01/region_01_01.png'],
            productDescription: "Just like all fine arts, tea offers a spectrum of characters like flavours, " +
                "aromas and infusion to sooth the mind, body and soul of the tea drinker. As with wine, " +
                "each tea has its own unique character ranging from origin to origin and region to region due to change " +
                "in its terroir. All true teas come from the one plant Camelia sinensis.",
            priceRange: "$23.00",
            backDrop: "/img/cards/Te-bliss-mint.jpg"
        },
        {
            productName: "Bliss",
            productPhotoList: ['products/garden/estate/e_01/estate_01_01.png', 'products/garden/region/r_01/region_01_01.png'],
            productDescription: "Just like all fine arts, tea offers a spectrum of characters like flavours, " +
                "aromas and infusion to sooth the mind, body and soul of the tea drinker. As with wine, " +
                "each tea has its own unique character ranging from origin to origin and region to region due to change " +
                "in its terroir. All true teas come from the one plant Camelia sinensis.",
            priceRange: "$23.00",
            backDrop: "/img/cards/Te-bliss-mint.jpg"
        },
        {
            productName: "Bliss Exquisite",
            productPhotoList: ['products/garden/estate/e_01/estate_01_01.png', 'products/garden/region/r_01/region_01_01.png'],
            productDescription: "Just like all fine arts, tea offers a spectrum of characters like flavours, " +
                "aromas and infusion to sooth the mind, body and soul of the tea drinker. As with wine, " +
                "each tea has its own unique character ranging from origin to origin and region to region due to change " +
                "in its terroir. All true teas come from the one plant Camelia sinensis.",
            priceRange: "$23.00",
            backDrop: "/img/cards/Te-bliss-mint.jpg"
        },
        {
            productName: "Item 5",
            productPhotoList: ['products/garden/estate/e_01/estate_01_01.png', 'products/garden/region/r_01/region_01_01.png'],
            productDescription: "Just like all fine arts, tea offers a spectrum of characters like flavours, " +
                "aromas and infusion to sooth the mind, body and soul of the tea drinker. As with wine, " +
                "each tea has its own unique character ranging from origin to origin and region to region due to change " +
                "in its terroir. All true teas come from the one plant Camelia sinensis.",
            priceRange: "$23.00"
        },
        {
            productName: "Item 6",
            productPhotoList: ['products/garden/estate/e_01/estate_01_01.png', 'products/garden/region/r_01/region_01_01.png'],
            productDescription: "Just like all fine arts, tea offers a spectrum of characters like flavours, " +
                "aromas and infusion to sooth the mind, body and soul of the tea drinker. As with wine, " +
                "each tea has its own unique character ranging from origin to origin and region to region due to change " +
                "in its terroir. All true teas come from the one plant Camelia sinensis.",
            priceRange: "$23.00",
            backDrop: "/img/cards/Te-bliss-mint.jpg"
        }
    ]

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        arrows: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const customSlider: any = useRef();

    function next() {
        // @ts-ignore
        customSlider.current.slickNext();
    }
    function previous() {
        // @ts-ignore
        customSlider.current.slickPrev();
    }

    // @ts-ignore
    return <>
        <div style={{backgroundColor: "#e2e6ea"}}>
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

            <div className="" style={{backgroundColor: "#fff", position: "relative", marginLeft: 0, top: 0}}>
                <div style={{overflow: 'hidden', marginTop: 80, paddingTop: 30}}>
                    <Slider ref={customSlider} {...settings}>
                        {
                            productList.map((el) =>
                                <div className="">
                                    <ProductElement title={el.productName}
                                                    description={el.productDescription}
                                                    images={el.productPhotoList}
                                                    priceRange={el.priceRange}
                                                    backDrop={el.backDrop}
                                    />
                                </div>
                            )
                        }
                    </Slider>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-1 col-sm-1 ">
                            <MdNavigateBefore style={{marginTop: -25, marginBottom: 30, cursor: "pointer",
                                backgroundColor: "#dedede", borderRadius: "50%"}}
                                              className="button-shadow"
                                              onClick={() => previous()}
                                              size={50}/>
                        </div>
                        <div className="col-md-10 col-sm-10">

                        </div>
                        <div className="col-md-1 col-sm-1 ">
                            <MdNavigateNext style={{marginTop: -25, marginBottom: 30, cursor: "pointer",
                                backgroundColor: "#dedede", borderRadius: "50%"}}
                                            className="button-shadow"
                                            onClick={() => next()}
                                            size={50}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div>
            <div className="row col-lg-12 col-md-12 col-sm-12"
                 style={{backgroundColor: "#222", position: "relative", marginLeft: 0, top: 0}}>
                <Footer/>
            </div>
        </div>
    </>
}