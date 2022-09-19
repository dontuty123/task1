import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="container">
          <div className="navbar">
                <Link className='Link' to="/">
                  <span className="logo">Logo</span>
                </Link>
            <nav>
                <ul>
                    <li><a href="/">work</a></li>
                    <li><a href="/">service</a></li>
                    <li><a href="/">contack</a></li>
                </ul>
            </nav>
        </div>
        
    </div>
  )
}
