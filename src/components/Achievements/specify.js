import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function Specify() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          {/* <p style={{ textAlign: "justify" }}>
             <span className="purple">Atul Jha </span>
            from <span className="purple"> Madhubani, India.</span>
            <br />Currently I am pursuing Bachelor's in Computer Science & Engineering from Chandigarh University
            <br />
            <br />
            Apart from coding, some other activities I am doing:
          </p> */}
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Winner at HackNSUT by NSUT Delhi
            </li>
            <br></br>
            <li className='about-activity'>
              <ImPointRight /> Grand Finalist at Toycathon Digial Edition
              (Initiative by Central Government under Aatma Nirbhar Bhara
              abhiyan)
            </li>
            <br></br>

            <li className='about-activity'>
              <ImPointRight /> 3rd rank in FireQuest hosted by Google Developers
              Group, Chandigarh
            </li>
            <br></br>

            <li className='about-activity'>
              <ImPointRight /> Outstanding Student Volunteer Award & JK Pal
              Award for exemplary work as IEEE Volunteer from IEEE Delhi Section
            </li>
            <br></br>

            <li className='about-activity'>
              <ImPointRight /> Ranked under Top-50 in E-Yantra Robotics
              Competition by MHRD & IIT Bombay
            </li>
            <br></br>

            <li className='about-activity'>
              <ImPointRight /> Award for exemplary Leadership skills from
              Executive Director of CSE, Chandigarh University.
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

export default Specify;
