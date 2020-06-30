// src/includes/SiteFooter.js 
import React from 'react'
import { NavLink } from 'react-router-dom'

const SiteFooter = () => {
  return (
    <footer>
        <h6 className="white uppercase">NASA Daily Photo</h6>
        <div className="content">
            <div className="divider"></div>
            <div className="row">			
                <div className="col-4">
                    <ul className="no-bullets">
                        <NavLink to="/dailyphoto">
                            <li className="list-item">Daily Photo</li>
                        </NavLink>
                        <a href="https://apod.nasa.gov/apod/archivepix.html">
                            <li className="list-item">Archive</li>
                        </a>
                    </ul>
                </div>
          
                <div className="col-4">
                    <ul className="no-bullets">
                        <NavLink to="/">
                            <li className="list-item">Home</li>
                        </NavLink>
                        <NavLink to="/resources">
                            <li className="list-item">Resources</li>
                        </NavLink>
                        <a href="https://api.nasa.gov/">
                            <li className="list-item">API</li>
                        </a>
                    </ul>
                </div>
          
                <div className="col-4">
                    <ul className="no-bullets">
                        <NavLink to="/about">
                            <li className="list-item">About</li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li className="list-item">Contact</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
        <p className="subtitle text-info">The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.
      <br />
        Sample portfolio app by <a href="http://www.ryanhunter.ca">RyanHunter.org</a> <i className="fab fa-html5" aria-hidden="true" style={{color:"#2196F3"}}></i><i className="fas fa-code fa-spin" aria-hidden="true" style={{color:"green"}}></i> crafted with <i className="far fa-heart pulse" aria-hidden="true" style={{color:"red"}}></i> 
      <br />
      Copyright &copy; 2017 - 2020 | All rights reserved. 
      </p>
  </footer>
  )
}

export default SiteFooter  