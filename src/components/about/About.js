import React from 'react';
import './About.css';
import profilePicture from '../../media/profilePicture.jpg'

const About = () => {
    return (
        <div className='about-container'>

            <div className='about-desc'>
                <h3>Let me tell you something about me</h3>
                <p>I'm a Fullstack Web Developer, with an emphasis on React.js. I have knowledge of HTML, CSS, JavaScript, NodeJS and mySQL. I am looking for my first job in the IT world, eager to learn and develop as a professional. Open to exploring new technologies.</p>
            </div>
            <div className='about-img'>
                <img src={profilePicture} alt='ProfilePicture' />
            </div>

        </div>
    )
}

export default About