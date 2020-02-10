import React from 'react';
import {Link} from 'react-router-dom';

export default function Contact() {
    return (
      <div>
        <div>
          <div className="page-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Contact</h1>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .page-header */}
          <div className="contact-page-wrap">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5">
                  <div className="entry-content">
                    <h2>Get In touch with us</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit
                      amet, conse ctetur. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Mauris tempus vestib ulum
                      mauris quis aliquam. Integer accu msan sodales odio, id
                      tempus velit ullamc.
                    </p>
                    <ul className="contact-social d-flex flex-wrap align-items-center">
                      <li>
                        <Link to = "/">
                          <i className="fa fa-pinterest-p" />
                        </Link>
                      </li>
                      <li>
                        <Link to = "/">
                          <i className="fa fa-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to = "/">
                          <i className="fa fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to = "/">
                          <i className="fa fa-dribbble" />
                        </Link>
                      </li>
                      <li>
                        <Link to = "/">
                          <i className="fa fa-behance" />
                        </Link>
                      </li>
                      <li>
                        <Link to = "/">
                          <i className="fa fa-linkedin" />
                        </Link>
                      </li>
                    </ul>
                    <ul className="contact-info p-0">
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
                </div>
                {/* .col */}
                <div className="col-12 col-lg-7">
                  <form className="contact-form">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea
                      rows={15}
                      cols={6}
                      placeholder="Messages"
                      defaultValue={""}
                    />
                    <span>
                      <input
                        className="btn gradient-bg"
                        type="submit"
                        defaultValue="Contact us"
                      />
                    </span>
                  </form>
                  {/* .contact-form */}
                </div>
                {/* .col */}
                <div className="col-12">
                  <div className="contact-gmap">
                    <iframe
                      width={600}
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      src="https://www.google.com/maps/embed/v1/place?q=usa&key=AIzaSyC2LvnNLzWxHgFm_XfpFG9wHUuyEj6rXSs"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
        </div>
      </div>
    );
}
