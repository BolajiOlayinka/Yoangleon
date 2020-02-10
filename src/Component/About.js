import React from 'react';
import {Link} from 'react-router-dom';

export default function About() {
    return (
      <div>
        <div>
          <div className="page-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>About Us</h1>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .page-header */}
          <div className="welcome-wrap">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 order-2 order-lg-1">
                  <div className="welcome-content">
                    <header className="entry-header">
                      <h2 className="entry-title">Wellcome to our Charity</h2>
                    </header>
                    {/* .entry-header */}
                    <div className="entry-content mt-5">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris quis aliquam. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestibulum mauris quis aliquam. Integer
                        accumsan sodales odio, id tempus velit ullamcorper id.
                        Quisque at erat eu libero consequat tempus. Quisque
                        molestie convallis tempus. Ut semper purus metus, a
                        euismod sapien sodales ac. Duis viverra eleifend
                        fermentum.
                      </p>
                    </div>
                    {/* .entry-content */}
                    <div className="entry-footer mt-5">
                      <a href="#" className="btn gradient-bg mr-2">
                        Read More
                      </a>
                    </div>
                    {/* .entry-footer */}
                  </div>
                  {/* .welcome-content */}
                </div>
                {/* .col */}
                <div className="col-12 col-lg-6 order-1 order-lg-2">
                  <img src="images/welcome.jpg" alt="welcome" />
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .home-page-icon-boxes */}
          <div className="about-stats">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="circular-progress-bar">
                    <div className="circle" id="loader_1">
                      <strong className="d-flex justify-content-center" />
                    </div>
                    <h3 className="entry-title">Hard Work</h3>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="circular-progress-bar">
                    <div className="circle" id="loader_2">
                      <strong className="d-flex justify-content-center" />
                    </div>
                    <h3 className="entry-title">Pure Love</h3>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="circular-progress-bar">
                    <div className="circle" id="loader_3">
                      <strong className="d-flex justify-content-center" />
                    </div>
                    <h3 className="entry-title">Smart Ideas</h3>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="circular-progress-bar">
                    <div className="circle" id="loader_4">
                      <strong className="d-flex justify-content-center" />
                    </div>
                    <h3 className="entry-title">Good Decisions</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-testimonial">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-5">
                  <div className="testimonial-cont">
                    <div className="entry-content">
                      <p>
                        We love to help all the children that have problems in
                        the world. After 15 years we have many goals achieved.
                      </p>
                    </div>
                    <div className="entry-footer d-flex flex-wrap align-items-center mt-5">
                      <img src="images/testimonial-1.jpg" alt="testimonial" />
                      <h4>
                        Maria Williams, <span>Volunteer</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 offset-lg-2 col-lg-5">
                  <div className="testimonial-cont">
                    <div className="entry-content">
                      <p>
                        We love to help all the children that have problems in
                        the world. After 15 years we have many goals achieved.
                      </p>
                    </div>
                    <div className="entry-footer d-flex flex-wrap align-items-center mt-5">
                      <img src="images/testimonial-2.jpg" alt="testimonial" />
                      <h4>
                        Cristian James, <span>Volunteer</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="help-us">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                  <h2>Help us so we can help others</h2>
                  <Link className="btn orange-border" to ="/">
                    Donate now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
}
