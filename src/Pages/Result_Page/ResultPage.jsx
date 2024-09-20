import React, { useEffect, useState } from "react";
import "./ResultPage.css";
import image from "../../assets/background.png";
import Ratio from "react-bootstrap/Ratio";
import Footer from "../../Components/Footer Section/Footer";
import db from "../../firebaseConfig"; // Import Firebase configuration
import { ref, get, child } from "firebase/database";

function ResultPage() {
  // Define state to hold disease data
  const [diseaseData, setDiseaseData] = useState({
    name: "",
    scientificName: "",
    description: "",
    solution: "",
  });

  // Fetch disease data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(db);
      try {
        // Fetch the specific disease data from the 'diseases' node in Firebase
        const snapshot = await get(child(dbRef, `diseases/anthracnose`)); // Replace `AlgalLeafSpot` with your disease key
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
  }, []);

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
                  <img src={image} alt="" className="rounded-3" />
                </div>
                <div className="img1">
                  <img src={image} alt="" className="rounded-3" />
                </div>
                <div className="img1">
                  <img src={image} alt="" className="rounded-3" />
                </div>
              </div>
            </div>
            <div className="content-details d-flex flex-column justify-content-between gap-5">
              <h1>{diseaseData.name} / {diseaseData.scientificName}</h1>
              <p>{diseaseData.description}</p>
            </div>
          </div>
        </div>
        <div className="recommand-solution mt-5">
          <div className="titleofContent">
            <h2 className="text-center">~ Recommended Solutions ~</h2>
          </div>
          <div className="solutions">
            <p>{diseaseData.solution}</p>
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
