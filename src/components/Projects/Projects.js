import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import warehouse from '../../Assets/Projects/warehouse.jpg';
import exam from '../../Assets/Projects/exam.png';
import padhai from '../../Assets/Projects/padhai.png';
import imageGrt from '../../Assets/Projects/imageGrt.png';
import ARgame from '../../Assets/Projects/ar.png';
import chemistry from '../../Assets/Projects/chemistry.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Projects </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={imageGrt}
              isBlog={false}
              title='Image GRT'
              description='It is an AI based Image generating tool which generates images as per the prompt by the user. It uses OpenAI API to generate prompt based images'
              link='https://github.com/Atul240202/ImageGRT-v1'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chemistry}
              isBlog={false}
              title='Mystery with Chemistry'
              description='I have developed this project with the motive of combining values
              from our Spiritual Epics with Modern Chemistry subject using story
              Epic Ramayana.'
              link='https://mystery-in-chemistry.web.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={exam}
              isBlog={false}
              title='Examination Portal using Salesforce'
              description='I have created this simple MCQ based examination portal using Salesforce in which Faculty can Input there questions from backend using custom layout on salesforce & students can attempt those questions via Frontend developed using Salesforce ALOHA template & JavaScript'
              link='https://github.com/Atul240202/Exam-Portal-LWC/tree/main/firstComponent'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={warehouse}
              isBlog={false}
              title='Warehouse Simulation System'
              description='Developed a fully functional warehouse system for E-Yantra robotics competition using
              Gazebo and RVIZ simulator and programmed all the modules
              using Python. Built this for automating all the task done in Industry 4.0'
              link='https://youtu.be/TlbcVwzJQZk'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ARgame}
              isBlog={false}
              title='Blink It AR Game'
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link='https://www.instagram.com/ar/370438728148899/'
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
