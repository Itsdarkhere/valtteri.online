import React from 'react'
import "../css/Recommendation.css"

export const Recommendation = () => {
  return (
    <div className='container_default recommendation_section section'>
        <h2 className='h2'>Recommendation</h2>
        <div className='recommendation_container'>
            {/* <img 
            className='recommendation_img'
            src="https://uploads-ssl.webflow.com/6148aea00f7f90ad88e373a0/62c5e390314ac160c47cc9f1_Screen%20Shot%202022-07-06%20at%201.33.21%20PM.png" 
            alt="recommender"
            /> */}
            <div className='recommendation_text_div'>
                <h3 className='h3' style={{fontSize: "32px"}}>Chiara Wilden</h3>
                <p className='p' style={{fontWeight: "bold", marginBottom: "42px"}}>
                    "It was an absolute pleasure working with Valtteri. Among his greatest strengths are creative 
                    problem solving and execution. He is relentlessly hardworking, while also remaining reasonable in 
                    his expectation of the team. As a leader, he posesses the rare, but highly admirable qualities of 
                    humbleness, quite confidence and authenticity. Communicating with him is both easy and enjoyable! 
                    Valtteri is without a doubt a highly valuable asset to any team."
                </p>
                {/* <a href='aaaa' className='main_button w_button'>Check it out</a> */}
            </div>
        </div>
    </div>
  )
}
