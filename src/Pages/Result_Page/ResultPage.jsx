import React from "react";
import "./ResultPage.css";
import image from "../../assets/background.png";
import Ratio from "react-bootstrap/Ratio";
import Footer from "../../Components/Footer Section/Footer";

function ResultPage() {
  return (
    <div>
      <div className="header">
        <h1 className="py-md-4 py-2 px-3 px-md-5">
          Result of Identified Tea leave
        </h1>
        <p></p>
      </div>
      <div className="body mt-5">
        <div className="container">
          <div className="content d-flex justify-content-between align-items-center gap-5">
            <div className="image-gallery d-flex flex-column justify-content-between align-items-center gap-3 rounded-5 p-3">
              <div className="main-image d-flex justify-content-center align-items-center rounded-5 p-3">
                <img src={image} alt="" className="rounded-5" />
              </div>
              <div className="other-images p-3 d-flex justify-content-around align-items-center gap-3">
                <div className="img1">
                  <img src={image} alt="" className="rounded-3"/>
                </div>
                <div className="img1">
                  <img src={image} alt="" className="rounded-3"/>
                </div>
                <div className="img1">
                  <img src={image} alt="" className="rounded-3"/>
                </div>
              </div>
            </div>
            <div className="content-details d-flex flex-column justify-content-between gap-5">
              <h1>Disease Name</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perspiciatis ea deleniti dolor odio reiciendis fugiat totam
                libero quisquam aperiam maiores, quam incidunt. Quaerat, amet!
                Beatae quibusdam magni aliquam maxime omnis atque ratione
                voluptas amet iste numquam. Error rem reiciendis ipsum! Nostrum
                natus nam vero ea rem totam sapiente. Accusantium, earum!
              </p>
            </div>
          </div>
        </div>
        <div className="recommand-solution mt-5">
          <div className="titleofContent">
            <h2 className="text-center">~ Recommended Solutions ~</h2>
          </div>
          <div className="solutions">
            
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default ResultPage;
