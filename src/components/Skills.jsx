import React from 'react'
import "../css/Skills.css"

export const Skills = () => {
  return (
    <div className='section skills_section'>
        <div className='container_default'>
            <div className='text_center'>
                <h2 className="h2" style={{marginBottom: 0}}>Skills and tools</h2>
            </div>
            <div className='container_small'>
                <div className='skills_grid'>
                    {Array.from({ length: 9}, (_, i) =>
                        <div key={i} className='skill_card'>
                            <img 
                            className='skill_icon' 
                            src="https://uploads-ssl.webflow.com/6148aea00f7f90ad88e373a0/6148aea00f7f90821ee373fe_deso-holders-icon-blockchange.svg"
                            alt="skill_icon" 
                            />
                            <p className='skill_text'>Blockchange</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}