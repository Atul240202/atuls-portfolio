import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import warehouse from "../../Assets/Projects/warehouse.jpg";
import emotion from "../../Assets/Projects/emotion.jpeg";
import padhai from "../../Assets/Projects/padhai.png";
import managefree from "../../Assets/Projects/managefree.png";
import ARgame from "../../Assets/Projects/ar.png";
import chemistry from "../../Assets/Projects/chemistry.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={managefree}
              isBlog={false}
              title="Manage Free"
              description="Website for Warehouse/Cold storage area for easy & hassle free booking. It will help the overseas or domestic companies/businesses to rent and buy storage areas,warehouses to store almost all kinds of goods. Best part is that by this website both parties will even be able to deal in Crypto's which will make it more cost efficient"
              link="https://github.com/Atul240202/manage-free"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chemistry}
              isBlog={false}
              title="Mystery with Chemistry"
              description="I have developed this project with the motive of combining values
              from our Spiritual Epics with Modern Chemistry subject using story
              Epic Ramayana."
              link="https://mystery-in-chemistry.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={padhai}
              isBlog={false}
              title="Padhai Paath"
              description="An Ed-Tech video conferencing website using React Native
              integrated with live payment system so that it will be easier for Coaching faculties to collect their fees 
              during the video session itself. I have integrated fun learn game option for better concept learning"
              link="https://padhai-path.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warehouse}
              isBlog={false}
              title="Warehouse Simulation System"
              description="Developed a fully functional warehouse system for E-Yantra robotics competition using
              Gazebo and RVIZ simulator and programmed all the modules
              using Python. Built this for automating all the task done in Industry 4.0"
              link="https://youtu.be/TlbcVwzJQZk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ARgame}
              isBlog={false}
              title="Blink It AR Game"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://www.instagram.com/ar/370438728148899/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
