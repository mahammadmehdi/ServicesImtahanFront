import React from 'react'
import OurTeamMembers from '../../components/ourTeamMembers'
import "./index.scss"

function OurProffessionalMembers() {
  return (
    <div className='ourProffessionalMembers'>
        <div className="ourTeamMembers">
            <div className="top">
                <div className="border"></div>
                <div className="about">OUR PROFESSIONAL MEMBERS</div>
            </div>
            <div className="main">Our Team Mambers</div>
            <div className="cards">
                <OurTeamMembers image={"https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team2.png.webp"}></OurTeamMembers>
                <OurTeamMembers image={"https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team3.png.webp"}></OurTeamMembers>
                <OurTeamMembers image={"https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/team1.png.webp"}></OurTeamMembers>

            </div>
        </div>
    </div>
  )
}

export default OurProffessionalMembers