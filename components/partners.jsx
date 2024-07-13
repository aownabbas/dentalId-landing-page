import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlockTitle from './block-title';
import blockTitleCircle from '../assets/images/round-circle-1-8.png';
import khalifa from '../assets/images/partners/khalifa@2x.png';
import twoFour from '../assets/images/partners/24@2x.png';

export const Partners = () => (
  <section className='blog-style-one' id='partners'>
    <Container>
      <BlockTitle
        textAlign='center'
        image={blockTitleCircle}
        title={`Our Partners`}
      />
      <Row>
        <p className='partners-description'>
          Backed by essential network of strategic partners, we pride ourselves
          with a unique competitive advantage.
        </p>
      </Row>
      <Row style={{ marginTop: 14 }}>
        <Col className='partner-col' md={6}>
          <img className='partner-card partner-card-1' src={khalifa} alt='' />
          <p className='partner-card-title'>Khalifa Innovation Center</p>
          <p className='partner-card-location'>
            Khalifa University, Abu Dhabi, UAE
          </p>
        </Col>
        <Col className='partner-col' md={6}>
          <img className='partner-card partner-card-2' src={twoFour} alt='' />
          <p className='partner-card-title'>TwoFour54</p>
          <p className='partner-card-location'>
            Media Zone Authority, Abu Dhabi, UAE
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);
