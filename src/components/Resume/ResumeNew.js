import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from "../../Assets/../Assets/Atul's Resume.pdf";
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  'https://drive.google.com/file/d/1_7glu-wjsiez98_oRjwX2j_Ph0BZCURp/view?usp=drivesdk';

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className='resume-section'>
        <Particle />
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdf}
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className='resume'>
          <iframe
            src='https://drive.google.com/file/d/1_7glu-wjsiez98_oRjwX2j_Ph0BZCURp/preview'
            width='60%'
            height='1080px'
            allow='autoplay'
          ></iframe>
        </Row>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant='primary'
            href={pdf}
            target='_blank'
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
