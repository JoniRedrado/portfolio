import React from 'react';
import './Cover.css';
import coverVideo from '../../media/cover-video.mp4'

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted />
            <h1>Jonathan Redrado</h1>
            <p>Fullstack Web Developer</p>
        </div>
    )
}

export default Cover