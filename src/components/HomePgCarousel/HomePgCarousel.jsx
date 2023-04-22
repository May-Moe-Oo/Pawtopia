import React from 'react';
import petsSpa from "../../images/petsSpa.jpg";
import Party from "../../images/Pets/Party.jpg";
import Playtime from "../../images/Pets/Playtime.jpg";
import PoolDay from "../../images/Pets/PoolDay.jpg";

function HomePgCarousel() {
    return (
        <div className="carousel w-full max-w-md text-center">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={petsSpa} className="w-full" alt="Spa"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={PoolDay} className="w-full" alt="Pool Day"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Playtime} className="w-full" alt="Play time"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Party} className="w-full" alt="Birthday Party"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default HomePgCarousel;