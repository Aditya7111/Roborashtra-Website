'use client'
import React, {useEffect, useState} from "react";
import Loader from "./loaderAnimation";

const ImageLoader = ({children})=>{
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const images = document.querySelectorAll('image');
        const handleImageLoad = ()=>{
            setIsLoading(false);
        };

        if(images.length > 0){
            images.forEach((image)=>{
                image.addEventListener('load', handleImageLoad);
            });
        }
            else{
                setIsLoading(false)
            }
        }, []);

        return(
            <div>
                {isLoading ? (
                    <Loader />
                ): (
                    children
                )}
            </div>
        );
};

export default ImageLoader;