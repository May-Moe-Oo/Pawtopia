import React from 'react';
import comfy from '../../images/rooms/comfy.png';
import vacation from '../../images/rooms/vacation.jpg';
import playground from '../../images/rooms/playground.jpg';
import Dailywalk from '../../images/rooms/dailywalk.png';
import ThreePoolDogs from '../../images/rooms/ThreePoolDogs.jpg';

function RoomPgCarousel() {
    return (
<div className="carousel h-96 text-center">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Dailywalk} className="w-full" alt="Daily walks"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">❮</a> 
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
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={ThreePoolDogs} className="w-full" alt="Three Dogs by the Pool"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={vacation} className="w-full" alt="Ready for Pawcation"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
}

export default RoomPgCarousel;