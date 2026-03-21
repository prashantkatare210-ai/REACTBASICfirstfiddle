
import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-4">

        <div className="container">
          <div className="row">

            <div className="col-md-5">
              <img 
                src="https://pn-paul.netlify.app/image/ff-logo-02.png"
                alt=""
                style={{marginTop:"30px"}}
                width="50%"
              />
            </div>

            <div className="col-md-7">
              <h2><b style={{color:"orange"}}>CONTACT</b> US</h2>

              <p>
                We're a team focusing on redefining the way the hospitality industry works by bringing in concept based restaurants across India.
                We are truly committed to catering to the ever-changing cosmopolitan taste of the customer.
              </p>

              <div className="row">

                <div className="col-md-6">
                  <h4>Address</h4>
                  <p>
                    S-357 2nd Floor, Block S, Panchsheel Park South,
                    New Delhi, Delhi 110017
                  </p>
                </div>

                <div className="col-md-6">
                  <h4>Enquiry</h4>
                  <p>Email: customercare@firstfiddle.in</p>
                </div>

              </div>

            </div>

          </div>
        </div>

      

      </footer>

      <div className="container-fluid" style={{backgroundColor:"black"}}>
  <div className="row">
    
    <div className="col-md-3"></div>

    <div className="col-md-6 text-light">
      <p className="mt-3" style={{fontWeight:250}}>
        EMPLOYEE POLICIES | PRIVACY POLICY | TERMS AND CONDITIONS | BLOG...
      </p>
    </div>

  </div>
</div>




    </>
  )
}

export default Footer