import React from 'react'

function Careers() {
  return (
    <>
    <div class="container-fluid careersimg">
      <div class="row">
        <div class="col-md-2"></div>
    <div class="col-md-8 text-white" style={{paddingTop: "140px"}}>
          <h1
            class="text-center careersh1"
          >
            CAREERS
          </h1>
        </div>
      </div>
    </div>



    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-5 mb-1 text-center ch">
                <p>COME WORK <b class="org">WITH US!</b></p>
            </div>
            <p class="cp">First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The work environment enables both professional and personal growth.</p>
        </div>
    </div>



    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-5 mb-1 text-center ch">
                <p>HOW TO <b class="org">APPLY!</b></p>
            </div>
            <p class="cp">First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The work environment enables both professional and personal growth</p>
        </div>
    </div>

    <div class="container">
        <div class="row mt-4">
            <div class="col-md-5 mt-3 ms-3">
                <h4 style={{fontWeight: "400"}} class="mt-5 mb-1">Steep learning curve</h4>
                <p class="cp">Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!</p>
                <h4 style={{fontWeight: "400"}} class="mt-5 mb-1">Growth opportunities</h4>
                <p class="cp">Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!</p>
                <h4 style={{fontWeight: "400"}} class="mt-5 mb-1">Exciting work environment</h4>
                <p class="cp">Work in a highly motivated environment with talented people. A positive work environment, ensures a productive and happy you.</p>
            </div>
            <div class="col-md-6 mb-5 ms-1">
                <div class="card" style={{boxShadow: "1px 1px 12px #020001"}}>
                    <h5 class="ms-4 mt-2">Share your Details</h5>
                    <div class="card-body">
                        <form action="">
                    <div class="mb-4">
                        <label for="" class="mb-2">Your Name:</label>
                        <input type="text" name="" class="form-control" placeholder="Name"/>

                    </div>
                    <div class="mb-3 mt-4">
                        <label for="" class="mb-2">Your Email</label>
                        <input type="email" name="" class="form-control" placeholder="Email"/>
                    </div>
                    <div class="mb-3 mt-4">
                        <label for="" class="mb-2">Your Phone:</label>
                        <input type="number" name="" class="form-control" placeholder="Phone"/>
                    </div>

                    <div class="mb-3 mt-4">
                        <label for="" class="mb-2">Message:</label>
                        <input type="text" name="" class="form-control" placeholder="Message"/>
                    </div>
                    <div class="d-md-flex">
                        <button type="submit" class="btn btn-warning btn-lg text-white mt-4">submit</button>
                    </div>
                   </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Careers