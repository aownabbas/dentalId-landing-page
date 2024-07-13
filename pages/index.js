import React from 'react';
import Layout from '../components/layout';
import HeaderOne from '../components/header-one';
import BannerOne from '../components/banner-one';
import Services from '../components/services';
import FeatureOne from '../components/feature-one';
import FeatureTwo from '../components/feature-two';
import Pricing from '../components/pricing';
import Testimonials from '../components/testimonials';
import { Partners } from '../components/partners';
// import FAQ from '../components/faq';
import ContactUs from '../components/contact-us';
import Footer from '../components/footer';

const Home = () => {
  return (
    <Layout pageTitle='Dental iD'>
      <HeaderOne />
      <BannerOne />
      <Services />
      <FeatureTwo />
      <FeatureOne />
      <Pricing />
      <Testimonials />
      <Partners />
      <ContactUs />
      {/* <FAQ /> */}
      <Footer />
    </Layout>
  );
};

export default Home;
