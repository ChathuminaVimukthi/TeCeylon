import React from "react";
import {Img} from "./Img";


export default function LoaderPage() {
    return <div className="content">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="loader-back">
                    <Img name={"loader.gif"}/>
                </div>
            </div>
        </div>
    </div>
}

