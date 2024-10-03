import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Blog.css";

function News() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    {
      src: "https://www.the-tea-crane.com/wp-content/uploads/2020/02/DSC_0066.jpg",
      alt: "News 1",
      link: "#",
      text: "Lorem50",
    },
    {
      src: "https://www.worldteanews.com/best-practices/troubles-andrew-yule-and-company-puts-8k-tea-workers-risk",
      alt: "News 2",
      link: "#",
      text: "Troubles at Andrew Yule and Company Puts 8k Tea Workers at Risk",
    },
    {
      src: "img/news-100x100-3.jpg",
      alt: "News 3",
      link: "#",
      text: "Lorem ipsum dolor sit amet consec adipis elit",
    },
    {
      src: "img/news-100x100-4.jpg",
      alt: "News 4",
      link: "#",
      text: "Lorem ipsum dolor sit amet consec adipis elit",
    },
  ];
  return (
    <div className="bg">
      <NavigationBar />
      <div className="Topbar">
        <Container fluid>
          <Row className="align-items-center bg-light px-lg-5">
            <Col xs={12} md={8}>
              <div className="d-flex justify-content-between">
                <div
                  className="bg-primary text-white text-center py-2"
                  style={{ width: "100px" }}
                >
                  Trending
                </div>
                <Carousel
                  className="position-relative d-inline-flex align-items-center ml-3"
                  style={{ width: "calc(100% - 100px)", paddingLeft: "90px" }}
                >
                  <Carousel.Item>
                    <div className="text-truncate">
                      <a className="text-secondary" href="#">
                        Labore sit justo amet eos sed, et sanctus dolor diam eos
                      </a>
                    </div>
                  </Carousel.Item>
                  <Carousel.Item>
                    <div className="text-truncate">
                      <a className="text-secondary" href="#">
                        Gubergren elitr amet eirmod et lorem diam elitr, ut est
                        erat Gubergren elitr amet eirmod et lorem diam elitr, ut
                        est erat
                      </a>
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col md={4} className="text-right d-none d-md-block">
              Wednesday, September 24, 2024
            </Col>
          </Row>
          <Row className="align-items-center py-2 px-lg-5">
            <Col lg={4}>
              <a href="#" className="navbar-brand d-none d-lg-block">
                <h1 className="m-0 display-5 text-uppercase">
                  <span className="text-primary">News</span>Room
                </h1>
              </a>
            </Col>
            {/* <Col lg={8} className="text-center text-lg-right">
              <img className="img-fluid" src="img/ads-700x70.jpg" alt="Ad" />
            </Col> */}
          </Row>
        </Container>
      </div>
      <div className="ddd">
        <Container fluid className="py-3">
          <Container>
            <Carousel responsive={responsive}>
              {items.map((item, index) => (
                <div className="d-flex" key={index}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="d-flex align-items-center bg-light px-3"
                    style={{ height: "80px" }}
                  >
                    <a
                      className="text-secondary font-weight-semi-bold"
                      href={item.link}
                    >
                      {item.text}
                    </a>
                  </div>
                </div>
              ))}
            </Carousel>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default News;
