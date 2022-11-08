import React, { useEffect, useState } from 'react';
import Card from './Card';

const ServicesCard = () => {
    const [services, setServices] = useState([])
    console.log(services);

    useEffect(() => {
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
            .then(data => {
            setServices(data)
        }).catch(err => console.log(err))
    },[])

    return (
      <div>
        <div className="flex flex-wrap items-center justify-center  gap-7 pt-10  sm:px-3 px-4">
          {services.map((service) => (
            <Card key={service._id} service={service}></Card>
          ))}
        </div>
        <div className="text-end pt-5 mr-32">
          <button>sell all</button>
        </div>
      </div>
    );
};

export default ServicesCard;