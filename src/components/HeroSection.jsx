import React, { useEffect } from 'react'
import Lottie from "lottie-react-web"
import animation from "../assets/animations/blocks_animation.json"
import "../css/HeroSection.css"

export const HeroSection = () => {

    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
          whichTextToShow();
        }, 3000);
      
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const whichTextToShow = () => {
        index++;
        if (index % 2 === 0) {
            document.getElementById("programmer_text").classList = "remove_element";
            document.getElementById("valtteri_text").classList = "show_element"
        } else {
            document.getElementById("valtteri_text").classList = "remove_element";
            document.getElementById("programmer_text").classList = "show_element"
        }
    }

  return (
    <div className='hero_section section'>
        <div className='container_default'>
            <div className='left_text'>
                <h1 className='hero_h'>
                    I'M
                    <p id='valtteri_text'>VALTTERI</p>
                    <p id='programmer_text' className='remove_element'>A PROGRAMMER</p>
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
