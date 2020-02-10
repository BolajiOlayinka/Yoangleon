import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from './Carousel'
;
export default function Home() {
    return (
      <div>
        <div>
          
          {/* .site-header */}
          <div className="swiper-container hero-slider">
            <div className="swiper-wrapper">
              <Carousel/>
           
            </div>
            {/* .swiper-wrapper */}
            <div className="pagination-wrap position-absolute w-100">
              <div className="container">
                <div className="swiper-pagination" />
              </div>
              {/* .container */}
            </div>
            {/* .pagination-wrap */}
            {/* Add Arrows */}
            <div className="swiper-button-next flex justify-content-center align-items-center">
              <span>
                <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                </svg>
              </span>
            </div>
            <div className="swiper-button-prev flex justify-content-center align-items-center">
              <span>
                <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" />
                </svg>
              </span>
            </div>
          </div>
          {/* .hero-slider */}
          <div className="home-page-icon-boxes">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <figure className="d-flex justify-content-center">
                      <img src="images/hands-gray.png" alt="conImg" />
                      <img src="images/hands-white.png" alt="conImg" />
                    </figure>
                    <header className="entry-header">
                      <h3 className="entry-title">Become a Partner</h3>
                    </header>
                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris quis aliquam.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <figure className="d-flex justify-content-center">
                      <img src="images/donation-gray.png" alt />
                      <img src="images/donation-white.png" alt />
                    </figure>
                    <header className="entry-header">
                      <h3 className="entry-title">Dance &amp; Music</h3>
                    </header>
                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris quis aliquam.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                  <div className="icon-box">
                    <figure className="d-flex justify-content-center">
                      <img src="images/charity-gray.png" alt="charityBox" />
                      <img src="images/charity-white.png" alt="charityBox" />
                    </figure>
                    <header className="entry-header">
                      <h3 className="entry-title">Online Conference</h3>
                    </header>
                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris tempus vestib ulum mauris quis aliquam.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .home-page-icon-boxes */}
          <div className="home-page-welcome">
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
                      <Link to = "/" className="btn gradient-bg mr-2">
                        Read More
                      </Link>
                    </div>
                    {/* .entry-footer */}
                  </div>
                  {/* .welcome-content */}
                </div>
                {/* .col */}
                <div className="col-12 col-lg-6 mt-4 order-1 order-lg-2">
                  <img src="images/welcome.jpg" alt="welcome" />
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .home-page-icon-boxes */}
          <div className="home-page-events">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="upcoming-events">
                    <div className="section-heading">
                      <h2 className="entry-title">Upcoming Events</h2>
                    </div>
                    {/* .section-heading */}
                    <div className="event-wrap d-flex flex-wrap justify-content-between">
                      <figure className="m-0">
                        <img src="images/event-1.jpg" alt />
                      </figure>
                      <div className="event-content-wrap">
                        <header className="entry-header d-flex flex-wrap align-items-center">
                          <h3 className="entry-title w-100 m-0">
                            <Link to = "/">Fundraiser for Kids</Link>
                          </h3>
                          <div className="posted-date">
                            <Link to = "/">Aug 25, 2018 </Link>
                          </div>
                          {/* .posted-date */}
                          <div className="cats-links">
                            <Link to = "/">Ball Room New York</Link>
                          </div>
                          {/* .cats-links */}
                        </header>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris tempus vestib ulum mauris.
                          </p>
                        </div>
                        {/* .entry-content */}
                        <div className="entry-footer">
                          <Link to = "/">Read More </Link>
                        </div>
                        {/* .entry-footer */}
                      </div>
                      {/* .event-content-wrap */}
                    </div>
                    {/* .event-wrap */}
                    <div className="event-wrap d-flex flex-wrap justify-content-between">
                      <figure className="m-0">
                        <img src="images/event-2.jpg" alt />
                      </figure>
                      <div className="event-content-wrap">
                        <header className="entry-header d-flex flex-wrap align-items-center">
                          <h3 className="entry-title w-100 m-0">
                            <Link to = "/">Bring water to the childrens</Link>
                          </h3>
                          <div className="posted-date">
                            <Link to = "/">Aug 25, 2018 </Link>
                          </div>
                          {/* .posted-date */}
                          <div className="cats-links">
                            <Link to = "/">Ball Room New York</Link>
                          </div>
                          {/* .cats-links */}
                        </header>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris tempus vestib ulum mauris.
                          </p>
                        </div>
                        {/* .entry-content */}
                        <div className="entry-footer">
                          <Link to = "/">Read More</Link>
                        </div>
                        {/* .entry-footer */}
                      </div>
                      {/* .event-content-wrap */}
                    </div>
                    {/* .event-wrap */}
                    <div className="event-wrap d-flex flex-wrap justify-content-between">
                      <figure className="m-0">
                        <img src="images/event-3.jpg" alt />
                      </figure>
                      <div className="event-content-wrap">
                        <header className="entry-header d-flex flex-wrap align-items-center">
                          <h3 className="entry-title w-100 m-0">
                            <Link to = "/">Bring water to the childrens</Link>
                          </h3>
                          <div className="posted-date">
                            <Link to = "/">Aug 25, 2018 </Link>
                          </div>
                          {/* .posted-date */}
                          <div className="cats-links">
                            <Link to = "/">Ball Room New York</Link>
                          </div>
                          {/* .cats-links */}
                        </header>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris tempus vestib ulum mauris.
                          </p>
                        </div>
                        {/* .entry-content */}
                        <div className="entry-footer">
                          <Link to = "/">Read More</Link>
                        </div>
                        {/* .entry-footer */}
                      </div>
                      {/* .event-content-wrap */}
                    </div>
                    {/* .event-wrap */}
                  </div>
                  {/* .upcoming-events */}
                </div>
                {/* .col */}
                <div className="col-12 col-lg-6">
                  <div className="featured-cause">
                    <div className="section-heading">
                      <h2 className="entry-title">Featured Cause</h2>
                    </div>
                    {/* .section-heading */}
                    <div className="cause-wrap d-flex flex-wrap justify-content-between">
                      <figure className="m-0">
                        <img src="images/featured-causes.jpg" alt />
                      </figure>
                      <div className="cause-content-wrap">
                        <header className="entry-header d-flex flex-wrap align-items-center">
                          <h3 className="entry-title w-100 m-0">
                            <Link to = "/">Fundraiser for Kids</Link>
                          </h3>
                          <div className="posted-date">
                            <Link to = "/">Aug 25, 2018 </Link>
                          </div>
                          {/* .posted-date */}
                          <div className="cats-links">
                            <Link to = "/">Ball Room New York</Link>
                          </div>
                          {/* .cats-links */}
                        </header>
                        {/* .entry-header */}
                        <div className="entry-content">
                          <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mauris tempus vestib ulum mauris. Lorem ipsum
                            dolor sit amet, consectetur.
                          </p>
                        </div>
                        {/* .entry-content */}
                        <div className="entry-footer mt-5">
                          <Link to = "/" className="btn gradient-bg mr-2">
                            Donate Now
                          </Link>
                        </div>
                        {/* .entry-footer */}
                      </div>
                      {/* .cause-content-wrap */}
                      <div className="fund-raised w-100">
                        <div className="featured-fund-raised-bar barfiller">
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
                    {/* .cause-wrap */}
                  </div>
                  {/* .featured-cause */}
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .home-page-events */}
          <div className="our-causes">
            <div className="container">
              <div className="row">
                <div className="coL-12">
                  <div className="section-heading">
                    <h2 className="entry-title">Our Causes</h2>
                  </div>
                  {/* .section-heading */}
                </div>
                {/* .col */}
              </div>
              {/* .row */}
              <div className="row">
                <div className="col-12">
                  <div className="swiper-container causes-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="cause-wrap">
                          <figure className="m-0">
                            <img src="images/cause-1.jpg" alt />
                            <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                              <Link to = "/" className="btn gradient-bg mr-2">
                                Donate Now
                              </Link>
                            </div>
                            {/* .figure-overlay */}
                          </figure>
                          <div className="cause-content-wrap">
                            <header className="entry-header d-flex flex-wrap align-items-center">
                              <h3 className="entry-title w-100 m-0">
                                <Link to = "/">Bring water to the childrens</Link>
                              </h3>
                            </header>
                            {/* .entry-header */}
                            <div className="entry-content">
                              <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris tempus vestib ulum
                                mauris.
                              </p>
                            </div>
                            {/* .entry-content */}
                            <div className="fund-raised w-100">
                              <div className="fund-raised-bar-1 barfiller">
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
                      {/* .swiper-slide */}
                      <div className="swiper-slide">
                        <div className="cause-wrap">
                          <figure className="m-0">
                            <img src="images/cause-2.jpg" alt />
                            <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                              <Link to = "/" className="btn gradient-bg mr-2">
                                Donate Now
                              </Link>
                            </div>
                            {/* .figure-overlay */}
                          </figure>
                          <div className="cause-content-wrap">
                            <header className="entry-header d-flex flex-wrap align-items-center">
                              <h3 className="entry-title w-100 m-0">
                                <Link to = "/">Education for all</Link>
                              </h3>
                            </header>
                            {/* .entry-header */}
                            <div className="entry-content">
                              <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris tempus vestib ulum
                                mauris.
                              </p>
                            </div>
                            {/* .entry-content */}
                            <div className="fund-raised w-100">
                              <div className="fund-raised-bar-2 barfiller">
                                <div className="tipWrap">
                                  <span className="tip" />
                                </div>
                                {/* .tipWrap */}
                                <span className="fill" data-percentage={70} />
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
                      {/* .swiper-slide */}
                      <div className="swiper-slide">
                        <div className="cause-wrap">
                          <figure className="m-0">
                            <img src="images/cause-3.jpg" alt />
                            <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                              <Link to = "/" className="btn gradient-bg mr-2">
                                Donate Now
                              </Link>
                            </div>
                            {/* .figure-overlay */}
                          </figure>
                          <div className="cause-content-wrap">
                            <header className="entry-header d-flex flex-wrap align-items-center">
                              <h3 className="entry-title w-100 m-0">
                                <Link to = "/">Bring water to the childrens</Link>
                              </h3>
                            </header>
                            {/* .entry-header */}
                            <div className="entry-content">
                              <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris tempus vestib ulum
                                mauris.
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
                      {/* .swiper-slide */}
                      <div className="swiper-slide">
                        <div className="cause-wrap">
                          <figure className="m-0">
                            <img src="images/cause-1.jpg" alt />
                            <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                              <Link to = "/" className="btn gradient-bg mr-2">
                                Donate Now
                              </Link>
                            </div>
                            {/* .figure-overlay */}
                          </figure>
                          <div className="cause-content-wrap">
                            <header className="entry-header d-flex flex-wrap align-items-center">
                              <h3 className="entry-title w-100 m-0">
                                <Link to = "/">Bring water to the childrens</Link>
                              </h3>
                            </header>
                            {/* .entry-header */}
                            <div className="entry-content">
                              <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris tempus vestib ulum
                                mauris.
                              </p>
                            </div>
                            {/* .entry-content */}
                            <div className="fund-raised w-100">
                              <div className="fund-raised-bar-4 barfiller">
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
                      {/* .swiper-slide */}
                      <div className="swiper-slide">
                        <div className="cause-wrap">
                          <figure className="m-0">
                            <img src="images/cause-2.jpg" alt />
                            <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                              <Link to = "/" className="btn gradient-bg mr-2">
                                Donate Now
                              </Link>
                            </div>
                            {/* .figure-overlay */}
                          </figure>
                          <div className="cause-content-wrap">
                            <header className="entry-header d-flex flex-wrap align-items-center">
                              <h3 className="entry-title w-100 m-0">
                                <Link to = "/">Education for all</Link>
                              </h3>
                            </header>
                            {/* .entry-header */}
                            <div className="entry-content">
                              <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris tempus vestib ulum
                                mauris.
                              </p>
                            </div>
                            {/* .entry-content */}
                            <div className="fund-raised w-100">
                              <div className="fund-raised-bar-5 barfiller">
                                <div className="tipWrap">
                                  <span className="tip" />
                                </div>
                                {/* .tipWrap */}
                                <span className="fill" data-percentage={70} />
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
                      {/* .swiper-slide */}
                      <div className="swiper-slide">
                        <div className="cause-wrap">
                          <figure className="m-0">
                            <img src="images/cause-3.jpg" alt />
                            <div className="figure-overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                              <Link to = "/" className="btn gradient-bg mr-2">
                                Donate Now
                              </Link>
                            </div>
                            {/* .figure-overlay */}
                          </figure>
                          <div className="cause-content-wrap">
                            <header className="entry-header d-flex flex-wrap align-items-center">
                              <h3 className="entry-title w-100 m-0">
                                <Link to = "/">Bring water to the childrens</Link>
                              </h3>
                            </header>
                            {/* .entry-header */}
                            <div className="entry-content">
                              <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mauris tempus vestib ulum
                                mauris.
                              </p>
                            </div>
                            {/* .entry-content */}
                            <div className="fund-raised w-100">
                              <div className="fund-raised-bar-6 barfiller">
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
                      {/* .swiper-slide */}
                    </div>
                    {/* .swiper-wrapper */}
                  </div>
                  {/* .swiper-container */}
                  {/* Add Arrows */}
                  <div className="swiper-button-next flex justify-content-center align-items-center">
                    <span>
                      <svg
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
                      </svg>
                    </span>
                  </div>
                  <div className="swiper-button-prev flex justify-content-center align-items-center">
                    <span>
                      <svg
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" />
                      </svg>
                    </span>
                  </div>
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .our-causes */}
          <div className="home-page-limestone">
            <div className="container">
              <div className="row align-items-end">
                <div className="coL-12 col-lg-6">
                  <div className="section-heading">
                    <h2 className="entry-title">
                      We love to help all the children that have problems in the
                      world. After 15 years we have many goals achieved.
                    </h2>
                    <p className="mt-5">
                      Dolor sit amet, consectetur adipiscing elit. Mauris tempus
                      vestib ulum mauris quis aliquam. Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                  {/* .section-heading */}
                </div>
                {/* .col */}
                <div className="col-12 col-lg-6">
                  <div className="milestones d-flex flex-wrap justify-content-between">
                    <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                      <div className="counter-box">
                        <div className="d-flex justify-content-center align-items-center">
                          <img src="images/teamwork.png" alt />
                        </div>
                        <div className="d-flex justify-content-center align-items-baseline">
                          <div
                            className="start-counter"
                            data-to={120}
                            data-speed={2000}
                          />
                          <div className="counter-k">K</div>
                        </div>
                        <h3 className="entry-title">Children helped</h3>
                        {/* entry-title */}
                      </div>
                      {/* counter-box */}
                    </div>
                    {/* .col */}
                    <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                      <div className="counter-box">
                        <div className="d-flex justify-content-center align-items-center">
                          <img src="images/donation.png" alt />
                        </div>
                        <div className="d-flex justify-content-center align-items-baseline">
                          <div
                            className="start-counter"
                            data-to={79}
                            data-speed={2000}
                          />
                        </div>
                        <h3 className="entry-title">Water wells</h3>
                        {/* entry-title */}
                      </div>
                      {/* counter-box */}
                    </div>
                    {/* .col */}
                    <div className="col-12 col-sm-4 mt-5 mt-lg-0">
                      <div className="counter-box">
                        <div className="d-flex justify-content-center align-items-center">
                          <img src="images/dove.png" alt />
                        </div>
                        <div className="d-flex justify-content-center align-items-baseline">
                          <div
                            className="start-counter"
                            data-to={253}
                            data-speed={2000}
                          />
                        </div>
                        <h3 className="entry-title">Volunteeres</h3>
                        {/* entry-title */}
                      </div>
                      {/* counter-box */}
                    </div>
                    {/* .col */}
                  </div>
                  {/* .milestones */}
                </div>
                {/* .col */}
              </div>
              {/* .row */}
            </div>
            {/* .container */}
          </div>
          {/* .our-causes */}
         
          {/* .site-footer */}
        </div>
      </div>
    );
}
