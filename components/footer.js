import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logoImage from '../assets/images/logo.svg';
import paypal from '../assets/images/paypal.png';
import visa from '../assets/images/VISA.png';
import master from '../assets/images/master card.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='site-footer'>
        <span className='bubble-1'></span>
        <span className='bubble-2'></span>
        <span className='bubble-3'></span>
        <span className='bubble-4'></span>
        <span className='bubble-5'></span>
        <span className='bubble-6'></span>
        <Container>
          <div className='inner-container'>
            <Row>
              <Col lg={7} md={12} sm={12}>
                <div className='footer-widget'>
                  <a href='index.html'>
                    <img src={logoImage} alt='Awesome Image' />
                  </a>
                  <div className='summary'>
                    Dental Identification app mission is to enable professionals
                    to communicate and conduct virtual testing using a
                    standardized approach, which increases the accuracy of the
                    assessment to make reporting more efficient and effective.
                  </div>
                </div>
              </Col>
              <Col lg={2} md={12} sm={12}>
                <div className='footer-widget'>
                  <div className='widget-title'>
                    <h3>Links</h3>
                  </div>
                  <ul className='links-list'>
                    <li>
                      <Link href='/terms'>
                        <a target='__blank'>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/privacy'>
                        <a target='__blank'>Privacy Policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={12} sm={12}>
                <div className='footer-widget'>
                  <div className='widget-title'>
                    <h3>Payment Gateways</h3>
                  </div>
                  <div>
                    <a href='#'>
                      <img src={visa} />
                    </a>
                    <a href='#'>
                      <img src={master} />
                    </a>
                    <a href='#'>
                      <img src={paypal} />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>

      <div className='bottom-footer '>
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              © 2020 All Rights Reserved. Burooj Technology Apps{' '}
              <small>FZ LLC.</small>
            </Col>
            <Col lg={6} md={12} sm={12}>
              Designed & Developed By{' '}
              <a href='https://technation.ae' target='__blank'>
                Tech Nation
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
