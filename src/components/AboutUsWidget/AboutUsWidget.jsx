import React from 'react'
import "./aboutUsWidget.css"

export default function AboutUsWidget() {
  return (
      <div className="AboutUs">
          <div className="AboutUsCover">
              <img src="./img/peo1.png" alt="" />
              <div className="coverHover">
                  <span>Jonh Doe</span>
                  <h3>Digital Marketing Manager</h3>
              </div>
          </div>

          <div className="AboutUsCover">
              <img src="./img/peo2.png" alt="" />
               <div className="coverHover">
                  <span>Jonh Doe</span>
                  <h3>Digital marketing Manager</h3>
              </div>
          </div>

          <div className="AboutUsCover">
              <img src="./img/peo3.png" alt="" />
               <div className="coverHover">
                  <span>Jonh Doe</span>
                  <h3>Digital marketing Manager</h3>
              </div>
          </div>

          <div className="AboutUsCover">
              <img src="./img/peo4.png" alt="" />
               <div className="coverHover">
                  <span>Jonh Doe</span>
                  <h3>Digital marketing Manager</h3>
              </div>
          </div>
    </div>
  )
}
