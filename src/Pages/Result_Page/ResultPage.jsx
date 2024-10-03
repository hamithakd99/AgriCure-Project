import React, { useEffect, useState } from "react";
import "./ResultPage.css";
import image from "../../assets/background.png";
import Ratio from "react-bootstrap/Ratio";
import Footer from "../../Components/Footer Section/Footer";
import db from "../../firebaseConfig"; // Import Firebase configuration
import { ref, get, child } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  listAll,
  getDownloadURL,
} from "firebase/storage"; // Import Firebase Storage
import { useParams } from "react-router-dom";

function ResultPage() {
  const { diseaseKey } = useParams();

  // Define state to hold disease data
  const [diseaseData, setDiseaseData] = useState({
    name: "",
    scientificName: "",
    description: "",
    solution: "",
  });

  // State to hold image URLs
  const [imageURLs, setImageURLs] = useState([]);

  // Fetch disease data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(db);
      try {
        // Fetch the specific disease data from the 'diseases' node in Firebase
        const snapshot = await get(child(dbRef, `diseases/${diseaseKey}`)); // Replace `AlgalLeafSpot` with your disease key
        console.log(snapshot); // Log the snapshot
        if (snapshot.exists()) {
          const data = snapshot.val();
          setDiseaseData({
            name: data.name, // You can modify this if it's stored as a separate field in Firebase
            scientificName: data.scientificName,
            description: data.description,
            solution: data.solution,
          });
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [diseaseKey]);

  // Fetch images from Firebase Storage
  useEffect(() => {
    const fetchImages = async () => {
      const storage = getStorage(); // Get storage instance
      const folderRef = storageRef(storage, `${diseaseKey}/`); // Reference to disease folder in Firebase Storage

      try {
        const result = await listAll(folderRef);
        const urls = await Promise.all(
          result.items.map((item) => getDownloadURL(item)) // Get download URLs for all images
        );
        setImageURLs(urls); // Set image URLs in state
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };

    fetchImages();
  }, [diseaseKey]);

  return (
    <div>
      <div className="header">
        <h1 className="py-md-4 py-2 px-3 px-md-5">
          Result of Identified Tea leave
        </h1>
        <p></p>
      </div>
      <div className="body mt-5">
        <div className="container-fluid">
          <div className="content d-flex justify-content-between align-items-center gap-5">
            {/* <div className="image-gallery d-flex flex-column justify-content-between align-items-center gap-3 rounded-5 p-3">
              <div className="main-image d-flex justify-content-center align-items-center rounded-5 p-3">
                <img src={image} alt="" className="rounded-5" />
              </div>
              <div className="other-images p-3 d-flex justify-content-around align-items-center gap-3">
                <div className="img1">
                  <img src={image} alt="" className="rounded-3" />
                </div>
                <div className="img1">
                  <img src={image} alt="" className="rounded-3" />
                </div>
                <div className="img1">
                  <img src={image} alt="" className="rounded-3" />
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="image-gallery d-flex flex-column justify-content-between align-items-center gap-3 rounded-5 p-3 ">
                  {/* Main Image */}
                  <div className="main-image d-flex justify-content-center align-items-center rounded-5 p-3">
                    {/* If images are available, display the first image */}
                    {imageURLs.length > 0 ? (
                      <img
                        src={imageURLs[0]}
                        alt="Main Disease Image"
                        className="rounded-5"
                      />
                    ) : (
                      <img
                        src={image}
                        alt="Placeholder"
                        className="rounded-5"
                      />
                    )}
                  </div>

                  {/* Other Images */}
                  <div className="other-images p-1 p-md-2 d-flex justify-content-around align-items-center gap-1 gap-md-2 rounded-bottom">
                    {imageURLs.slice(1).map((url, index) => (
                      <div className="img1" key={index}>
                        <img
                          src={url}
                          alt={`Disease ${index + 1}`}
                          className="rounded-3"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="content-details d-flex flex-column justify-content-evenly align-items-center">
                  <div className="names-science d-flex align-items-center border rounded-pill p-3 bg-success-subtle">
                    <div className="name">
                      <h1>{diseaseData.name} /</h1>
                    </div>
                    <div className="science-name">
                      <h4>
                        <figure>
                          <blockquote class="blockquote">
                            <h4>
                              <em>{diseaseData.scientificName}</em>
                            </h4>
                          </blockquote>
                          <figcaption class="blockquote-footer">
                            scientific Name
                          </figcaption>
                        </figure>
                      </h4>
                    </div>
                  </div>
                  <div className="description">
                    <p className="fs-5">{diseaseData.description}</p>
                  </div>
                  <div className="recommand-solution border border-success rounded p-3 bg-success bg-gradient">
                    <div className="titleofContent">
                      <h2 className="text-center">~ Recommended Solutions ~</h2>
                    </div>
                    <div className="solutions text-white">
                      <p className="">{diseaseData.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="image-gallery d-flex flex-column justify-content-between align-items-center gap-3 rounded-5 p-3">
              
              <div className="main-image d-flex justify-content-center align-items-center rounded-5 p-3">
                
                {imageURLs.length > 0 ? (
                  <img
                    src={imageURLs[0]}
                    alt="Main Disease Image"
                    className="rounded-5"
                  />
                ) : (
                  <img src={image} alt="Placeholder" className="rounded-5" />
                )}
              </div>

              
              <div className="other-images p-3 d-flex justify-content-around align-items-center gap-3 rounded-bottom">
                {imageURLs.slice(1).map((url, index) => (
                  <div className="img1" key={index}>
                    <img
                      src={url}
                      alt={`Disease ${index + 1}`}
                      className="rounded-3"
                    />
                  </div>
                ))}
              </div>
            </div> */}
            {/* <div className="content-details d-flex flex-column justify-content-evenly align-items-center">
              <div className="names-science d-flex align-items-center border rounded-pill p-3 bg-success-subtle">
                <div className="name">
                  <h1>{diseaseData.name} /</h1>
                </div>
                <div className="science-name">
                  <h4>
                    
                    <figure>
                      <blockquote class="blockquote">
                        <h4>
                        <em>{diseaseData.scientificName}</em>
                        </h4>
                      </blockquote>
                      <figcaption class="blockquote-footer">
                        scientific Name
                      </figcaption>
                    </figure>
                  </h4>
                </div>
              </div>
              <div className="description">
                <p className="fs-5">{diseaseData.description}</p>
              </div>
              <div className="recommand-solution border border-success rounded p-3 bg-success bg-gradient">
                <div className="titleofContent">
                  <h2 className="text-center">~ Recommended Solutions ~</h2>
                </div>
                <div className="solutions text-white">
                  <p className="">{diseaseData.solution}</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default ResultPage;
