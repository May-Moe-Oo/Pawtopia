import React from 'react';
import comfy from '../../images/comfy.png';
import playground from '../../images/playground.jpg';
import Dailywalks from '../../images/dailywalks.jpeg';

function RoomPgCarousel(props) {
    return (
<div className="carousel h-full text-center">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Dailywalks} className="w-full" alt="Daily walks"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={playground} className="w-full" alt="Playground"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={comfy} className="w-full" alt="Good Night Rest"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    );
}

export default RoomPgCarousel;