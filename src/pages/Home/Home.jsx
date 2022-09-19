import React from 'react'
import "./home.css"
import Navbar from '../../components/Navbar/Navbar'
import WorkWidget from '../../components/WorkWidget/WorkWidget'

export default function Home() {
  return (
    <div className='homeContainer'>
      <Navbar />
      <div className="homeSlide">
        <div className="homeSlideCover">
            <h1>Creative</h1>
            <h1>Innovative</h1>
            <h1>Design Agency</h1>
        </div>
        <div className='homeSlideDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
      </div>
      

      <div className="homeWorkWidget">
        <span className="homeWorkWidgetTitle">work</span>
        <WorkWidget/>
      </div>
    </div>
  )
}
