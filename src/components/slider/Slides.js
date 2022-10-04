import React from "react";
import './Slider.css'


const slidesInfo = [
    {
        src: "https://i.ibb.co/r0QQ7GS/tateti.png",
        alt:"Project 1",
        desc:"TA-TE-TI",
        link:"https://github.com/JoniRedrado/tic-tac-toe"
    },
    {
        src: "https://i.ibb.co/tM16YtJ/countries-wiki.png",
        alt:"Project 2",
        desc:"Countries Wiki",
        link:"https://github.com/JoniRedrado/countries-wiki"
    },
    {
        src: "https://i.ibb.co/YZ4Cwqs/todolist.png",
        alt:"Project 3",
        desc:"To do list",
        link: "https://github.com/JoniRedrado/todolist-react"
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