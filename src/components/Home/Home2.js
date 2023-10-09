import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/Atul.jpg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I am an Enthusiast, with passion to learn new skills & implement
              them in real time to solve some problem. Because thats what a
              Engineer do 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className='purple'> C++ & Javascript </b>
              </i>
              <br />
              <br />I have written multiple blogs related to Web Dev on{' '}
              <b className='purple'>
                {' '}
                <a className='purple' href='https://medium.com/@atuljha2402'>
                  Medium
                </a>{' '}
              </b>{' '}
              because sometimes I really enjoy writing down my knowledge
              <br />
              <br />
              I'm currently on a coding journey for mastering the art of{' '}
              <b className='purple'>Data Structures & Algorithms</b> . I've{' '}
              <b className='purple'>
                solved over 200 challenges on{' '}
                <a
                  href='https://www.codingninjas.com/studio/profile/atuljha2402'
                  className='purple'
                >
                  Codestudio
                </a>{' '}
                <a href='https://leetcode.com/Atul240202/' className='purple'>
                  & Leetcode{' '}
                </a>
              </b>{' '}
              , sharpening my code-wielding skills with each encounter. 💻🚀
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className='purple'>Web Technologies </b> as its give me an
                opportunity to showcase my creativity
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className='purple'>React.js, Next.js & Node.js</b>
              <br />
              <br />I am also a Patent holder with &nbsp;
              <i>
                <b className='purple'> 7+ </b> Filed patents
              </i>
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/atul240202'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/atuljha24/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/atuljha.24/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
