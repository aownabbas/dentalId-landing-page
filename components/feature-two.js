import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlockTitle from './block-title';
import blockTitleCircle from '../assets/images/round-circle-1-2.png';
import mocup from '../assets/images/feature-2.png';

const FeatureTwo = () => {
  return (
    <section className='feature-style-two' id='features'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='image-block'>
              <img src={mocup} alt='Awesome Image' />
            </div>
          </Col>
          <Col lg={6}>
            <div className='content-block'>
              <BlockTitle
                textAlign='left'
                image={blockTitleCircle}
                title={`Internationally \n Validated`}
              />
              <p>
                Experts from 20 countries have validated the{' '}
                <b>Dental iD app</b> and provided us with feedback and
                testimonial.
              </p>
              <ul className='feature-lists'>
                <li>
                  <i className='fa fa-check'></i> Validated the automated age
                  estimation methods
                </li>
                <li>
                  <i className='fa fa-check'></i> Verified the steps and
                  procedures of the age model process
                </li>
                <li>
                  <i className='fa fa-check'></i> Reliable system with a minimum
                  variation of errors
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureTwo;
