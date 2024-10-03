import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./HeroSection.css";
import farmer from "../../assets/Farmer.jpg";
import { useNavigate } from "react-router-dom";

const diseases = [
  "Red Leaf Spot",
  "Algal Leaf Spot",
  "Bird's Eyespot",
  "Gray Blight",
  "White Spot",
  "Anthracnose",
  "Brown Blight",
];

function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const normalizeInput = (input) => {
    return input.toLowerCase().replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      const normalizedQuery = normalizeInput(searchQuery);
      navigate(`/disease/${normalizedQuery}`);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value) {
      const filteredSuggestions = diseases.filter((disease) =>
        disease.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div className="hero">
            <div className="title">
              <h2 className="fw-bold text-center display-2">
                AI Powerd Crop Disease Detector
              </h2>
            </div>
            <div className="hero-content d-flex pt-5 gap-5 row">
              <img
                className="order-2 order-md-2 order-sm-2 order-lg-1 col-lg-6 col-sm-12 mx-auto d-block mb-5"
                src={farmer}
                alt="Farmer-photo"
              />
              <div className="order-1 order-md-1 order-sm-1 order-lg-2 col-lg-6 col-sm-12 hero-text-area d-flex flex-column justify-content-center">
                <p className="">
                  <span>
                    <h1>Welcome to AgriCure,</h1>
                  </span>
                  <br />
                  Revolutionizing farming with AI. Detect crop diseases, access
                  real-time information, and share knowledge in Sinhala,
                  English, and Tamil. Empowering Sri Lankan farmers to protect
                  their harvests and ensure food security. Join us in creating a
                  sustainable future with innovative agricultural solutions
                </p>
                <Form className="d-flex mt-3" onSubmit={handleSearch}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Find Disease..."
                    className="me-2 py-3"
                    aria-label="Search"
                    value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    onChange={handleChange}
                  />
                  <Button variant="" className="px-3 btn-success" type="submit">
                    Search
                  </Button>
                </Form>
                {suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchQuery(suggestion);
                          setSuggestions([]);
                        }}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
