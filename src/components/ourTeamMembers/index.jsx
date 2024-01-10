import React from 'react'
import "./index.scss"

function OurTeamMembers({image}) {
  return (
    <div className='teamMembers'>
<img src={image} alt="" />
<div className="card">
    <div className="top">Ethan Welch</div>
    <div className="bottom">
        <div className="border"></div>
        <div className="job">UX Designer</div>
    </div>
</div>
    </div>
  )
}

export default OurTeamMembers