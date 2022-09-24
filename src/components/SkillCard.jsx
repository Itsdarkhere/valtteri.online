import React from 'react'
import "../css/Skills.css"
import { useIntersectionObserver } from "../hooks/intersection-observer.ts"

export const SkillCard = ({ icon, skill }) => {

    const onObserveAnimate = () => {
        let element = ref.current;
        element.classList.add("skills_animation")
    }

    const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <div ref={ref} className='skill_card'>
        <div className='skill_icon'>
            {icon}
        </div>
        <p className='skill_text'>{skill}</p>
    </div>
  )
}
