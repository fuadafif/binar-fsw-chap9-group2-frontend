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
            <h1 className="text-title text-white">3 Reasons To Play It</h1>
            <p className="text-caption">
            You will get an amazing gaming experience:
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
                  Easily access games<br />
                </p>
              </div>
              <div className="col-lg-4 column">
                <div className="icon">
                  <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-12.png"
                    alt="" />
                </div>
                <h3 className="icon-title text-white">Light</h3>
                <p className="icon-caption">
                With the lightness of the game,<br />
                you will get a smooth gaming experience
                </p>
              </div>
              <div className="col-lg-4 column">
                <div className="icon">
                  <img src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-13.png"
                    alt="" />
                </div>
                <h3 className="icon-title text-white">Free</h3>
                <p className="icon-caption">
                Enjoy a variety of games that<br />
                interest you for free
                </p>
              </div>
            </div>
          </div>
          <div className="card-block">
            <div className="card">
              <div className="d-flex flex-lg-row flex-column align-items-center">
                <div className="me-lg-3">
                  <img
                    src="gaming.jpg"
                    alt="Logo"
                    width={100} />
                </div>
                <div className="flex-grow-1 text-lg-start text-center card-text">
                  <h3 className="card-title text-white">
                  Team T2
                  </h3>
                  <p className="card-caption">
                  Team T2 is Indonesian game developer company that has been active since July 2020, <br/> with team consisting of passionate people.
                  <br className="d-none d-lg-block " />
                  A game studio that provides a variety of games with various genres. 
                  </p>
                </div>
                <div className="card-btn-space">
                  <button className="btn btn-card">SEE MORE</button>
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
