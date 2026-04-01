import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
             <nav className="navbar bg-dark navbar-dark navbar-expand-md fixed-top">
        <div className="container-fluid q">
          <Link to="" className="navbar-brand r">
            <img
              src="https://pn-paul.netlify.app/image/ff-logo-02.png"
              alt=""
              className="weblogo"
            />
          </Link>

          <button
            className="navbar-toggler"
            data-bs-target="#Link"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse p" id="Link">
            <ul className="navbar-nav ms-auto" style={{textTransform: "uppercase"}}>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/brand" className="nav-link">
                  Brand
                </Link>
              </li>
              <li>
                <Link to="/Ourteam" className="nav-link">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/Press" className="nav-link">
                  Press Release
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/Careers" className="nav-link">
                  Carriers
                </Link>
              </li>
              <button
                type="button"
                className="btn btn-outline-dark rounded-0 mx-3 px-2 o"
              >
                franchise
              </button>
            </ul>
          </div>
        </div>
      </nav>






        </>
    )
}

export default Header