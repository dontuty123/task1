import React, { useState } from 'react'
import "./serviceWidget.css"
import {service } from "../../dummyData"

export default function ServiceWidget() {




  return (
      <div className="service">
          
              {service.map((Service) => (
                <div key={Service.id} className="serviceDetail">
                    <span>{Service.title}</span>
                    <h2>{Service.serviceInfo} </h2>
                    <h3>See Details </h3>
                    <div> Starting at {Service.price}$</div>
                </div>
              ))}
              

{/*        
          <div className="serviceDetail">
              <span>Graphic Design</span>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur </h2>
              <h3>See Details </h3>
              <div> Starting at 500$</div>
          </div>
          <div className="serviceDetail">
              <span>Graphic Design</span>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur </h2>
              <h3>See Details </h3>
              <div> Starting at 500$</div>
              
          </div>
          <div className="serviceDetail">
              <span>Graphic Design</span>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur </h2>
              <h3>See Details </h3>
              <div> Starting at 500$</div>
              
          </div>
           */}
    </div>
  )
}
