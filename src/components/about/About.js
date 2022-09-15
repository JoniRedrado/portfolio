import React from 'react';
import './About.css';
import profilePicture from '../../media/profilePicture.jpg'

const About = () => {
    return (
        <div className='about-container'>

            <div className='about-desc'>
                <h3>Let me tell you something about me</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ullam expedita exercitationem tempore odit optio eius, sunt labore, veritatis laudantium earum ab consequuntur debitis necessitatibus tempora totam delectus voluptates culpa.</p>
            </div>
            <div className='about-img'>
                <img src={profilePicture} alt='ProfilePicture' />
            </div>

        </div>
    )
}

export default About