import React from 'react';
import { Helmet } from 'react-helmet-async';
import Carousel from './Carousel/Carousel';
import ServicesCard from './ServicesCard/ServicesCard';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Art Of Defensee-Home</title>
        </Helmet>
        <Carousel></Carousel>
        <ServicesCard></ServicesCard>
      </div>
    );
};

export default Home;