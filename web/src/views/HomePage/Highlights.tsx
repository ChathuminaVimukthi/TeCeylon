import React, {useState} from 'react'
import {Img} from "../Common/Img";
import {Button} from "react-bootstrap";
import {isBrowser, isMobile} from 'react-device-detect';
import {MdOutlinePlayArrow} from 'react-icons/md'

export default function Highlights() {

    const [selected, setSelected] = useState(0)
    const highlights = [
        {
            image: "SLIDE_01.jpg",
            description: "Lorem ipsum dolor sit amet.",
            link: "#"
        },
        {
            image: "SLIDE_02.jpg",
            description: "Lorem ipsum dolor sit amet.",
            link: "#"
        },
        {
            image: "SLIDE_03.jpg",
            description: "Lorem ipsum dolor sit amet.",
            link: "#"
        },
        {
            image: "SLIDE_04.jpg",
            description: "Lorem ipsum dolor sit amet.",
            link: "#"
        }
    ]

    return <div>
        <div className="row col-lg-12 col-md-12" style={isMobile ? {backgroundColor: "#ffffff", margin: 0, padding: 0}:
            {height: 500, backgroundColor: "#ffffff", margin: 0}}>
            {isBrowser ? highlights.map((e, i) => {
                    return <div
                        className={selected === i ? "col-lg-9 col-md-9 highlight-col-9" : "col-lg-1 col-md-1 highlight-col-1"}
                        style={selected === i ? {padding: 5, position: "relative"} : {
                            padding: 5,
                            position: "relative",
                            cursor: "pointer"
                        }} onClick={() => setSelected(i)}>
                        <div className="highlight-image-overlay" style={{height: 500, backgroundColor: "#ffffff"}}>
                            <Img className="highlight-image d-block w-100"
                                 name={e.image}
                            />
                            {selected === i ?
                                <>
                                    <p className="highlight-text">{e.description}</p>
                                    <Button variant="outline-primary highlight-view-more">View</Button>
                                    <p className="highlight-sub-text">{i + 1}</p>
                                </>
                                : <></>
                            }
                        </div>
                    </div>
                }) :
                <></>
            }

            {isMobile ?
                <div className="container-fluid" style={{padding: 0, overflow: 'hidden'}}>
                    <div className="highlight-image-overlay" style={{height: 250, backgroundColor: "#ffffff"}}>
                        <Img className="highlight-image d-block w-100"
                             name={highlights[selected].image}
                        />
                        <Button variant="outline-primary highlight-view-more-sm">
                            <MdOutlinePlayArrow/>
                        </Button>
                        <p className="highlight-text-sm">{highlights[selected].description}</p>
                    </div>
                    <div className="row flex-nowrap" style={{overflowY: 'hidden'}}>
                        {highlights.map((e, i) => {
                            return <div className="col-8"  onClick={() => setSelected(i)}>
                                <div className="row" style={{height: 100, backgroundColor: "#222222"}}>
                                    <div className="col-6" style={{padding: 5, overflowY: 'hidden'}}>
                                        <Img className="highlight-image d-block w-100"
                                             name={e.image}
                                        />
                                    </div>
                                    <div className="col-6" style={{padding: '5px 5px 0px 0px', margin: 'auto',
                                        textAlign: 'left',
                                        overflowY: 'hidden'}}>
                                        <p className="highlight-text-xsm">{e.description}</p>
                                    </div>

                                </div>
                            </div>
                        })}
                    </div>
                </div>:
                <></>
            }
        </div>
    </div>

}
