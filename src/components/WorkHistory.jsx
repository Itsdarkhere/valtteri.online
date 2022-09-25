import React from "react";
import "../css/WorkHistory.css";
import { useIntersectionObserver } from "../hooks/intersection-observer.ts";

export const WorkHistory = () => {

    const onObserveAnimateOne = () => {
        document.getElementById("wh_card_one").classList.add("wh_animation");
    }

    const onObserveAnimateTwo = () => {
        document.getElementById("wh_card_two").classList.add("wh_animation");
    }

    const ref1 = useIntersectionObserver(onObserveAnimateOne);
    const ref2 = useIntersectionObserver(onObserveAnimateTwo);

  return (
    <div className='section section_large_padding'>
      <div className='container_small'>
        <h2 className='h2' style={{ marginBottom: "40px" }}>
          Work Experience
        </h2>
        <div ref={ref1} className='wh_card wh_card_top' id="wh_card_one">
          <img
            className='wh_card_img'
            src='https://ik.imagekit.io/s93qwyistj0/valtteriOnline/new_logo_transp__4__P2iO86ho0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663900682184'
            alt='supernovas logo'
          />
          <div>
            <h2 className='h2'>CTO</h2>
            <p className='wh_card_description'>
                {/* 
                    CHECK
                */}
                As the chief techical officer I made decisions regarding the stack, 
                onboarded new developer hires, provided guidance the best I could,
                kept our repos up to date, reviewed other developers work
                and still wrote a bunch of the code.
            </p>    
          </div>
        </div>
        <div ref={ref2} className='wh_card' id="wh_card_two">
          <img
            className='wh_card_img'
            src='https://ik.imagekit.io/s93qwyistj0/valtteriOnline/new_logo_transp__4__P2iO86ho0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663900682184'
            alt='supernovas logo'
          />
          <div>
            <h2 className='h2'>Full Stack Developer</h2>
            <p className='wh_card_description'>
              {/* CHECK THEREFORE*/}
              When I started as a developer for Supernovas I had no experience in
              our frontend (Angular), backend (Go), or blockchain (Deso). 
              Still inside four months I managed to build so much that we were
              regarded as one of the top projects in the ecosystem and 
              therefore managed to raise funding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
