import React from 'react'
import "../css/Socials.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export const Socials = () => {
  return (
    <div className='section'>
        <div className='container_medium'>
            <div className='socials_cta'>
                <div className='socials_heading_box'>
                    <h2 className='h2'>My Socials</h2>
                </div>
                <div className='socials_buttons_grid'>
                    <div className='social_cta_button'>
                        <a className='basic_button' href="https://github.com/Itsdarkhere" target="_blank" rel="noreferrer">
                            <FaGithub style={{marginRight: "10"}} />  
                            Github
                        </a>
                    </div>
                    <div className='social_cta_button'>
                        <a className='main_button w_button' href="https://www.linkedin.com/in/valtteri-juvonen-50453516a" target="_blank" rel="noreferrer">
                            <FaLinkedin style={{marginRight: "10"}} />    
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
