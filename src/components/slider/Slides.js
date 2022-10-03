import React from "react";
import './Slider.css'


const slidesInfo = [
    {
        src: "https://i.ibb.co/r0QQ7GS/tateti.png",
        alt:"Project 1",
        desc:"TA-TE-TI",
        link:"https://tatetijr.netlify.app"
    },
    {
        src: "https://i.ibb.co/tM16YtJ/countries-wiki.png",
        alt:"Project 2",
        desc:"Countries Wiki",
        link:"https://countrieswiki.herokuapp.com"
    },
    {
        src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt:"Project 3",
        desc:"To do list"
    }
]

const Slides = slidesInfo.map( slide => (
    
        <a href={slide.link} target="_blank" rel="noreferrer" className="slide-container">
            <img src={slide.src} alt={slide.alt} />
            <div className="slide-desc">
                <span>{slide.desc}</span>
            </div>
        </a>
    
))

export default Slides;