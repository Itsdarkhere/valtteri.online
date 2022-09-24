import React from 'react'
import { useIntersectionObserver } from '../hooks/intersection-observer.ts';
import "../css/Projects.css"

export const ProjectCard = ({ link, icon, title, description }) => {

    const onObserveAnimate = () => {
        let element = ref.current;
        element.classList.add("project_animation")

    }

    const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <a 
    ref={ref} 
    id="project_card" 
    href={link} 
    target="_blank" 
    rel='noreferrer' 
    className='project_card'
    >
        <div 
        className='project_icon' 
        >
            {icon}
        </div>
        <h3 className='h3'>{title}</h3>
        <p className='p'>
            {description}
        </p>
    </a>
  )
}
