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
            from <span className='purple'> Noida, India.</span>
            <br /> I have completed my Bachelor's in Computer Science &
            Engineering from Chandigarh University, Mohali
            <br />
            <br />
            Apart from coding, some other activities I am doing:
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Software Engineer at Capgemini (Nov'23 - present)
            </li>
            <li className='about-activity'>
              <ImPointRight /> Former Technical Intern at Newton School (Aug'22 - Aug'23)
            </li>
            <li className='about-activity'>
              <ImPointRight /> Patent Holder with 5 filed patents
            </li>
            <li className='about-activity'>
              <ImPointRight /> Former Chairperson of IEEE Consumer technology Chandigarh University Student Branch [CTSoc CUSB] (Oct'21 - Oct'22)
            </li>
            <li className='about-activity'>
              <ImPointRight /> Former Industrial Relations Team Lead at IEEE
              India Council (Jan'22 - Jan'23)
            </li>
            <li className='about-activity'>
              <ImPointRight /> Vice President of Innovtor's Hub (College
              community of Patents & Project)
            </li>
            <li className='about-activity'>
              <ImPointRight /> Delivered 20+ Sessions & Hosted 50+ Technical
              events.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
