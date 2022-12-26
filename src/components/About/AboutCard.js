import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Atul Jha </span>
            from <span className="purple"> Pune, India.</span>
            <br />Currently I am in my Fourth year pursuing Bachelor's in Computer Science & Engineering from Chandigarh University
            <br />
            <br />
            Apart from coding, some other activities I am doing:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technical Intern @ Newton School
            </li>
            <li className="about-activity">
              <ImPointRight /> Patent Holder with 7 filed patents
            </li>
            <li className="about-activity">
              <ImPointRight /> Former Chairperson of IEEE CTSoc CUSB
            </li>
            <li className="about-activity">
              <ImPointRight /> Industrial Relations Team Lead at IEEE India Council
            </li>
            <li className="about-activity">
              <ImPointRight /> Vice President of Innovtor's Hub (College community of Patents & Project)
            </li>
            <li className="about-activity">
              <ImPointRight /> Delivered 20+ Sessions & Hosted 40+ Technical events.
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
