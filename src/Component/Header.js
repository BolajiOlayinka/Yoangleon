import React from 'react';
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div>
            <header className="site-header">
            <div className="nav-bar">
              <div className="container">
                <div className="row">
                  <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                    <div className="site-branding d-flex align-items-center">
                      <a className="d-block" href="index.html" rel="home">
                        <img
                          className="d-block"
                          src="images/webLogo.png"
                          alt="logo"
                        />
                      </a>
                    </div>
                    {/* .site-branding */}
                    <nav className="site-navigation d-flex justify-content-end align-items-center">
                      <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About us</Link>
                        </li>
                        <li>
                          <Link to="/">Membership</Link>
                        </li>
                        <li>
                          <Link to="/donate">Donate</Link>
                        </li>
                        <li>
                          <Link to="/event">Events</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/cause">Causes</Link>
                        </li>
                      </ul>
                    </nav>
                    {/* .site-navigation */}
                    <div className="hamburger-menu d-lg-none">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    {/* .hamburger-menu */}
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .container */}
            </div>
            {/* .nav-bar */}
          </header>
        </div>
    )
}
