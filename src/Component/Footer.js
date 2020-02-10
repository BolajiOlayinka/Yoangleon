import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
             <footer className="site-footer">
            <div className="footer-widgets">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="foot-about">
                      <h2>
                        <Link className="foot-logo" href="#">
                          <img src="images/foot-logo.png" alt />
                        </Link>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, con sectetur adipiscing
                        elit. Mauris temp us vestib ulum mauris.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Mauris
                        tempus vestib ulum mauris.Lorem ipsum dolo.
                      </p>
                      <ul className="d-flex flex-wrap align-items-center">
                        <li>
                          <Link to="/">
                            <i className="fa fa-pinterest-p" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-dribbble" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-behance" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="fa fa-linkedin" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* .foot-about */}
                  </div>
                  {/* .col */}
                  <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                    <h2>Useful Links</h2>
                    <ul>
                      <li>
                        <Link to="/">Privacy Polticy</Link>
                      </li>
                      <li>
                        <Link to="/">Become a Volunteer</Link>
                      </li>
                      <li>
                        <Link to="/">Donate</Link>
                      </li>
                      <li>
                        <Link to="/">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/">Causes</Link>
                      </li>
                      <li>
                        <Link to="/">Portfolio</Link>
                      </li>
                      <li>
                        <Link to="/">News</Link>
                      </li>
                    </ul>
                  </div>
                  {/* .col */}
                  <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                    <div className="foot-latest-news">
                      <h2>Latest News</h2>
                      <ul>
                        <li>
                          <h3>
                            <Link to="/">A new cause to help</Link>
                          </h3>
                          <div className="posted-date">MArch 12, 2018</div>
                        </li>
                        <li>
                          <h3>
                            <Link to="/">We love to help people</Link>
                          </h3>
                          <div className="posted-date">MArch 12, 2018</div>
                        </li>
                        <li>
                          <h3>
                            <Link to="/">The new ideas for helping</Link>
                          </h3>
                          <div className="posted-date">MArch 12, 2018</div>
                        </li>
                      </ul>
                    </div>
                    {/* .foot-latest-news */}
                  </div>
                  {/* .col */}
                  <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                    <div className="foot-contact">
                      <h2>Contact</h2>
                      <ul>
                        <li>
                          <i className="fa fa-phone" />
                          <span>+45 677 8993000 223</span>
                        </li>
                        <li>
                          <i className="fa fa-envelope" />
                          <span>office@template.com</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker" />
                          <span>
                            Main Str. no 45-46, b3, 56832, Los Angeles, CA
                          </span>
                        </li>
                      </ul>
                    </div>
                    {/* .foot-contact */}
                    <div className="subscribe-form">
                      <form className="d-flex flex-wrap align-items-center">
                        <input type="email" placeholder="Your email" />
                        <input type="submit" defaultValue="send" />
                      </form>
                      {/* .flex */}
                    </div>
                    {/* .search-widget */}
                  </div>
                  {/* .col */}
                </div>
                {/* .row */}
              </div>
              {/* .container */}
            </div>
            {/* .footer-widgets */}
            <div className="footer-bar">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <p className="m-0">
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made
                      with <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                      <Link to="https://colorlib.com" target="_blank">
                        Colorlib
                      </Link>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </p>
                  </div>
                  {/* .col-12 */}
                </div>
                {/* .row */}
              </div>
              {/* .container */}
            </div>
            {/* .footer-bar */}
          </footer>
        </div>
    )
}
