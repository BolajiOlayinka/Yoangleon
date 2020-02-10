import React from 'react';
import {Link} from 'react-router-dom';

export default function Event() {
    return (
      <div>
        <div>
          <div className="page-header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>News</h1>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .page-header */}
          <div className="news-wrap">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="news-content">
                    <Link to = "/">
                      <img src="images/1.jpg" alt />
                    </Link >
                    <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                      <div className="header-elements">
                        <div className="posted-date">March 12, 2018</div>
                        <h2 className="entry-title">
                          <Link to = "/">Toys for Children Campaign</Link >
                        </h2>
                        <div className="post-metas d-flex flex-wrap align-items-center">
                          <span className="cat-links">
                            in <Link to = "/">Causes</Link >
                          </span>
                          <span className="post-author">
                            by <Link to = "/">Tom Phillips</Link >
                          </span>
                          <span className="post-comments">
                            <Link to = "/">3 Comments</Link >
                          </span>
                        </div>
                      </div>
                      <div className="donate-icon">
                        <Link to = "/">
                          <img src="images/donate-icon.png" alt />
                        </Link >
                      </div>
                    </header>
                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit
                        amet, consectetur. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris tempus vestib ulum
                        mauris quis aliquam. Integer accumsan sodales odio, id
                        tempus velit ullamc.
                      </p>
                    </div>
                    <footer className="entry-footer">
                      <Link to = "/" className="btn gradient-bg">
                        Read More
                      </Link >
                    </footer>
                  </div>
                  <div className="news-content">
                    <Link to = "/">
                      <img src="images/2.jpg" alt />
                    </Link >
                    <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                      <div className="header-elements">
                        <div className="posted-date">March 12, 2018</div>
                        <h2 className="entry-title">
                          <Link to = "/">Toys for Children Campaign</Link >
                        </h2>
                        <div className="post-metas d-flex flex-wrap align-items-center">
                          <span className="cat-links">
                            in <Link to = "/">Causes</Link >
                          </span>
                          <span className="post-author">
                            by <Link to = "/">Tom Phillips</Link >
                          </span>
                          <span className="post-comments">
                            <Link to = "/">3 Comments</Link >
                          </span>
                        </div>
                      </div>
                      <div className="donate-icon">
                        <Link to = "/">
                          <img src="images/donate-icon.png" alt />
                        </Link >
                      </div>
                    </header>
                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit
                        amet, consectetur. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris tempus vestib ulum
                        mauris quis aliquam. Integer accumsan sodales odio, id
                        tempus velit ullamc.
                      </p>
                    </div>
                    <footer className="entry-footer">
                      <Link to = "/" className="btn gradient-bg">
                        Read More
                      </Link >
                    </footer>
                  </div>
                  <div className="news-content">
                    <Link to = "/">
                      <img src="images/3.jpg" alt />
                    </Link >
                    <header className="entry-header d-flex flex-wrap justify-content-between align-items-center">
                      <div className="header-elements">
                        <div className="posted-date">March 12, 2018</div>
                        <h2 className="entry-title">
                          <Link to = "/">Toys for Children Campaign</Link >
                        </h2>
                        <div className="post-metas d-flex flex-wrap align-items-center">
                          <span className="cat-links">
                            in <Link to = "/">Causes</Link >
                          </span>
                          <span className="post-author">
                            by <Link to = "/">Tom Phillips</Link >
                          </span>
                          <span className="post-comments">
                            <Link to = "/">3 Comments</Link >
                          </span>
                        </div>
                      </div>
                      <div className="donate-icon">
                        <Link to = "/">
                          <img src="images/donate-icon.png" alt />
                        </Link >
                      </div>
                    </header>
                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit
                        amet, consectetur. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris tempus vestib ulum
                        mauris quis aliquam. Integer accumsan sodales odio, id
                        tempus velit ullamc.
                      </p>
                    </div>
                    <footer className="entry-footer">
                      <Link to = "/" className="btn gradient-bg">
                        Read More
                      </Link >
                    </footer>
                  </div>
                  <ul className="pagination d-flex flex-wrap align-items-center p-0">
                    <li className="active">
                      <Link to = "/">01</Link >
                    </li>
                    <li>
                      <Link to = "/">02</Link >
                    </li>
                    <li>
                      <Link to = "/">03</Link >
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="sidebar">
                    <div className="search-widget">
                      <form className="flex flex-wrap align-items-center">
                        <input type="search" placeholder="Search..." />
                        <button
                          type="submit"
                          className="flex justify-content-center align-items-center"
                        >
                          GO
                        </button>
                      </form>
                      {/* .flex */}
                    </div>
                    {/* .search-widget */}
                    <div className="popular-posts">
                      <h2>Popular Posts</h2>
                      <ul className="p-0">
                        <li className="d-flex flex-wrap justify-content-between align-items-center">
                          <figure>
                            <Link to = "/">
                              <img src="images/p-1.jpg" alt />
                            </Link >
                          </figure>
                          <div className="entry-content">
                            <h3 className="entry-title">
                              <Link to = "/">A new cause to help</Link >
                            </h3>
                            <div className="posted-date">MArch 12, 2018</div>
                          </div>
                        </li>
                        <li className="d-flex flex-wrap justify-content-between align-items-center">
                          <figure>
                            <Link to = "/">
                              <img src="images/p-2.jpg" alt />
                            </Link >
                          </figure>
                          <div className="entry-content">
                            <h3 className="entry-title">
                              <Link to = "/">We love to help people</Link >
                            </h3>
                            <div className="posted-date">MArch 10, 2018</div>
                          </div>
                        </li>
                        <li className="d-flex flex-wrap justify-content-between align-items-center">
                          <figure>
                            <Link to = "/">
                              <img src="images/p-3.jpg" alt />
                            </Link >
                          </figure>
                          <div className="entry-content">
                            <h3 className="entry-title">
                              <Link to = "/">The new ideas for helping</Link >
                            </h3>
                            <div className="posted-date">MArch 09, 2018</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* .cat-links */}
                    <div className="upcoming-events">
                      <h2>Upcoming Events</h2>
                      <ul className="p-0">
                        <li className="d-flex flex-wrap justify-content-between align-items-center">
                          <figure>
                            <Link to = "/">
                              <img src="images/u-1.jpg" alt />
                            </Link >
                          </figure>
                          <div className="entry-content">
                            <h3 className="entry-title">
                              <Link to = "/">Fundraiser for Kids</Link >
                            </h3>
                            <div className="post-metas d-flex flex-wrap align-items-center">
                              <span className="posted-date">
                                <Link to = "/">Aug 25, 2018</Link >
                              </span>
                              <span className="event-location">
                                <Link to = "/">Ball Room New York</Link >
                              </span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </li>
                        <li className="d-flex flex-wrap justify-content-between align-items-center">
                          <figure>
                            <Link to = "/">
                              <img src="images/u-2.jpg" alt />
                            </Link >
                          </figure>
                          <div className="entry-content">
                            <h3 className="entry-title">
                              <Link to = "/">The childrens</Link >
                            </h3>
                            <div className="post-metas d-flex flex-wrap align-items-center">
                              <span className="posted-date">
                                <Link to = "/">Aug 25, 2018</Link >
                              </span>
                              <span className="event-location">
                                <Link to = "/">Ball Room New York</Link >
                              </span>
                            </div>
                            <p>
                              Consectetur adipiscing elit. Mauris tempus vestib
                              ulum.
                            </p>
                          </div>
                        </li>
                        <li className="d-flex flex-wrap justify-content-between align-items-center">
                          <figure>
                            <Link to = "/">
                              <img src="images/u-3.jpg" alt />
                            </Link >
                          </figure>
                          <div className="entry-content">
                            <h3 className="entry-title">
                              <Link to = "/">Bring water </Link >
                            </h3>
                            <div className="post-metas d-flex flex-wrap align-items-center">
                              <span className="posted-date">
                                <Link to = "/">Aug 25, 2018</Link >
                              </span>
                              <span className="event-location">
                                <Link to = "/">Ball Room New York</Link >
                              </span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* .cat-links */}
                    <div className="featured-cause">
                      <h2>Featured Causes</h2>
                      <div className="cause-wrap">
                        <figure className="m-0 position-relative">
                          <Link to = "/">
                            <img src="images/cause-3.jpg" alt />
                          </Link >
                        </figure>
                        <div className="cause-content-wrap">
                          <header className="entry-header d-flex flex-wrap align-items-center">
                            <h3 className="entry-title w-100 m-0">
                              <Link to = "/">Bring water to the childrens</Link >
                            </h3>
                          </header>
                          {/* .entry-header */}
                          <div className="entry-content">
                            <p className="m-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris tempus vestib ulum mauris.
                            </p>
                          </div>
                          {/* .entry-content */}
                          <div className="fund-raised w-100">
                            <div className="fund-raised-bar-3 barfiller">
                              <div className="tipWrap">
                                <span className="tip" />
                              </div>
                              {/* .tipWrap */}
                              <span className="fill" data-percentage={83} />
                            </div>
                            {/* .fund-raised-bar */}
                            <div className="fund-raised-details d-flex flex-wrap justify-content-between align-items-center">
                              <div className="fund-raised-total mt-4">
                                Raised: $56 880
                              </div>
                              {/* .fund-raised-total */}
                              <div className="fund-raised-goal mt-4">
                                Goal: $70 000
                              </div>
                              {/* .fund-raised-goal */}
                            </div>
                            {/* .fund-raised-details */}
                          </div>
                          {/* .fund-raised */}
                        </div>
                        {/* .cause-content-wrap */}
                      </div>
                      {/* .cause-wrap */}
                    </div>
                  </div>
                  {/* .sidebar */}
                </div>
                {/* .col */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
