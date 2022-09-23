import React from "react";
import "../css/WorkHistory.css";

export const WorkHistory = () => {
  return (
    <div className='section section_large_padding'>
      <div className='container_small'>
        <h2 className='h2' style={{ marginBottom: "40px" }}>
          Work Experience
        </h2>
        <div className='wh_card wh_card_top'>
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
                As the chief techical officer I made decisitions regarding the stack, 
                onboarded new developer hires, provided guidance the best I could,
                kept our repos up to date, reviewed other developers work
                and still wrote a bunch of the code.
            </p>    
          </div>
        </div>
        <div className='wh_card'>
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
