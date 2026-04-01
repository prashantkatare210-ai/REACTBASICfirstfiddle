    import React from "react";

function Home() {
  return (
    <>
      <div className="carousel slide" data-bs-ride="carousel" id="s" data-bs-interval="3000">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#s"
                    data-bs-slide-to="0"
                    className="active"
                    ></button>
                    <button type="button" data-bs-target="#s" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#s" data-bs-slide-to="2"></button>
        </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://pn-paul.netlify.app/image/slider1.jpg"
            alt=""
            className="w-100"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://pn-paul.netlify.app/image/slider22.jpg"
            alt=""
            className="w-100"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://pn-paul.netlify.app/image/slidwr33.jpg"
            alt=""
            className="w-100"
          />
        </div>
      </div>
       <button className="carousel-control-prev"
       type="button"
       data-bs-target="#s"
       data-bs-slide="prev">
    <span className="carousel-control-prev-icon"></span>
    </button>
    <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#s"
    data-bs-slide="next">
    <span className="carousel-control-next-icon"></span>
    </button>
    </div>

      <div className="container">
      <h1 className="text-center a">
        Welcome To
        <b style={{color: "orange"}}>FIRST FIDDLE</b>
      </h1>
      <br />
      <div className="row">
        <div className="col-md-7">
          <p className="b">
            First Fiddle Restaurants, one of India's most prominent F&B
            companies in the casual dining sector, is headed by Priyank Sukhija.
            Starting the journey from Lazeez Affair in 1999 to Miso Sexy and
            Bougie in 2022, we have created wave after wave in the industry with
            over 30+ restaurants, brands, and franchises across India.
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning btn-lg text-white">join the journey</button>
          </div>
        </div>
        <div className="col-md-5">
          <img
            src="https://pn-paul.netlify.app/image/first.jpg"
            alt=""
            className="img123"
          />
        </div>
      </div>
    </div>

      <div className="container-fluid c mt-4">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center text-white">
            <h2 className="d">MEDIA MENTIONS</h2>
            <p className="e">
              We've been making splashes and headlines since 1999 for our
              innovative concepts and aesthetic ideations, experimental
              gastronomic affairs, and exotic mixology. We’ve made our way from
              the heart of the country into the hearts of its people!
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-warning btn-lg text-white">
                Know more
              </button>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>



      <div className="container mt-4">
      <h1 className="text-center a">
        EXPLORE
        <b style={{color: "orange"}}>OUR BRANDS</b>
      </h1>
      <br />
      <div className="row">
        <div className="col-md-3 mb-3">
          <img
            src="https://pn-paul.netlify.app/image/ffpic1.jpg"
            alt=""
            className="w-100"
          />
        </div>

        <div className="col-md-3 mb-3">
          <img
            src="https://pn-paul.netlify.app/image/ffpic2.jpg"
            alt=""
            className="w-100"
          />
        </div>

        <div className="col-md-3 mb-3">
          <img
            src="https://pn-paul.netlify.app/image/ffpic3.jpg"
            alt=""
            className="w-100"
          />
        </div>

        <div className="col-md-3 mb-3">
          <img
            src="https://pn-paul.netlify.app/image/ffpic4.jpg"
            alt=""
            className="w-100"
          />
        </div>
      </div>
    </div>

    <div className="container-fluid f mt-4">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center text-white">
          <h2 className="d">EXPERIENCE OUR CONCEPTS</h2>
          <p className="e">
            Moving beyond just offering Indian, international, and fusion
            cuisines, our restaurants create magic with our special events,
            mood-setting music, Insta-worthy aesthetics, and tongue-tingling
            signatures! Head over to experience it for yourself!
          </p>
          <div className="d-flex justify-content-center">
            <button className="btn btn-warning btn-lg text-white">Know more</button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>


      
    </>
  );
}

export default Home;