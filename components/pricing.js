import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import BlockTitle from './block-title';
import { Link as ScrollLink } from 'react-scroll';
import blockTitleCircle from '../assets/images/round-circle-1-4.png';
import { isIOS, isMacOs } from 'react-device-detect';

const getStartedUrl =
  isIOS || isMacOs
    ? 'https://apps.apple.com/app/dental-id/id1552872172'
    : 'https://play.google.com/store/apps/details?id=com.technation.dentalid';

const PRICING_MONTHLY_DATA = [
  {
    amount: '$20.00',
    extraClass: 'basic-pack',
    name: 'Basic Pack',
    tagLine: 'No hidden charges!',
    button: [{ label: 'Purchase', link: '#' }],
    options: [
      {
        label: 'Single Examiner',
      },
      {
        label: 'Unlimited Projects',
      },
      {
        label: 'Screen Results',
      },
      {
        label: 'Advanced Statistical Model',
      },
    ],
  },
  {
    amount: '$30.00',
    name: 'Professional Pack',
    extraClass: 'pro-pack',
    tagLine: 'No hidden charges!',
    button: [{ label: 'Purchase', link: '#' }],
    options: [
      {
        label: 'Multiple Examiners',
      },
      {
        label: 'Unlimited Projects',
      },
      {
        label: 'Screen Results',
      },
      {
        label: 'QR Code Tracking',
      },
      {
        label: 'Advanced Statistical Model',
      },
      {
        label: 'Admin Panel Dashboard',
      },
    ],
  },
  {
    amount: '$40.00',
    extraClass: 'biz-pack',
    name: 'Business Pack',
    tagLine: 'No hidden charges!',
    button: [{ label: 'Purchase', link: '#' }],
    options: [
      {
        label: 'Extra features',
      },
      {
        label: 'Lifetime free support',
      },
      {
        label: 'Upgrade options',
      },
      {
        label: 'Full access',
      },
    ],
  },
];

const PRICING_YEARLY_DATA = [
  {
    amount: '$100',
    name: 'Professional',
    extraClass: 'basic-pack',
    tagLine: 'No hidden charges!',
    button: [{ label: 'Get Started', link: getStartedUrl }],
    options: [
      {
        label: 'Single Examiner',
      },
      {
        label: 'Unlimited Projects',
      },
      {
        label: 'Screen Results',
      },
      {
        label: 'Advanced Statistical Model',
      },
    ],
  },
  {
    amount: 'Contact For Proposal',
    name: 'Organizational',
    extraClass: 'pro-pack',
    tagLine: 'No hidden charges!',
    button: [{ label: 'Contact Us', link: 'contact', isScroll: true }],
    options: [
      {
        label: 'Multiple Examiners',
      },
      {
        label: 'Unlimited Projects',
      },
      {
        label: 'Screen Results',
      },
      {
        label: 'QR Code Tracking',
      },
      {
        label: 'Advanced Statistical Model',
      },
      {
        label: 'Admin Panel Dashboard',
      },
    ],
  },
  // {
  //   amount: '$100.00',
  //   name: 'Business Pack',
  //   extraClass: 'biz-pack',
  //   tagLine: 'No hidden charges!',
  //   button: [{ label: 'Purchase', link: '#' }],
  //   options: [
  //     {
  //       label: 'Extra features',
  //     },
  //     {
  //       label: 'Lifetime free support',
  //     },
  //     {
  //       label: 'Upgrate options',
  //     },
  //     {
  //       label: 'Full access',
  //     },
  //   ],
  // },
];

const Pricing = () => {
  return (
    <section className='pricing-style-one' id='pricing'>
      <Container>
        <BlockTitle
          textAlign='center'
          image={blockTitleCircle}
          title={`Choose plans which suits \n your needs.`}
        />

        <Tab.Container id='left-tabs-example' defaultActiveKey='yearly'>
          <Nav className='nav nav-tabs tab-title'>
            {/* <Nav.Item>
              <Nav.Link eventKey="monthly">Monthly</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link eventKey='yearly'>Yearly</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey='monthly'>
              <Row>
                {PRICING_MONTHLY_DATA.map(
                  (
                    { amount, name, tagLine, button, options, extraClass },
                    index
                  ) => (
                    <Col lg={4} key={index}>
                      <div className={`single-pricing-one ${extraClass}`}>
                        <div className='top-block'>
                          <span className='price'>{amount}</span>
                          <span className='pack-name'>{name}</span>
                          <div className='line'></div>
                        </div>
                        <ul className='feature-lists'>
                          {options.map(({ label }, index) => (
                            <li key={index}>{label}</li>
                          ))}
                        </ul>
                        <div className='bottom-block'>
                          {button.map(({ link, label, isScroll }, index) =>
                            isScroll ? (
                              <a className='price-btn' key={index}>
                                <ScrollLink
                                  activeClass='current'
                                  to={link}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                >
                                  {label}
                                </ScrollLink>
                              </a>
                            ) : (
                              <a href={link} className='price-btn' key={index}>
                                {label}
                              </a>
                            )
                          )}
                          <span className='tag-line'>{tagLine}</span>
                        </div>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey='yearly'>
              <Row>
                {PRICING_YEARLY_DATA.map(
                  (
                    { amount, name, tagLine, button, options, extraClass },
                    index
                  ) => (
                    <Col lg={12 / PRICING_YEARLY_DATA.length} key={index}>
                      <div className={`single-pricing-one ${extraClass}`}>
                        <div className='top-block'>
                          <span className='price'>{name}</span>
                          <span className='pack-name'>{amount}</span>
                          <div className='line'></div>
                        </div>
                        <ul className='feature-lists'>
                          {options.map(({ label }, index) => (
                            <li key={index}>{label}</li>
                          ))}
                        </ul>
                        <div className='bottom-block'>
                          {button.map(({ link, label, isScroll }, index) =>
                            isScroll ? (
                              <ScrollLink
                                className='price-btn'
                                activeClass='current'
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                key={index}
                              >
                                {label}
                              </ScrollLink>
                            ) : (
                              <a
                                href={link}
                                className='price-btn'
                                target='__blank'
                                key={index}
                              >
                                {label}
                              </a>
                            )
                          )}
                          <span className='tag-line'>{tagLine}</span>
                        </div>
                      </div>
                    </Col>
                  )
                )}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Pricing;
