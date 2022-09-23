import React from 'react'
import "../css/Skills.css"
import { FaAngular, FaGit, FaRust, FaReact, FaAws, FaGoogle, FaDatabase } from "react-icons/fa"
import { SiGoland, SiPostgresql } from "react-icons/si"
import { useIntersectionObserver } from '../hooks/intersection-observer.ts'

export const Skills = () => {
    const skills_list = [
        {
            skill: "React",
            icon: <FaReact size="25" />
        },
        {
            skill: "Angular",
            icon: <FaAngular size="25" />
        },
        {
            skill: "Go",
            icon: <SiGoland size="25" />
        },
        {
            skill: "Rust",
            icon: <FaRust size="25" />
        },
        {
            skill: "Git",
            icon: <FaGit size="25" />
        },
        {
            skill: "AWS",
            icon: <FaAws size="25" />
        },
        {
            skill: "GCP",
            icon: <FaGoogle size="25" />
        },
        {
            skill: "SQL",
            icon: <FaDatabase size="25" />
        },
        {
            skill: "Postgres",
            icon: <SiPostgresql size="25" />
        },
    ]

    const onObserveAnimate = () => {
        document.getElementById("container_skills").classList.add("skills_animation");
    }

    const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <div ref={ref} className='section skills_section'>
        <div className='container_default' id="container_skills">
            <div className='text_center'>
                <h2 className="h2" style={{marginBottom: 0}}>Skills and tools</h2>
            </div>
            <div className='container_small'>
                <div className='skills_grid'>
                    {skills_list.map((o, i) =>
                        <div key={i} className='skill_card'>
                            <div className='skill_icon'>
                                {o.icon}
                            </div>
                            <p className='skill_text'>{o.skill}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}