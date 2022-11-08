import React from 'react';
import { useLoaderData } from "react-router-dom";
import AllServiceCard from './AllServiceCard';


const AllServicess = () => {

    const service = useLoaderData();
    console.log(service)


    return (
      <div className="flex flex-wrap items-center justify-center  gap-7 py-20  sm:px-3 px-4">
        {service.map((card) => (
          <AllServiceCard key={card._id} card={card}></AllServiceCard>
        ))}
      </div>
    );
};

export default AllServicess;