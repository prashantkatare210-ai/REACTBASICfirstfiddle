import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="container-fluid">
        <div className="row" style={{background: "#111215"}}>
          <div className="col-md-5 text-center mt-4 mb-4">
            <img
              className="h"
              src="https://pn-paul.netlify.app/image/ff-logo-02.png"
              alt=""
            />
          </div>
          <div className="col-md-7 k">
            <h2 className="g">
              <span style={{color: "orange"}}>CONTACT</span>
              <b style={{color: "white",paddingLeft: "10px"}}>US</b>
            </h2>
            <p className="color i">
              We're a team focusing on redefining the way the hospitality
              industry works by bringing in concept based restaurants across
              India. We are truly committed to catering to the ever-changing
              cosmopolitan taste of the customer and revolutioning the F & B
              industry!
            </p>
            <div className="row">
              <div className="col-md-6 color">
                <h3 className="j">Address</h3>
                <p>
                  S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel
                  Park, New Delhi, Delhi 110017
                </p>
              </div>
              <div className="col-md-6 color">
                <h3 className="j">Enquiry</h3>
                <p>
                  Email:
                  <span>
                    customercare@firstfiddle.in
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="mt-4 mb-4 l">
                <a href="" className="l">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="" className="l">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="l">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              </div>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="pt-2 pb-2 m">
            <h3>
              EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG |
              APP
              <br />
              COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer