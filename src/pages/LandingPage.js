import React, { useState } from "react";
import { Card, CardImg, Container, Col, Row } from "reactstrap";
import Carousel from "../carousel";
import LandingNav from "../components/navbar/LandingNav";

function LandingPage() {
  return (
    <>
      <LandingNav />
      {/* CardImg */}
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/id/1025/1200/400"
          style={{
            height: 180,
          }}
          top
          width="100%"
        />
      </Card>
      {/* Title Tengah */}
      <Container className="bg-light border text-center" fluid="sm">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Maecenas ultricies mi eget mauris
          pharetra.
        </p>
      </Container>
      {/* Carousel */}
      <Row>
        <Col className="bg-light border" xs="4">
          <Container className="bg-light border text-left" fluid="sm">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Container>
        </Col>
        <Col className="bg-light border" xs="8">
          <Container>{<Carousel />}</Container>
        </Col>
      </Row>
    </>
  );
}

export default LandingPage;
