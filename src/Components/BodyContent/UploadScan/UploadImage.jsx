import React, { useState } from "react";
// import axios from "axios";
import axios from "axios";
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

  // Function to handle the Update button
  const handleUpdate = async () => {
    if (!image) {
      alert("No image selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    // Send the image to the backend
    // const response = await fetch("http://127.0.0.1:5000/predict", {
    //   method: "POST",
    //   body: formData,
    // });

    // const result = await response.json();

    // if (response.ok) {
    //   alert(`Predicted Disease: ${result.predicted_disease}`);
    //   // Optionally redirect or display the result on another page
    // } else {
    //   alert("Error: " + result.error);
    // }

    // Check if the image is being added to FormData
    console.log(image); // Logs the image file object
    console.log(formData.get("file")); // Logs the file from FormData

    try {
      // Send the image to the backend using axios
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure the content type is correct
          },
        }
      );

      // Get the result from the response
      if (response.status === 200) {
        alert(`Predicted Disease: ${response.data.predicted_disease}`);
      } else {
        alert("Error: Unable to get prediction");
      }
    } catch (error) {
      // console.error("Error uploading image: ", error);
      // alert("Error uploading image. Please try again.");

      console.error("Error uploading image: ", error);
      // Display the exact error message returned by the server (if any)
      if (error.response) {
        // Server responded with a status other than 2xx
        alert(`Error: ${error.response.data.error || "Unknown error"}`);
      } else if (error.request) {
        // No response received from the server
        alert("Error: No response from the server. Check your backend.");
      } else {
        // Something happened while setting up the request
        alert(`Error: ${error.message}`);
      }
    }
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
          <Button className="update-btn btn btn-success" onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
