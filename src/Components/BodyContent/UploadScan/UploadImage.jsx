import React, { useState } from "react";
import "./UploadImage.css";
import imageUplord from "../../../assets/upload-image.png";
import fileImg from "../../../assets/file.png";
import deleteImg from "../../../assets/delete.png";
import Button from "react-bootstrap/Button";

function UploadImage() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No Selected File");

  // Function to shorten the file name
  const shortenFileName = (name, maxLength = 20) => {
    if (name.length <= maxLength) return name;
    const ext = name.slice(name.lastIndexOf("."));
    return name.slice(0, maxLength - ext.length - 3) + "..." + ext;
  };

  return (
    <div>
      <div className="UploadImage">
        <form
          action=""
          className="d-flex flex-column align-items-center justify-content-center rounded-3"
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                const shortName = shortenFileName(files[0].name);
                setFileName(shortName);
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />
          {image ? (
            <img
              src={image}
              width={200}
              alt={fileName}
              className="updated-one"
            />
          ) : (
            <>
              <img
                src={imageUplord}
                alt="image-upload"
                sizes="60"
                className="previous-image"
              />
              <p>Brows File to Upload here</p>
            </>
          )}
        </form>
        <div className="d-flex flex-column justify-content-between">
          <section className="uploaded-row d-flex justify-content-between my-3 p-2">
            <img src={fileImg} alt="File Icon" className="fileImg" />
            <span>
              {fileName}
              <img
                src={deleteImg}
                alt="Delete icon"
                className="deleteImg"
                onClick={() => {
                  setFileName("No Selected File");
                  setImage(null);
                }}
              />
            </span>
          </section>
          <Button className="update-btn btn btn-success">Update</Button>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
