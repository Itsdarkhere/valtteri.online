import React from 'react'
import "../css/Recommendation.css"
import { useIntersectionObserver } from "../hooks/intersection-observer.ts"

export const Recommendation = () => {

  const onObserveAnimate = () => {
    let element = ref.current;
    element.classList.add("recommendation_animation")
}

const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <div className='container_default recommendation_section section'>
        <h2 className='h2'>Recommendation</h2>
        <div className='recommendation_container'>
            <div ref={ref} className='recommendation_text_div'>
                <h3 className='h3' style={{fontSize: "32px"}}>Chiara Wilden</h3>
                <p className='p' style={{fontWeight: "bold", marginBottom: "42px"}}>
                    "It was an absolute pleasure working with Valtteri. Among his greatest strengths are creative 
                    problem solving and execution. He is relentlessly hardworking, while also remaining reasonable in 
                    his expectation of the team. As a leader, he posesses the rare, but highly admirable qualities of 
                    humbleness, quite confidence and authenticity. Communicating with him is both easy and enjoyable! 
                    Valtteri is without a doubt a highly valuable asset to any team."
                </p>
            </div>
        </div>
    </div>
  )
}
