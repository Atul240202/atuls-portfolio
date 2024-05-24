import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 1 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Atul Jha</strong>
              </h1>

              <div style={{ paddingTop: 30, paddingBottom: 30, paddingLeft: 47, textAlign: "left" }}>
                <Type />
              </div>
              <div style={{ paddingLeft: 47, textAlign: "left" }}>
                <Button
                  variant="primary"
                  href="https://drive.google.com/file/d/1_7glu-wjsiez98_oRjwX2j_Ph0BZCURp/view?usp=drivesdk"
                  target="_blank"
                >
                  <a href="https://drive.google.com/file/d/1_7glu-wjsiez98_oRjwX2j_Ph0BZCURp/view?usp=drivesdk"><BiLinkExternal /> &nbsp; View My Resume !!<a>
                </Button>{" "}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
