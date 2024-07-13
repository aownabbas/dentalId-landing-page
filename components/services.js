import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './cards/service-card';
import BlockTitle from './block-title';
import blockTitleCircle from '../assets/images/round-circle-1-1.png';
import service1 from '../assets/images/service-1.svg';
import service2 from '../assets/images/service-2.svg';
import service3 from '../assets/images/service-3.svg';
import service4 from '../assets/images/service-4.svg';

const SERVICES_DATA = [
  {
    icon: service1,
    title: 'Cloud Based',
    points: [
      'Promotes access to information at the point of care',
      'Improves the process of analysis and decision making',
    ],
    link: '#',
  },
  // {
  //   icon: service2,
  //   title: 'Assessment Pathway',
  //   points: [
  //     'Interactive workflow step by step',
  //     'Integrated formulae and algorithms',
  //   ],
  //   link: '#',
  // },
  {
    icon: service3,
    title: 'Quality Assurance',
    points: [
      'Follows IOFOS recommendations of age assessment',
      'Allows international consensus for assessment and improvements',
    ],
    link: '#',
  },
  {
    icon: service4,
    title: 'Security & Privacy',
    points: [
      'Compliance toward GDPR and HIPAA',
      'Secure end-to-end encrypted information',
    ],
    link: '#',
  },
];
const Services = () => {
  return (
    <section className='services-style-one' id='service'>
      <Container>
        <BlockTitle
          textAlign='center'
          image={blockTitleCircle}
          title={`Checkout Our Application \n Features Below.`}
        />
        <Row>
          {SERVICES_DATA.map(({ icon, title, points, link }, index) => (
            <Col lg={12 / SERVICES_DATA.length} md={6} sm={12} key={index}>
              <ServiceCard
                icon={icon}
                title={title}
                points={points}
                link={link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
