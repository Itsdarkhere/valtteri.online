import React from 'react'
import "../css/Socials.css"

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
                        <a className='basic_button' href="aaa">Github</a>
                    </div>
                    <div className='social_cta_button'>
                        <a className='main_button w_button' href="aaa">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
