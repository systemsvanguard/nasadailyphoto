// SiteNavBar.js
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBarJS.js'  

const SiteNavBar = () => {
  return (
    <div className="header unselectable header-animated">
        <div className="header-brand">
            <div className="nav-item no-hover">
                <NavLink to="/"><h6 className="title" style={{color:"#2972fa"}}>DailyPHOTO</h6></NavLink>
            </div>
            <div className="nav-item nav-btn" data-target="navMenu" id="header-btn"  aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </div>
        </div>
        <div className="header-nav" id="header-menu">
            <div className="nav-left">
          <div className="nav-item text-center">
                    <a href="http://ryanhunter.ca/code/">
                        <span className="icon">
                            <i className="fas fa-wrapper fa-code" aria-hidden="true" style={{color:"#2972fa"}}></i>
                        </span>
                    </a>
                </div>
                <div className="nav-item text-center">
                    <a href="http://ryanhunter.ca/contact/">
                        <span className="icon">
                            <i className="fas fa-wrapper fa-envelope" aria-hidden="true" style={{color:"#5e5cc7"}}></i>
                        </span>
                    </a>
                </div>
                <div className="nav-item text-center">
                    <NavLink to="/">
                        <span className="icon">
                            <i className="fas fa-wrapper fa-home" aria-hidden="true" style={{color:"#2972fa"}}></i>
                        </span>
                    </NavLink>
                </div>
            </div>
            
            <div className="nav-right is-active">
              <div className="nav-item">
                    <NavLink to="/dailyphoto">
                    <i className="far fa-wrapper fa-image" aria-hidden="true" style={{color:"red"}}></i>
                      Photo
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/about">
                      <span className="icon"><i className="fas fa-wrapper fa-info" aria-hidden="true"></i></span>
                      About
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/resources">
                      <span className="icon"><i className="fas fa-wrapper fa-book-open" aria-hidden="true"></i></span>
                      Resources
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/contact">
                      <span className="icon"><i className="fas fa-wrapper fa-phone" aria-hidden="true"></i></span>
                       Contact
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink to="/">
                      <span className="icon"><i className="fas fa-wrapper fa-igloo" aria-hidden="true" style={{color:"#2972fa"}}></i></span>
                       Home
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SiteNavBar  