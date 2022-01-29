import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import {useLocation} from "react-router-dom";
import {Img} from "../../../Common/Img";
import {Breadcrumb, Card, Col} from "react-bootstrap";
import Footer from "../../../Common/Footer";
import { Badge } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default function Range() {
    const { search } = useLocation();
    const values = queryString.parse(search);
    const productLine = values.name as string

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    const [teaRange, setTeaRange] = useState(productLine)

    useEffect(() => {
        setTeaRange(productLine)
        console.log(productLine)
    },[productLine])

    function handleOnClick(range: string){
        setTeaRange(range);
    }

    let estateProducts = [
        {
            id: "g-01",
            name: "LYCHEE WITH ROSE & ALMOND",
            description: "A wonderfully aromatic marriage of flavours",
            mainImage: "products/garden/estate/e_01/estate_01_01.png",
            images: ["products/garden/estate/e_01/estate_01_02.png",
                "products/garden/estate/e_01/estate_01_03.png", "products/garden/estate/e_01/estate_01_04.png"]
        },
        {
            id: "g-02",
            name: "LYCHEE WITH ROSE & ALMOND",
            description: "A wonderfully aromatic marriage of flavours",
            mainImage: "products/garden/estate/e_01/estate_01_01.png",
            images: ["products/garden/estate/e_01/estate_01_02.png",
                "products/garden/estate/e_01/estate_01_03.png", "products/garden/estate/e_01/estate_01_04.png"]
        },
        {
            id: "g-03",
            name: "LYCHEE WITH ROSE & ALMOND",
            description: "A wonderfully aromatic marriage of flavours",
            mainImage: "products/garden/estate/e_01/estate_01_01.png",
            images: ["products/garden/estate/e_01/estate_01_02.png",
                "products/garden/estate/e_01/estate_01_03.png", "products/garden/estate/e_01/estate_01_04.png"]
        },
        {
            id: "g-04",
            name: "LYCHEE WITH ROSE & ALMOND",
            description: "A wonderfully aromatic marriage of flavours",
            mainImage: "products/garden/estate/e_01/estate_01_01.png",
            images: ["products/garden/estate/e_01/estate_01_02.png",
                "products/garden/estate/e_01/estate_01_03.png", "products/garden/estate/e_01/estate_01_04.png"]
        }
    ]

    let regionProducts = [
        {
            id: "g-05",
            name: "BLUEBERRY & POMEGRANATE",
            description: "Two fruits mingle harmoniously with the brisk Ceylon Pekoe",
            mainImage: "products/garden/region/r_01/region_01_01.png",
            images: ["products/garden/region/r_01/region_01_02.png",
                "products/garden/region/r_01/region_01_03.png", "products/garden/region/r_01/region_01_04.png"]
        },
        {
            id: "g-06",
            name: "BLUEBERRY & POMEGRANATE",
            description: "Two fruits mingle harmoniously with the brisk Ceylon Pekoe",
            mainImage: "products/garden/region/r_01/region_01_01.png",
            images: ["products/garden/region/r_01/region_01_02.png",
                "products/garden/region/r_01/region_01_03.png", "products/garden/region/r_01/region_01_04.png"]
        },
        {
            id: "g-07",
            name: "BLUEBERRY & POMEGRANATE",
            description: "Two fruits mingle harmoniously with the brisk Ceylon Pekoe",
            mainImage: "products/garden/region/r_01/region_01_01.png",
            images: ["products/garden/region/r_01/region_01_02.png",
                "products/garden/region/r_01/region_01_03.png", "products/garden/region/r_01/region_01_04.png"]
        },
        {
            id: "g-08",
            name: "BLUEBERRY & POMEGRANATE",
            description: "Two fruits mingle harmoniously with the brisk Ceylon Pekoe",
            mainImage: "products/garden/region/r_01/region_01_01.png",
            images: ["products/garden/region/r_01/region_01_02.png",
                "products/garden/region/r_01/region_01_03.png", "products/garden/region/r_01/region_01_04.png"]
        }
    ]

    const [prodList, setProdList] = useState(estateProducts)

    useEffect(() => {
        if(teaRange == "region") {
            setProdList(regionProducts)
        }
        if(teaRange == "estate") {
            setProdList(estateProducts)
        }
    }, [teaRange])



    function onMouseIn(src: string, index: number) {
        let arr = estateProducts.slice();
        if(teaRange === "estate") {
            arr = estateProducts.slice();
        }
        if(teaRange === "region") {
            arr = regionProducts.slice();
        }
        arr[index].mainImage = src
        setProdList(arr)
    }

    function onMouseOut() {
        if(teaRange === "estate") {
            setProdList(estateProducts)
        }
        if(teaRange === "region") {
            setProdList(regionProducts)
        }
    }

    return <>
        <div className="fixed-div">
            <Img className="products-image" name={"products/garden/garden_cover_full.jpg"}/>
        </div>

        <div className="site-content-products-estate" style={{height: 0, marginLeft: 0, position: 'sticky', top: 35}}>
            <div className="row col-lg-12 col-md-12 col-sm-12" style={{margin: 0}}>
                <div className="col-lg-1 col-md-1 col-sm-1 col-1" style={{ height: 80, backgroundColor: "#fff", opacity: "0.98"}}>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-4" style={{ height: 80, backgroundColor: "#fff", opacity: "0.98"}}>
                    <div className="row" style={{marginTop: 25}}>
                        <div className="col-md-6 col-6">
                            <div style={{height: 30, backgroundColor: "#ededed", textAlign: 'center'}}>
                                <Badge onClick={() => handleOnClick("estate")} style={{cursor: 'pointer'}} className="badge-cus" bg={teaRange==="estate"? "dark": "secondary"}>Region</Badge>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">

                        </div>
                    </div>

                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 logo-header-container" style={{ height: 80, backgroundColor: "#fff", opacity: "0.98"}}>
                    {/*<Img id="te-logo" className={logoHeaderIsTop ? "logo-header-top mx-auto d-block" : "logo-header mx-auto d-block"} name={"logo/black/logo_header.png"}/>*/}
                    <Img id="te-logo" className={"logo-header-top mx-auto d-block"} name={"logo/black/logo_header.png"}/>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 col-4" style={{ height: 80, backgroundColor: "#fff", opacity: "0.98"}}>
                    <div className="row" style={{marginTop: 25}}>
                        <div className="col-md-6 col-6">

                        </div>
                        <div className="col-md-6 col-6">
                            <div style={{height: 30, backgroundColor: "#ededed", textAlign: 'center'}}>
                                <Badge onClick={() => handleOnClick("region")} style={{cursor: 'pointer'}} className="badge-cus" bg={teaRange==="region"? "dark": "secondary"}>Estate</Badge>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-1" style={{ height: 80, backgroundColor: "#fff", opacity: "0.98"}}>
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
                            <div className="col-md-8">
                                <Img className="homepage-image  d-block w-100" imageHeight={400} imageWidth={400} name={"paradise-regional.png"}/>
                            </div>

                            <div className="col-md-4">
                                <p className="product-description">
                                    Just like all fine arts, tea offers a spectrum of characters like flavours,
                                    aromas and infusion to sooth the mind, body and soul of the tea drinker.
                                    As with wine, each tea has its own unique character ranging from origin to origin and region to region
                                    due to change in its terroir.
                                </p>

                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-lg-1 col-md-1">
                </div>
            </div>

            <div>
                <div className="row col-lg-12 col-md-12 col-sm-12" style={{backgroundColor: "#d54043", position: "relative", marginLeft: 0, top: 0}}>


                    {/*<div className="col-lg-1 col-md-1">*/}
                    {/*</div>*/}
                    <div className="col-lg-12 col-md-12 col-sm-12"  style={{marginTop: 50,  marginBottom: 50,}}>
                        <Row xs={1} md={4} className="g-4">
                            {prodList.map((e, i) => (
                                <Col>
                                    <div className="card product-card">
                                        <div style={{padding: 15}}>
                                            <Img name={e.mainImage} className="card-img-top product-card-image"/>
                                        </div>

                                        <div className="row product-card-hidden">
                                            {e.images.map((img, j) => {
                                                return <div onMouseEnter={() => onMouseIn(img, i)}
                                                            onMouseLeave={() => onMouseOut()}
                                                            className={j == 0 ? "col-md-4 col-sm-4 col-4 d-flex justify-content-end" :
                                                                j == 1 ? "col-md-4 col-sm-4 col-4 d-flex justify-content-center" :
                                                                    "col-md-4 col-sm-4 col-4 d-flex justify-content-start"}>
                                                    <Img name={img} imageWidth={80} imageHeight={80}/>
                                                </div>
                                            })
                                            }
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{color: "#fff"}}>{e.name}</h5>
                                            <p className="card-text" style={{color: "#fff", fontWeight: 300}}>{e.description}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </div>
                    {/*<div className="col-lg-1 col-md-1">*/}
                    {/*</div>*/}
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