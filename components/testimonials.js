import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Thumbs } from "swiper";
import BlockTitle from "./block-title";
import mapImage from "../assets/images/map-1-1.png";
import blockTitleCircle from "../assets/images/round-circle-1-6.png";
import cezar from "../assets/images/Cezar CAPITANEANU.png";
import elgamal from "../assets/images/Dr.Ahmed Elgamal.png";
import emilio from "../assets/images/Emilio Nuzzolese.png";
import abdelhakim from "../assets/images/Abdelhakim A. El-Gheriani-2.png";
import zama from "../assets/images/Zama Moosvi.png";
import ana from "../assets/images/Ana Milheiro.png";
import fernando from "../assets/images/Fernando Fortes Picoli.png";
import ireland from "../assets/images/ireland.svg";
import italy from "../assets/images/italy.svg";
import brazil from "../assets/images/brazil.svg";
import india from "../assets/images/india.svg";
import libya from "../assets/images/libya.svg";
import portugal from "../assets/images/portugal.svg";
import uae from "../assets/images/UAE.svg";
import salem from "../assets/images/new_saleem_2x.png";

SwiperCore.use([Autoplay, Thumbs]);

const TESTIMONIALS_DATA = [
  {
    name: "Salem Altalie",
    title: "UHS, BA, DDS, MSc, Dip, FACLM",
    country: "Forensic Odontology - UAE",
    flag: uae,
    content: `I am able now to work efficiently with my colleagues, collaborate without worrying about privacy, and focus on the quality of the assessment. UAE implemented Dental iD to improve age estimation service bringing a value of a 60% decrease in cost and assessment time.`,
    image: salem,
  },
  {
    name: "Cezar Capitaneanu",
    title: "DMD, MSc, PhD, Forensic Odontology",
    country: "Forensic Odontology - Ireland",
    flag: ireland,
    content: `The app is a versatile and advantageous tool. 
      In an academic context, it constitutes a convenient teaching aid and an accessible learning and revision medium.
      It would prove highly efficient in a real-life situation - such as the aftermath of a mass disaster, where different teams from different countries possessing varying degrees of expertise must work in a high-pressure environment.
      A very innovative mechanism indeed, suitable in extensive circumstances for a broad range of users`,
    image: cezar,
  },

  // {
  //   name: 'Ahmed Elgamal',
  //   title: 'BDS, MSc, PhD, Forensic Odontology - France',
  //   content:
  //     'A useful app on a mobile device will also find its highest utility in age estimation in remote areas of disasters. Dental identification app become a necessary tool on the mobile for forensic experts which they would have with them all the time and used whenever needed to estimate the age of victims rather than carrying physical documents all the time',
  //   image: elgamal,
  // },
  {
    name: "Emilio Nuzzolese",
    title: "DDS, MSc, PhD, Forensic Odontology",
    country:
      "Personal Identification laboratory (LA.P.I.), University of Turin  - Italy",
    flag: italy,
    content:
      "I find it extremely useful as a forensic tool, and I believe it could become an important tool to be used by forensic odontologists",
    image: emilio,
  },
  {
    name: "Fernando Fortes Picoli",
    title: "DDS, MSc, Forensic Odontology",
    country: "CSI-Scientific Police of Goias - Brazil",
    flag: brazil,
    content:
      "It is a good app and a promising future. We are living in times where mobiles and apps have become a part of our lifestyle. Taking out atlases and articles and doing age assessment in conventional ways will soon seem backdated. Hence, Dental identification app holds a promising future",
    image: fernando,
  },
  {
    name: "Abdelhakim A. El-Gheriani",
    title: "BDS, DMD, MS, MSD, Diplomate",
    country: "American Board of Orthodontics - Libya",
    flag: libya,
    content:
      "Such an assessment tool is a value of identifying the age of a person that assists in discovering human trafficking, the recruited, the missing, and the identity of the unknown. since it can be done accurately on the mobile device, it can be a feasible tool for humanitarian organizations",
    image: abdelhakim,
  },
  {
    name: "Ana Milheiro",
    title: "DDS, MSc, PhD",
    country: "Forensic Odontology - Portugal",
    flag: portugal,
    content:
      "The dental identification app provides a quick and easy assessment of dental age in living individuals or deceased bodies. The interface is simple, user-friendly, and intuitive. It saves the fuss of inserting data on excel files and is especially attractive for junior forensics building up experience. I would recommend it to anyone in the field",
    image: ana,
  },
  {
    name: "Zama Moosvi",
    title: "MDS, MSc, Forensic Odontology",
    country: "Truth Labs International LLP - India",
    flag: india,
    content: `An apt app for age assessment, Dental identification App makes age assessment a simple exercise that an expert can perform anywhere avoiding the hassle of searching for reference papers and calculations.
     The diagrams along with written information provided in each method is refreshing`,
    image: zama,
  },
];

const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const testimonialsCarouselOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    autoplay: {
      delay: 10000,
    },
  };
  const testimonialsThumOption = {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 1400,
    autoplay: {
      delay: 10000,
    },
  };
  return (
    <section className="testimonials-style-one" id="testimonials">
      <img src={mapImage} alt="Awesome Image" className="map-img" />
      <Container>
        <Row>
          <Col lg={6} className="d-flex">
            <div className="my-auto">
              <div id="testimonials-slider-pager">
                <div className="testimonials-slider-pager-one">
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <span key={index} className="pager-item">
                      <img src={image} alt="Awesome Image" />
                    </span>
                  ))}
                </div>
                <Swiper
                  {...testimonialsThumOption}
                  className="testimonials-slider-pager-two"
                  onSwiper={setThumbsSwiper}
                >
                  {TESTIMONIALS_DATA.map(({ image }, index) => (
                    <SwiperSlide key={index}>
                      <img src={image} alt="Awesome Image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <BlockTitle
              textAlign="left"
              image={blockTitleCircle}
              title={`What the experts are \n saying about Dental iD App!`}
            />

            <Swiper
              {...testimonialsCarouselOption}
              thumbs={{ swiper: thumbsSwiper }}
              className="slider testimonials-slider"
            >
              {TESTIMONIALS_DATA.map(
                ({ title, name, content, country, flag }, index) => (
                  <SwiperSlide
                    key={`testimonials-card-${index}`}
                    className="slide-item"
                  >
                    <div className="single-testi-one">
                      <p>{content}</p>
                      <h3>{name}</h3>
                      <h6>{title}</h6>
                      <div>
                        <img src={flag} alt="Flag" className="flag" />
                        <span className="country">{country}</span>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
