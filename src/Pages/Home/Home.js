import React from 'react';
import Carousel from './Carousel/Carousel';
import ServicesCard from './ServicesCard/ServicesCard';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ServicesCard></ServicesCard>
        </div>
    );
};

export default Home;