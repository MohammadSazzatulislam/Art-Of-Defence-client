import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogPage from './BlogPage/BlogPage';
import Carousel from './Carousel/Carousel';
import ServicesCard from './ServicesCard/ServicesCard';
import SubcribetionPage from './SubcribetionPage/SubcribetionPage';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Art Of Defensee-Home</title>
        </Helmet>
        <Carousel></Carousel>
        <ServicesCard></ServicesCard>
        <BlogPage></BlogPage>
        <SubcribetionPage></SubcribetionPage>
      </div>
    );
};

export default Home;