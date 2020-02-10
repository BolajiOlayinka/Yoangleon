import React from "react";
import {Link} from 'react-router-dom';

export default function Cause() {
  return (
    <div>
      <div>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>The Cause</h1>
              </div>
              {/* .col */}
            </div>
            {/* .row */}
          </div>
          {/* .container */}
        </div>
        {/* .page-header */}
        <div className="highlighted-cause">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-7 order-2 order-lg-1">
                <div className="section-heading">
                  <h2 className="entry-title">
                    We love to help all the children that have problems in the
                    world. After 15 years we have many goals achieved.
                  </h2>
                </div>
                {/* .section-heading */}
                <div className="entry-content mt-5">
                  <p>
                    Dolor sit amet, consectetur adipiscing elit. Mauris tempus
                    vestib ulum mauris quis aliquam. Lorem ipsum dolor sit amet.
                  </p>
                </div>
                {/* .entry-content */}
                <div className="fund-raised w-100 mt-5">
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
                    <div className="fund-raised-goal mt-4">Goal: $70 000</div>
                    {/* .fund-raised-goal */}
                  </div>
                  {/* .fund-raised-details */}
                </div>
                {/* .fund-raised */}
                <div className="entry-footer mt-5">
                  <Link to = "/" className="btn gradient-bg">
                    Donate Now
                  </Link>
                </div>
                {/* .entry-footer */}
              </div>
              {/* .col */}
              <div className="col-12 col-lg-5 order-1 order-lg-2">
                <img src="images/oshomah.jpg" alt />
              </div>
              {/* .col */}
            </div>
            {/* .row */}
          </div>
          {/* .container */}
        </div>
        {/* .highlighted-cause */}
        <div className="short-content-wrap">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="short-content">
                  <h3 className="entry-title">Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit
                    amet, consectetur. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Mauris tempus vestibulum mauris quis
                    aliquam. Integer accumsan sodales odio, id tempus velit
                    ullamc.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="short-content">
                  <h3 className="entry-title">Additional Information</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tempus vestibulum mauris quis aliquam. Integer
                    accumsan sodales odio, id tempus velit ullamcorper id.
                    Quisque at erat eu libero consequat tempus. Quisque molestie
                    convallis tempus. Ut semper purus metus.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="short-content">
                  <h3 className="entry-title">Our Goal</h3>
                  <p>
                    Integer accumsan sodales odio, id tempus velit ullamcorper
                    id. Quisque at erat eu libero consequat tempus. Quisque
                    molestie convallis tempus. Ut semper purus metus, a euismod
                    sapien sodales ac. Duis viverra eleifend fermentum. Donec
                    sagittis lacus sit amet augue sodales, vel cursus enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="donation-form-wrap">
                <h2>Make a donation</h2>
                <h4 className="mt-5">How much do you want to donate?</h4>
                <form className="donation-form">
                  <div className="donate-amount-wrap d-flex flex-wrap align-items-center mt-5">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="donation_amount"
                        defaultValue={10}
                      />
                      <span className="donate-amount">$10</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="donation_amount"
                        defaultValue={20}
                      />
                      <span className="donate-amount">$20</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="donation_amount"
                        defaultValue={25}
                        defaultChecked="checked"
                      />
                      <span className="donate-amount">$25</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="donation_amount"
                        defaultValue={50}
                      />
                      <span className="donate-amount">$50</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="donation_amount"
                        defaultValue={100}
                      />
                      <span className="donate-amount">$100</span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="donation_amount"
                        defaultValue="custom"
                      />
                      <span className="donate-amount">Other Amount</span>
                    </label>
                  </div>
                  <div className="payment-type d-flex flex-wrap align-items-center">
                    <h4 className="w-100 mt-5">Payment Type</h4>
                    <label className="d-flex align-items-center mt-4">
                      <input
                        type="radio"
                        name="payment_type"
                        defaultValue="One time"
                      />
                      <span className="payment-type-radio" />
                      <span className="centered-dot" />
                      One time
                    </label>
                    <label className="d-flex align-items-center mt-4">
                      <input
                        type="radio"
                        name="payment_type"
                        defaultValue="Recurring"
                        defaultChecked="checked"
                      />
                      <span className="payment-type-radio" />
                      <span className="centered-dot" />
                      Recurring
                    </label>
                  </div>
                  <div className="billing-information  d-flex flex-wrap justify-content-between align-items-center">
                    <h4 className="w-100 mt-5 mb-3">Billing Information</h4>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="City" />
                    <input type="number" placeholder="Postcode" />
                    <input type="text" placeholder="Country" />
                  </div>
                  <div className="payment-type d-flex flex-wrap align-items-center">
                    <h4 className="w-100 mt-5">Payment Method</h4>
                    <label className="d-flex align-items-center mt-4">
                      <input
                        type="radio"
                        name="payment_method"
                        defaultValue="Credit Card"
                      />
                      <span className="payment-type-radio" />
                      <span className="centered-dot" />
                      Credit Card
                    </label>
                    <label className="d-flex align-items-center mt-4">
                      <input
                        type="radio"
                        name="payment_method"
                        defaultValue="PayPal"
                        defaultChecked="checked"
                      />
                      <span className="payment-type-radio" />
                      <span className="centered-dot" />
                      PayPal
                    </label>
                  </div>
                  <input
                    className="btn gradient-bg mt-5"
                    type="submit"
                    defaultValue="Donate Now"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
