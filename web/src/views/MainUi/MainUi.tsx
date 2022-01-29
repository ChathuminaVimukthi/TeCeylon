import React, {useEffect, useState} from "react"

import {useDispatch} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {history} from '../../router/router'
import HomePage from "../HomePage/HomePage";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./../../resources/css/styles.css"
import "./../../resources/css/animate.css"
import AboutUs from "../AboutUs/AboutUs";
import {Header} from "../Common/Header";
import {MainHeader} from "../Common/MainHeader";
import { isBrowser, isMobile } from 'react-device-detect';
import {SideNavBar} from "../Common/SideNavBar";
import Garden from "../Products/Categories/Garden/Garden";
import TeaProducts from "../Products/Products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Range from "../Products/Categories/Garden/Range";

export function MainUi() {

    const dispatch = useDispatch();

    return (
        <>
            <ConnectedRouter history={history}>

                <div className="wrapper">

                    <div>
                        {isMobile ?
                            <SideNavBar/> :
                            <>
                                <MainHeader/>
                            </>
                        }
                        <Switch>
                            <Route exact path="/home" render={() => <HomePage/>}/>
                            <Route exact path="/about" render={() => <AboutUs/>}/>
                            <Route exact path="/products" render={() => <TeaProducts/>}/>
                            <Route exact path="/products/te-garden" render={() => <Garden />}/>
                            <Route exact path="/products/te-garden/:tea_range" render={() => <Range />}/>
                            <Route exact path="/*" render={() => <HomePage/>}/>
                        </Switch>

                    </div>

                </div>

            </ConnectedRouter>

        </>
    )
}
