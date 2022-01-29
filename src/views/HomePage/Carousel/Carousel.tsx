import React, {useEffect, CSSProperties, useState} from "react"
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Img} from "../../Common/Img";
import {Button, Carousel} from "react-bootstrap";
import {Animated} from "react-animated-css";

export default function CarouselItem() {
    const {t} = useTranslation();
    let myCarousel: any = document.getElementsByClassName("carousel-indicators");
    const [lastSelectedIndicator, setLastSelectedIndicator] = useState(-1);
    const carouselList = [
        {
            image: 'SLIDE_03.jpg',
            captionOne: 'home.slider.capOne',
            captionTwo: 'home.slider.capTwo'
        },
        {
            image: 'SLIDE_02.jpg',
            captionOne: 'home.slider.capOne',
            captionTwo: 'home.slider.capTwo'
        },
        {
            image: 'SLIDE_01.jpg',
            captionOne: 'home.slider.capOne',
            captionTwo: 'home.slider.capTwo'
        }
    ]

    useEffect(() => {
        myCarousel = document.getElementsByClassName("carousel-indicators")
        let childNodes = myCarousel[0].childNodes;
        childNodes.forEach((e: any) => {
            let span = document.createElement('span')
            e.appendChild(span);
        })
        onLoadCarousel(0, "")
    }, [])

    useEffect(() => {
        myCarousel = document.getElementsByClassName("carousel-indicators")
        if (lastSelectedIndicator !== -1) {
            for (let i = 0; i < myCarousel[0].childNodes.length; i++) {
                if (lastSelectedIndicator !== i) {
                    myCarousel[0].childNodes[i].firstChild.style.width = "0";
                    myCarousel[0].childNodes[i].style.width = "6px";
                }
            }

        }
    }, [lastSelectedIndicator])


    function onLoadCarousel(selectedIndex: number, e: any) {
        let i = 0;
        myCarousel[0].childNodes[selectedIndex].style.width = "100px";
        setLastSelectedIndicator(selectedIndex)
        let length = myCarousel[0].childNodes.length
        let intervalID = setInterval(function () {
            i++;
            if (myCarousel !== null && myCarousel[0] !== undefined) {
                if (myCarousel[0].childNodes[selectedIndex].classList.contains("active")) {
                    if (i <= 100) {
                        myCarousel[0].childNodes[selectedIndex].firstChild.style.width =
                            i + "%";
                    }
                }
            } else {
                clearInterval(intervalID);
            }

        }, 50);
    }

    return (
        <Carousel onSelect={onLoadCarousel} id={"carouselExampleIndicators"} fade pause={false} controls={false}>
            {carouselList.map((e) => {
                return <Carousel.Item interval={5000}>
                    <div className="overlay">
                        <Img
                            className="image-container d-block w-100"
                            name={e.image}
                        />
                    </div>

                    <Carousel.Caption>
                        <div className="row">
                            {/*<div className="col-lg-1">*/}
                            {/*</div>*/}
                            <div className="col-lg-7 col-md-12 col-sm-12">
                                <h1 className="slider-caption-light">{t(e.captionOne)}</h1>
                                <h1 className="slider-caption-green">{t(e.captionTwo)}</h1>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 item-image-container">
                                <Animated animationIn="fadeInUp" className="item-image" animationOut="fadeOut"
                                          isVisible={true}>
                                    <Img className="item-image" name={"item_01.png"}/>
                                </Animated>
                            </div>
                            {/*<div className="col-lg-1">*/}
                            {/*</div>*/}
                        </div>
                        <div className="row">
                            {/*<div className="col-lg-1">*/}
                            {/*</div>*/}
                            <div className="col-lg-1 col-md-12 col-sm-12">
                                <Button variant="outline-primary buy-it-now">Shop now</Button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            })}
        </Carousel>
    )
}