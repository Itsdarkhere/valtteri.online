import React from 'react'
import Lottie from "lottie-react-web"
import animation from "../assets/animations/cube_animation.json"
import "../css/HeroSection.css"

export const HeroSection = () => {
  return (
    <div className='hero_section section'>
        <div className='container_default'>
            <div className='left_text'>
                <h1 className='hero_h'>HI, I'M VALTTERI</h1>
                <div className='hero_p_container'>
                    <p className='hero_p'>
                        DeSo is a new layer-1 blockchain built from the ground up to scale decentralized 
                        social applications to one billion users
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
