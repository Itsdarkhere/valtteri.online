import React from 'react'
import "../css/WorkHistory.css"

export const WorkHistory = () => {
  return (
    <div className='section section_large_padding'>
        <div className='container_small'>
            <h2 className='h2' style={{marginBottom: "40px"}}>Work Experience</h2>
            <div className='wh_card wh_card_top'>
                <img 
                className='wh_card_img'
                src="https://uploads-ssl.webflow.com/6148aea00f7f90ad88e373a0/6148aea00f7f90c906e373e8_deso-icon-data-on-chain.svg"
                alt="supernovas logo" 
                />
                <div>
                    <h2 className='h2'>CTO</h2>
                    <p className='wh_card_description'>
                        Every single line that powers the DeSo blockchain is 100% open-source, unlike 
                        traditional social media’s closed-source walled-gardens.
                    </p>
                </div>
            </div>
            <div className='wh_card'>
                <img 
                className='wh_card_img'
                src="https://uploads-ssl.webflow.com/6148aea00f7f90ad88e373a0/6148aea00f7f90c906e373e8_deso-icon-data-on-chain.svg"
                alt="supernovas logo" 
                />
                <div>
                    <h2 className='h2'>Full Stack Developer</h2>
                    <p className='wh_card_description'>
                        Every single line that powers the DeSo blockchain is 100% open-source, unlike 
                        traditional social media’s closed-source walled-gardens.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
