import React from "react";

function Ourteam() {
  return (
    <>
      <div className="container-fluid ourteamimg">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-white" style={{ paddingTop: "140px" }}>
            <h1 className="text-center ourteamh1">meet the team</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-5 mt-4">
            <img
              src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg"
              alt=""
              className="w-100"
              style={{ height: "13.50cm" }}
            />
          </div>
          <div className="col-md-6 ms-1">
            <h1 className="mt-4">Priyank Sukhija</h1>
            <h6>C.E.O. & M.D.</h6>
            <p className="b">
              A 19-year-old dropout kid, who was just setting up his first
              venture, envisioned what nobody thought would make him a business
              tycoon in the hospitality industry. Once he began, there was no
              stopping this entrepreneur from reaching the heights he has
              reached today. It is the passion and creative streak of Priyank
              Sukhija that has made him the most watched-out restaurateur of
              today’s time. Coming from a family of lawyers, he ventured into
              the business world on his own with Lazeez Affaire in 1999 and has
              never looked back since.
            </p>
            <button
              className="btn btn-warning btn-lg text-white"
              style={{ textTransform: "capitalize" }}
            >
              read more
            </button>
            <div className="col-md-6 mb-5">
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





      <div class="container">
        <div class="row">
            <div class="col-md-4">
               <div class="card shadow ms-2 mb-4 photo1">
                <h4 style={{paddingTop: "7cm"}} class="text-center text-white">Y. P. ASHOK</h4>
                <p class="text-center text-white">chairman</p>
               </div>
            </div>

            <div class="col-md-4">
               <div class="card shadow ms-2 mb-4 photo2">
                <h4 style={{paddingTop: "7cm"}} class="text-center text-white">B.R. SACHDEVA</h4>
                <p class="text-center text-white">Director Finance & Legal</p>
               </div>
            </div>

            <div class="col-md-4">
               <div class="card shadow ms-2 mb-4 photo3">
                <h4 style={{paddingTop: "7cm"}} class="text-center text-white">SAGAR BAJAJ</h4>
                <p class="text-center text-white">Corporate Chef</p>
               </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
               <div class="card shadow ms-2 mb-4 photo4">
                <h4 style={{paddingTop: "7cm"}} class="text-center text-white">JAY SHANKAR NATRAJ</h4>
                <p class="text-center text-white">Franchise Lead</p>
               </div>
            </div>

            <div class="col-md-4">
               <div class="card shadow ms-2 mb-4 photo5">
                <h4 style={{paddingTop: "7cm"}} class="text-center text-white">VIBHUTI SOOD</h4>
                <p class="text-center text-white">PR And Communications Head</p>
               </div>
            </div>

            <div class="col-md-4">
            </div>
        </div>
         </div>
    </>
  );
}

export default Ourteam;