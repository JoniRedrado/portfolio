import React from "react";
import './Slider.css'


const slidesInfo = [
    {
        src: "https://i.ibb.co/r0QQ7GS/tateti.png",
        alt:"Project 1",
        desc:"TA-TE-TI",
        link:"https://tictactoe-jr.web.app/"
    },
    {
        src: "https://i.ibb.co/tM16YtJ/countries-wiki.png",
        alt:"Project 2",
        desc:"Countries Wiki",
        link:"https://countries-wiki-jr.web.app/"
    },
    {
        src: "https://i.ibb.co/YZ4Cwqs/todolist.png",
        alt:"Project 3",
        desc:"To do list",
        link: "https://to-do-list-jr.web.app/"
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