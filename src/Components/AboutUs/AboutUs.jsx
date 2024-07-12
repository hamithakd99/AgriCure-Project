import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function AboutUs() {
  
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <h2>Welcome to our Website</h2>
        <p>Our AgriCure is a multilingual agricultural platform in Sinhala, Tamil, and English for farmers in Sri Lanka, integrating AI technology for accurate disease detection and management</p>
      <h3>Mission</h3>
      <p> Empower Sri Lankan farmers with AI-powered crop disease management, bridge the language gap with a multilingual platform in Sinhala, English, and Tamil, and foster a knowledge-sharing community for farmers.</p>
      <h3>Vision</h3>
      <p>Revolutionize Sri Lankan agriculture by fostering innovation and sustainability, ensuring food security for future generations, and improving the livelihoods of farmers and the overall well-being of Sri Lankan communities.</p>
      </div>

      <h2 style={{ textAlign: "center" }}>The Team Behind AgriCure</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="C:\Users\DELL\OneDrive\Documents\AgriCure-1\AgriCure-Project\public\images\Hamitha.jpg" alt="K.D.H.Apsara" style={{ width: "100%" }} />
            <div className="container">
              <h2>K.D.H.Apsara</h2>
              <p className="title">UI/UX Designer</p>
              <p>hamithakd99@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="C:\Users\DELL\OneDrive\Documents\AgriCure-1\AgriCure-Project\public\images\Pawani.jpg" alt="J.A.P.W.Jayaweera" style={{ width: "100%" }} />
            <div className="container">
              <h2>J.A.P.W.Jayaweera</h2>
              <p className="title">Full Stack Developer</p>
              <p>pawaniw07@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="C:\Users\DELL\OneDrive\Documents\AgriCure-1\AgriCure-Project\public\images\Sampavy.jpg" alt="S.Kangeyan" style={{ width: "100%" }} />
            <div className="container">
              <h2>S.Kangeyan</h2>
              <p className="title">Full Stack Developer</p>
              <p>sma990731@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
          <img src="C:\Users\DELL\OneDrive\Documents\AgriCure-1\AgriCure-Project\public\images\Buddini.jpg" alt="Y.S.M.B.U.Yallarawa" style={{ width: "100%" }} />
            <div className="container">
              <h2>Y.S.M.B.U.Yallarawa</h2>
              <p className="title">Full Stack Developer</p>
              <p>buddhiniyallarawa@gmail.com</p>
            </div>
          </div>
        </div>
      </div>


    </div>


  );
}
export default AboutUs;
