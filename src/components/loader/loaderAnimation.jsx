'use client';
import Image from 'next/image';
import React from 'react';
import key from "../../images/loaderLogo.png";
import "./loader.css"



const loader = ()=>{
    return(
        <div className="loader">
            <Image src={key} alt="keyImage" />
        <div className="bottomLoader">
            <div></div>
            <div></div>
            <div></div>
        </div>
            </div>

    )
}

export default loader;