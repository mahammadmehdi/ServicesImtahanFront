import React from 'react'
import StrategyPlanning from '../../components/strategy/strategyPlanning'
import "./index.scss"


function FeaturedCaseStudy() {
  return (
    <div className='featuredCaseStudy'>

        <div className="featuredCase">
            <div className="header">
                <div className="border"></div>
                <div className="text">OUR PORTFOLIOS OF CASES</div>
            </div>
            <h2 className="main">Featured Case Study</h2>
            <div className="cards">
                <div className='cardsTop'><StrategyPlanning image={"https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services1.png.webp"} ></StrategyPlanning>
                <StrategyPlanning image={"https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services2.png.webp"} ></StrategyPlanning></div>
                <div className='cardsBottom'><StrategyPlanning image={"https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services3.png.webp"} ></StrategyPlanning>
                <StrategyPlanning image={"https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/services4.png.webp"} ></StrategyPlanning></div>
                
            </div>
        </div>
    </div>
  )
}

export default FeaturedCaseStudy