import React, {useState} from 'react'
import {Img} from "../Common/Img";
import {Button, Card, CardImg, Carousel} from "react-bootstrap";
import Slider from "react-slick";
import back from "../../resources/images/products/card/Te-bliss-mint.jpg"

interface ProductProps {
    title: any,
    images: string[],
    description: any,
    priceRange: any,
    backDrop: any,
}

export default function ProductElement(props: ProductProps) {
    const {title, images, description, priceRange, backDrop, ...other} = props

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        speed: 500,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: "linear",
    };

    return <>
        <div className="">
            <Card style={{zIndex: -1, margin: 10, borderRadius: 20, border: 0}}>
                <Card.Body
                    style={{backgroundImage: `url(/img/cards/Te-bliss-mint.jpg)`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderRadius: 20,
                        padding: 0
                    }}>

                    <div className="card-overlay">
                        <Card.Title >{title}</Card.Title>
                        <div style={{marginTop: 10, marginBottom: 10, position: 'relative', zIndex: 10}}>
                            <Slider {...settings}>
                                {images.map((e,i) => {
                                    return <Img
                                        className="center-img"
                                        name={e}
                                        imageHeight={150}
                                        imageWidth={150}
                                    />
                                })}
                            </Slider>

                        </div>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </div>


                </Card.Body>
            </Card>
        </div>
    </>
}