import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Hamitha from '../../assets/images/Hamitha.jpg';
import Pawani from '../../assets/images/Pawani.jpg';
import Sampavy from '../../assets/images/Sampavy.jpg';
import Buddini from '../../assets/images/Buddini.jpg';
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="container">
      <div className="about-section">
        <h1>About Us</h1><br/>
        <h4><b>Welcome to our Website</b></h4>
        <p><br/>
          Our AgriCure is a multilingual agricultural platform for farmers in Sri Lanka, integrating AI technology for accurate disease detection and management.
        </p>
        <div id="about-1">
          <div class="content-box-lg">
            <div class="row">
              <div class="col-md-6">
                <div class="card-1">
                  <div class="about-item text-center">
                    <i class="fa fa-book"></i>
                      <h3>MISSION</h3>
                          <p> Empower Sri Lankan farmers with AI-powered crop disease management, bridge the language gap with a multilingual platform in Sinhala, English, and Tamil, and foster a knowledge-sharing community for farmers.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card-1">
                  <div class="about-item text-center">
                    <i class="fa fa-book"></i>
                      <h3>VISION</h3>
                      <p> Revolutionize Sri Lankan agriculture by fostering innovation and sustainability, ensuring food security for future generations, and improving the livelihoods of farmers and the overall well-being of Sri Lankan communities.</p>        
                  </div>
                </div>
              </div> 
            </div>  
          </div>  
        </div>
      <br/>
      <br/>
      <h1 style={{ textAlign: "center" }}>The Team Behind AgriCure</h1>
      <div class="row">
      <div class="content-box-lg">
        <div className="column">
          <div className="card">
            <img src={Hamitha} alt="K.D.H.Apsara" style={{ width: "70%" }} />
            <div className="container-1">
              <h4>K.D.H.Apsara</h4>
              <p className="title">UI/UX Designer</p>
              <p>hamithakd99@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={Pawani} alt="J.A.P.W.Jayaweera" style={{ width: "70%" }} />
            <div className="container-1">
              <h4>J.A.P.W.Jayaweera</h4>
              <p className="title">Full Stack Developer</p>
              <p>pawaniw07@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={Sampavy} alt="S.Kangeyan" style={{ width: "70%" }} />
            <div className="container-1">
              <h4>S.Kangeyan</h4>
              <p className="title">Full Stack Developer</p>
              <p>sam990731@gmail.com</p><br/>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={Buddini} alt="Y.S.M.B.U.Yallarawa" style={{ width: "70%"}} />
            <div className="container-1">
              <h4>Y.S.M.B.U.Yallarawa</h4>
              <p className="title">Full Stack Developer</p>
              <p>buddhiniyallarawa@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default AboutUs;
