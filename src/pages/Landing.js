import React from "react";
import { Card, CardImg } from "reactstrap";
import LandingNav from "../components/navbar/LandingNav";
import "../assets/landing/css/Landing.css"
import '../assets/game/css/bootstrap.min.css';
import fornite from "../assets/landing/img/fornite.jpg";
import Footer from "../components/Footer/Footer";



function LandingPage() {
  return (
    <>
      {/* Navbar */}
      <div>
        <LandingNav />
        {/* CardImg */}
        <Card className="header1">
          <CardImg
            src={fornite}
            alt="Card image cap"
            top
            width="20%"
          />
        </Card>
      </div>
      {/* Navbar */}

      {/* Main */}
      <div className="main">
        <div className="content-2-4 container-xxl mx-auto p-0 position-relative ">
          <div className="text-center title-text">
            <h1 className="text-title text-white">3 Keys Benefit</h1>
            <p className="text-caption">
              You can easily manage your business with a powerful tools
            </p>
          </div>
          <div className="grid-padding text-center">
            <div className="row">
              <div className="col-lg-4 column">
                <div className="icon">
                  <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-11.png"
                    alt=""
                    width="50" />
                </div>
                <h3 className="icon-title text-white">Easy to Operate</h3>
                <p className="icon-caption">
                  This can easily help you to<br />
                  grow up your business fast
                </p>
              </div>
              <div className="col-lg-4 column">
                <div className="icon">
                  <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-12.png"
                    alt="" />
                </div>
                <h3 className="icon-title text-white">Real-Time Analytic</h3>
                <p className="icon-caption">
                  With real-time analytics, you<br />
                  can check data in real time
                </p>
              </div>
              <div className="col-lg-4 column">
                <div className="icon">
                  <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-13.png"
                    alt="" />
                </div>
                <h3 className="icon-title text-white">Very Full Secured</h3>
                <p className="icon-caption">
                  With real-time analytics, we<br />
                  will guarantee your data
                </p>
              </div>
            </div>
          </div>
          <div className="card-block">
            <div className="card">
              <div className="d-flex flex-lg-row flex-column align-items-center">
                <div className="me-lg-3">
                  <img
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-1%20(1).png"
                    alt="" />
                </div>
                <div className="flex-grow-1 text-lg-start text-center card-text">
                  <h3 className="card-title text-white">
                    Fast Business Management in 30 minutes
                  </h3>
                  <p className="card-caption">
                    Our tools for business analysis helps an organization
                    understand<br className="d-none d-lg-block " />
                    market or business development.
                  </p>
                </div>
                <div className="card-btn-space">
                  <button className="btn btn-card">Buy Now</button>
                  <button className="btn btn-outline">Demo Version</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* End Main */}

    </>

  );
}

export default LandingPage;
