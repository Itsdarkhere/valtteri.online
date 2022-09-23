import React from 'react'
import "../css/Projects.css"
import { FaCode, FaRust, FaReact, } from "react-icons/fa"
import { useIntersectionObserver } from '../hooks/intersection-observer.ts'

export const Projects = () => {
    const recent_projects = [
        {
            title: "Stable Diffusion NSFW",
            description: "Stable diffusion from: https://github.com/CompVis/stable-diffusion ( but nsfw is enabled )",
            link: "https://github.com/Itsdarkhere/SD_NSFW",
            icon: <FaCode color='black' size="40" />,
        },
        {
            title: "Taxiapp, React Native",
            description: "Wanted to try react native, so this is the frontend for a uber like app.",
            link: "https://github.com/Itsdarkhere/TaxiApp_React_Native",
            icon: <FaReact color='black' size="40" />
        },
        {
            title: "Taxiapp, Rust backend",
            description: "Small backend for login/signup/address save/lookup",
            link: "https://github.com/Itsdarkhere/Taxiapp_backend_rust",
            icon: <FaRust color='black' size="40" />
        },
        {
            title: "Supernovas Next.js",
            description: "Supernovas social media / marketplace in next.js ( incomplete )",
            link: "https://github.com/Itsdarkhere/supernovasNext",
            icon: <FaReact color='black' size="40" />

        },
        {
            title: "Rust on Exercism",
            description: "Rust practise from exercism.com",
            link: "https://github.com/Itsdarkhere/Rust_exercises_on_exercism",
            icon: <FaRust color='black' size="40" />
        },
        {
            title: "Sepos website",
            description: "Website for a friends company, design sucks since I made it",
            link: "https://github.com/Itsdarkhere/Sepos-Website",
            icon: <FaReact color='black' size="40" />
        },
    ]

    const onObserveAnimate = () => {
        // Animate heading instantly
        document.getElementById("projects_header").classList.add("project_animation");
        // Animate each project with a small delay between
        let projects = document.getElementsByClassName("project_card");
        forEachWithDelay(projects, 100);
    }

    const forEachWithDelay = (array, delay) => {
        let i = 0;
        let interval = setInterval(() => {
            array[i].classList.add("project_animation");
            if (++i === array.length) clearInterval(interval);
        }, delay)
    }

    const ref = useIntersectionObserver(onObserveAnimate);

  return (
    <div className='section section_projects'>
        <div ref={ref} className='container_default'>
            <h2 className='h2' id="projects_header">Recent Programming Projects</h2>
            <div className='projects_grid'>
                {recent_projects.map((o, i) => 
                    <a href={o.link} target="_blank" rel='noreferrer' key={i} className='project_card'>
                        <div 
                        className='project_icon' 
                        >
                            {o.icon}
                        </div>
                        <h3 className='h3'>{o.title}</h3>
                        <p className='p'>
                            {o.description}
                        </p>
                    </a>
                )}
            </div>
        </div>
    </div>
  )
}
