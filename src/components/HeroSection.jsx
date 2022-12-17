import React, { useEffect } from 'react'
import Lottie from "lottie-react-web"
import animation from "../assets/animations/blocks_animation.json"
import Typed from 'react-typed';
import "../css/HeroSection.css"

export const HeroSection = () => {
  return (
    <div className='hero_section section'>
        <div className='container_default'>
            <div className='left_text'>
                <h1 className='hero_h'>
                    I'M<br/>
                    <Typed
                    strings={['VALTTERI', 'A PROGRAMMER']}
                    typeSpeed={50}
                    loop
                />
                </h1>
                <div className='hero_p_container'>
                    <p className='hero_p'>
                        Honestly I'm not sure what I'm focused on, so many cool things to build
                    </p>
                </div>
            </div>
        </div>
        <div className='hero_animation_container'>
            <div className='hero_animation_wrapper'>
                <Lottie 
                options={{
                    animationData: animation
                }}  
                />
            </div>
        </div>
    </div>
  )
}
