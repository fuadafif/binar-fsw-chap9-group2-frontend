import React, { useState } from "react";
import { Card, Container, Col, Row, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import Carousel from "../carousel";
import LandingNav from "../components/navbar/LandingNav";
import Footer from "../components/Footer/Footer";
import RPSGame from "../assets/home/img/rock-paper-scissors.jpg";
import snakeGame from "../assets/home/img/snake-game.jpg";
import "../assets/home/css/Landing.css";

function LandingPage() {
  return (
    <div className="main-container">
      <LandingNav />
      {/* Title Tengah */}
      <Container className="text-center" fluid="sm">
        <h1>Web Games</h1>
        <p>
          Permainan daring adalah jenis permainan komputer yang memanfaatkan jaringan komputer. Jaringan yang biasanya digunakan adalah jaringan internet dan yang sejenisnya serta selalu menggunakan teknologi yang ada saat ini, seperti
          modem dan sambungan kabel.
        </p>
      </Container>

      {/* Detail game tengah */}
      <Container fluid="sm">
        <Row xs="2">
          <Col>
            <Card
              className="my-2"
              color="light"
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>
                <CardTitle tag="h5">Rock-Paper-Scissor</CardTitle>
                <CardText>adalah sebuah permainan tangan dua orang. Di kalangan anak-anak Indonesia, permainan ini juga dikenal dengan istilah "Suwit Jepang". Di Indonesia dikenal juga permainan sejenis yang dinamakan suwit.</CardText>
              </CardHeader>
              <CardBody>Detail..</CardBody>
            </Card>
          </Col>
          <Col>
            <img className="game-img" src={RPSGame} />
          </Col>
        </Row>

        <Row xs="2">
          <Col>
            <Container>
              <div className="game-img">
                <img className="game-img" src={snakeGame} />
              </div>
            </Container>
          </Col>
          <Col>
            <Card
              className="my-2"
              color="light"
              style={{
                width: "18rem",
              }}
            >
              <CardHeader>
                <CardTitle tag="h5">Snake Game</CardTitle>
                <CardText>Snake adalah nama umum untuk konsep permainan video dimana pemain mengendalikan sebuah garis yang tumbuh memanjang, dengan garis itu sendiri menjadi rintangan utama.</CardText>
              </CardHeader>
              <CardBody>Detail..</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default LandingPage;
