import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
      <div className="Footer">
          <span>Contact</span>
          <h1>contact@website.com</h1>
          <h2>+0 0000 0000</h2>
          <div className="FooterLink">
              <span>Twitter</span>
              <span>LinkedIn</span>
              <span>Dribble</span>
              <span>Youtube</span>
              <span>Instagram</span>
              <span>Facebook</span>
          </div>
          <div className='FooterCreatives'>
              <h2>2022 Creatives</h2>
              <div>
                  <h2>Privacy Policy</h2>
                  <h2>Terms and Conditions</h2>
              </div>
          </div>
    </div>
  )
}
