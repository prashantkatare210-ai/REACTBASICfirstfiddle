
import React from 'react'

function Home() {
    return (
        <>
            <div>
                <img src="https://pn-paul.netlify.app/image/slider1.jpg" alt="" className='w-100' />

            </div>

            <div className='container'>
                <h2 className='a'>Welcome To <b style={{ color: "orange" }}>FIRST FIDDLEE</b></h2>
                <br />
                <div className='row'>
                    <div className='col-md-7'>
                        <p>
                            First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector, is headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and Bougie in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands, and franchises across India.
                        </p>

                        <center>
                            <button className='btn btn-warning btn-lg mt-5 mb-5 text-light'>JOIN THE JOURNEY</button>
                        </center>

                    </div>
                    <div className='col-md-5'>
                        <img src="https://pn-paul.netlify.app/image/first.jpg" alt="" />

                    </div>
                </div>

            </div>
            <br />
            <br />

            {/* first container end  */}
            {/* second container start */}


            <div class="container-fluid e">
                <div class="row">
                    <div class="col-md-2"> </div>
                    <div class="col-md-8 text-center mt-4">
                        <h2 class="c">MEDIA MENTIONS</h2>
                        <p class="d">We've been making splashes and headlines since 1999 for our innovative concepts and
                            aesthetic ideations,
                            experimental gastronomic affairs, and exotic mixology. We,ve made our way from the heart of the
                            country
                            into the hearts of its people! </p>
                        <div class="text-center">
                            <button class="btn btn-warning mt-5" >Know More...</button  >
                        </div>


                    </div>
                    <div class="col-md-2"></div>






                </div>


            </div>
            <br />

            {/* secod container end  */}
            {/* third container start */}

            <div className="container py-5">
                <h1 className="text-center mb-4">
                    EXPLORE <span style={{ color: "orange" }}>OUR BRANDS</span>
                </h1>

                <div className="row g-4">
                    <div className="col-md-3">
                        <img
                            src="https://pn-paul.netlify.app/image/ffpic1.jpg" alt="" className="w-100 img-fluid rounded shadow" />
                    </div>

                    <div className="col-md-3">
                        <img
                            src="https://pn-paul.netlify.app/image/ffpic2.jpg" alt="" className="w-100 img-fluid rounded shadow"
                        />
                    </div>

                    <div className="col-md-3">
                        <img
                            src="https://pn-paul.netlify.app/image/ffpic3.jpg" alt="" className="w-100 img-fluid rounded shadow" />
                    </div>

                    <div className="col-md-3">
                        <img
                            src="https://pn-paul.netlify.app/image/ffpic4.jpg" alt="" className="w-100 img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
            <br />
            <div class="container-fluid g">
                <div class="row">
                    <div class="col-md-2"> </div>
                    <div class="col-md-8 text-center mt-4">
                        <h2 class="c">EXPERIENCE OUR CONCEPTS</h2>
                        <p class="d">Moving beyond just offering Indian, international, and fusion cuisines, our restaurants create magic with our special events, mood-setting music, Insta-worthy aesthetics, and tongue-tingling signatures! Head over to experience it for yourself! </p>
                        <div class="text-center">
                            <button class="btn btn-warning mt-5">Know More...</button  >
                        </div>


                    </div>
                    <div class="col-md-2"></div>






                </div>


            </div >






        </>
    )
}

export default Home