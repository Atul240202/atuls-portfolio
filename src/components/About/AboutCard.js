import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hello Everyone, I am <span className='purple'>Atul Jha </span>
            from <span className='purple'> Varanasi, India.</span>
            <br /> I have completed my Bachelor's in Computer Science &
            Engineering from Chandigarh University, Mohali
            <br />
            <br />
            Apart from coding, some other activities I am doing:
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Former Software Engineer Intern at Capgemini
            </li>
            <li className='about-activity'>
              <ImPointRight /> Former Technical Intern at Newton School
            </li>
            <li className='about-activity'>
              <ImPointRight /> Patent Holder with 7 filed patents
            </li>
            <li className='about-activity'>
              <ImPointRight /> Former Chairperson of IEEE CTSoc CUSB
            </li>
            <li className='about-activity'>
              <ImPointRight /> Former Industrial Relations Team Lead at IEEE
              India Council
            </li>
            <li className='about-activity'>
              <ImPointRight /> Vice President of Innovtor's Hub (College
              community of Patents & Project)
            </li>
            <li className='about-activity'>
              <ImPointRight /> Delivered 20+ Sessions & Hosted 40+ Technical
              events.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
