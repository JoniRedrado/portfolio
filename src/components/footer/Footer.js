import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Your name</h1>
                <p>Based in Your City</p>
            </div>
            <div className='footer-contact'>
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                    Design by Your Name
                </div>
                <div className='sns-links'>
                    <a href='www.linkedin.com/in/jonathan-redrado-3838a3206' target="_blank" rel="noreferrer">
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/JoniRedrado' target="_blank" rel="noreferrer">
                        <i className='fab fa-brands fa-github'></i>
                    </a>
                    <a href='https://facebook.com' target="_blank" rel="noreferrer">
                        <i className='fab fa-facebook facebook'></i>
                    </a>
                </div>
            </div>    
        </footer>
    )
}

export default Footer