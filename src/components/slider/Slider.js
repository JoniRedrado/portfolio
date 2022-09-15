import React from 'react';
import Carousel, { autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';
import './Slider.css'

const Slider = () => {
    return (
        <div className='carousel-container'>
            <div className='carousel-title'>
                <h2>My Projects</h2>
            </div>
            
            <Carousel 
                plugins={[
                    'arrows',
                    'clickToChange',
                    'infinite',
                    'centered',
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 3
                        }
                    },
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2000,
                        }
                    },
                    
                ]}
                
                animationSpeed={200}

                slidesPerPage={1}
                offset={50}
                itemWidth={400}
                slides={Slides}

                breakpoints={{
                    960: {
                        plugins:[
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 1
                                }
                            },
                            'infinite',
                            'centered'
                        ],
                        itemWidth: 250,
                    }   
                        
                }}
            />
        </div>
    )
}

export default Slider