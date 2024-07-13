import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moc from '../assets/images/banner.png';

const BannerOne = () => {
  return (
    <section className='banner-style-one' id='banner'>
      <span className='bubble-1'></span>
      <span className='bubble-2'></span>
      <span className='bubble-3'></span>
      <span className='bubble-4'></span>
      <span className='bubble-5'></span>
      <span className='bubble-6'></span>
      <img src={moc} className='banner-mock' alt='Awesome Image' />
      <Container>
        <Row>
          <Col xl={6} lg={8}>
            <div className='content-block'>
              <h3>
                Assess & <br />
                Identify Age
              </h3>
              <p>
                Dental iDentification app is an odontology automated assessment
                tool, cloud-based, an all-in-one application solution.
              </p>
              <div className='button-block'>
                <a
                  href='https://play.google.com/store/apps/details?id=com.technation.dentalid'
                  target='__blank'
                  className='banner-btn'
                >
                  <i className='fa fa-play'></i>
                  Get in<span>Google Play</span>
                </a>
                <a
                  href='https://apps.apple.com/app/dental-id/id1552872172'
                  target='__blank'
                  className='banner-btn'
                >
                  <i className='fa fa-apple'></i>
                  Get in<span>Play Store</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerOne;
