import React from "react";
import "./ScanningArea.css";
import UploadImage from "./UploadScan/UploadImage";
import PopUpWindow from "./WebCam/PopUpWindow";

function ScanningArea() {
  return (
    <div>
      <div className="wrapper-scan pb-5">
        <div className="container pt-md-5">
          <div className="scanning-area row row-gap-5 py-5 border border-successs">
            <div className="col-12 col-lg-5 d-flex flex-column align-items-center">
              <UploadImage />
            </div>

            <div className="or-txt col-12 col-lg-2 d-flex justify-content-center align-items-center">
              <h2>--- OR ---</h2>
            </div>

            <div className="image-scaner-section col-12 col-lg-5 d-flex flex-column align-items-center">
              <PopUpWindow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanningArea;
