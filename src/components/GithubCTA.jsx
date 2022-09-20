import React from 'react'
import "../css/GithubCTA.css"

export const GithubCTA = () => {
  return (
    <div className='section'>
        <div className='container_default'>
            <div className='gh_cta'>
                <div className='gh_cta_grid'>
                    <div className='gh_text-container'>
                        <h2 className='h2'>Still not impressed?</h2>
                        <p className='p'>Check out my github, it contains all of my projects!</p>
                    </div>
                    <div className='gh_cta_grid_right'>
                        <a href="aa" className='basic_button'>Open Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
