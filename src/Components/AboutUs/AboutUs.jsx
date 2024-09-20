import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Hamitha from "../../assets/images/Hamitha.jpg";
import Pawani from "../../assets/images/Pawani.jpg";
import Sampavy from "../../assets/images/Sampavy.jpg";
import Buddini from "../../assets/images/Buddini.jpg";
import Cards from "../AboutUs/Cards";
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="container py-5">
      <div className="about-section text-center">
        <h1>About Us</h1>
        <br />
        {/* <p><br/>
          Our AgriCure is a multilingual agricultural platform for farmers in Sri Lanka, integrating AI technology for accurate disease detection and management.
        </p> */}
        <div id="about-1">
          <div class="content-box-lg">
            <div class="row">
              <div class="col-md-6">
                <div class="card-1">
                  <div class="about-item text-center rounded-3 bg-body-secondary p-2">
                    <i class="fa fa-book"></i>
                    <h4>MISSION</h4>
                    <p>
                      {" "}
                      Empower Sri Lankan farmers with AI-powered crop disease
                      management, bridge the language gap with a multilingual
                      platform in Sinhala, English, and Tamil, and foster a
                      knowledge-sharing community for farmers.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-1">
                  <div class="about-item text-center rounded-3 bg-black p-2 text-white">
                    <i class="fa fa-book"></i>
                    <h4>VISION</h4>
                    <p>
                      {" "}
                      Revolutionize Sri Lankan agriculture by fostering
                      innovation and sustainability, ensuring food security for
                      future generations, and improving the livelihoods of
                      farmers and the overall well-being of Sri Lankan
                      communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h3 style={{ textAlign: "center" }}>The Team Behind AgriCure</h3>
        <div class="row team py-3 rounded-3 bg-opacity-25 bg-black mt-3">
          <div className="col-12 col-lg-3 col-md-6 mb-3 mb-sm-2 d-flex justify-content-center align-items-center">
          <Cards
            width={"17rem"}
            minHeight={"28rem"}
            image={Hamitha}
            name={"Hamitha Apsara"}
            title={"UI/UX Designer & FrontEnd Developer"}
            email={"hamithakd99@gmail.com"}
          />
          </div>
          <div className="col-12 col-lg-3 col-md-6 mb-3 mb-sm-2 d-flex justify-content-center align-items-center">
          <Cards
            width={"17rem"}
            minHeight={"28rem"}
            image={Pawani}
            name={"J.A.P.W.Jayaweera"}
            title={"FrontEnd Developer & ML Developer"}
            email={"pawaniw07@gmail.com"}
          />
          </div>
          <div className="col-12 col-lg-3 col-md-6 mb-3 mb-sm-2 d-flex justify-content-center align-items-center">
          <Cards
            width={"17rem"}
            minHeight={"28rem"}
            image={Sampavy}
            name={"Sampavy Kangeyan"}
            title={"FrontEnd Developer & ML Developer"}
            email={"sam990731@gmail.com"}
          />
          </div>
          <div className="col-12 col-lg-3 col-md-6 mb-3 mb-sm-2 d-flex justify-content-center align-items-center">
          <Cards
            width={"17rem"}
            minHeight={"28rem"}
            image={Buddini}
            name={"Y.S.M.B.U.Yallarawa"}
            title={"BackEnd Developer"}
            email={"buddhiniyallarawa@gmail.com"}
          />
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
