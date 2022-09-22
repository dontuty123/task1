import React from 'react'
import "./aboutUsWidget.css"
import {aboutUs} from "../../dummyData"

export default function AboutUsWidget() {
    return (
          <div className="AboutUs">
        {
        aboutUs.map((AboutUs) => (
          <div key={AboutUs.id} className="AboutUsCover">
            <img src={AboutUs.img} alt="" />
              <div className="coverHover">
                  <span>{AboutUs.name}</span>
                  <h3>{AboutUs.job}</h3>
              </div>
          </div>
      ))}
    </div>
  )
}
