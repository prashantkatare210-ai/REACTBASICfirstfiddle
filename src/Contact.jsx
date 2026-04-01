import React from 'react'

function Contact() {
  return (
    <>
    <div class="container-fluid contactimg">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-white" style={{paddingTop: "140px"}}>
          <h1
            class="text-center contacth1"
          >
            CONTACT US
          </h1>
        </div>
      </div>
    </div>



    <div class="container">
        <div class="row">
            <div class="col-md-6 mt-4 send">
                <h4 class="mt-4 mb-4 contact">SEND US MESSAGE</h4>
                <form action="">
                    <div class="mb-3 mt-4" style={{fontWeight: "100"}}>
                        <input type="text" name="" class="form-control" placeholder="Name*"/>

                    </div>
                    <div class="mb-3 mt-4">
                        <input type="email" name="" class="form-control" placeholder="Email*"/>
                    </div>
                    <div class="mb-3 mt-4">
                        <input type="number" name="" class="form-control" placeholder="Phone*"/>
                    </div>

                    <div class="mb-3 mt-4">
                        <input type="text" name="" class="form-control" placeholder="Message*"/>
                    </div>
                    <div class="d-md-flex">
                        <button type="submit" class="btn btn-warning btn-lg text-white">submit</button>
                    </div>
                   </form>
            </div>
            <div class="col-md-5 mt-4 ms-1 contactinfo">
                <h2 class="mt-4 mb-4 contacth4">CONTACT INFO</h2>
                <h6 class="org">Address</h6>
                <p>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</p>
                <h6 class="org">For Franchise Enquiry</h6>
                <p>MOBILE: <b class="org">+91 9313663486</b></p>
                <p>EMAIL: <b class="org">franchise@firstfiddle.in</b></p>
                <h6 class="org">For HR Enquiry</h6>
                <p>MOBILE: <b class="org">+91 9999304427</b></p>
                <p>EMAIL: <b class="org">hr@firstfiddle.in</b></p>
                <h6 class="org">For Other Enquiry</h6>
                <p>PHONE: <b class="org">7676380000</b></p>
                <p>EMAIL: <b class="org">customercare@firstfiddle.in</b></p>
                <p>Open: Monday - Saturday 10:30 - 19:30</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact