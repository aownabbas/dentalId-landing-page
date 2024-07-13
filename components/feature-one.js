import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlockTitle from './block-title';
import soon from '../assets/images/coming-soon.svg';
import mocup from '../assets/images/feature-1.png';

const FeatureOne = () => {
  return (
    <section className='feature-style-one'>
      <Container>
        <hr className='style-one' />
        <Row>
          <Col lg={6}>
            <div className='content-block'>
              <BlockTitle
                textAlign='left'
                image={soon}
                title={`Peer Review  \n System`}
              />
              <p>
                Work collaboratively to avoid confirmation bias and to validate
                results
              </p>
              <div>
                The peer-review system is a process of communication technology
                aimed to share information securely with experts by invitation.
                Allowing experts to verify it by conducting the independent
                assessment for final consensus. Enabling the primary examiner to
                share their reliable and validated results and track them back
                to the referring agency.
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className='image-block'>
              <img src={mocup} alt='Awesome Image' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeatureOne;
