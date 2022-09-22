import React from 'react'
import "./workWidget.css"
import {Work} from "../../dummyData"
import EastIcon from '@mui/icons-material/East';

export default function WorkWidget() {
  return (
      <div className='workWidget'>
      <div className="workWidgetContainer">
        {Work.map((work) => (
          <div key={work.id}>
                <img src={work.img} alt='' />
                <div className="textcover">
                        <h3>{work.title}</h3>
                        <h2>{work.workDesc}</h2>
                        <h4>See Project <EastIcon/> </h4>
                    </div>
              </div>
        ))}
        </div>
    </div>
  )
}
