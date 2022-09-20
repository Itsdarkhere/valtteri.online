import React from 'react'
import "../css/Projects.css"

export const Projects = () => {
  return (
    <div className='section section_projects'>
        <div className='container_default'>
            <h2 className='h2'>Recent Programming Projects</h2>
            <div className='projects_grid'>
                {Array.from({ length: 6 }, (_, i) => 
                    <div key={i} className='project_card'>
                        <img 
                        className='project_icon'
                        src="https://uploads-ssl.webflow.com/6148aea00f7f90ad88e373a0/6148aea00f7f90087ae373ec_deso-features-profiles.svg" 
                        alt="project icon" 
                        />
                        <h3 className='h3'>Social Tokens</h3>
                        <p className='p'>
                            Every profile created on DeSo can have a social token attached to it. Social tokens on 
                            DeSo earn cashflows from NFT sales, and soon all forms of creator monetization.
                        </p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
