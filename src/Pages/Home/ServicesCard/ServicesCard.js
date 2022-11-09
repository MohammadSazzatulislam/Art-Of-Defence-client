import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center  gap-7 pt-10  sm:px-3 px-4">
        {services.map((service) => (
          <Card key={service._id} service={service}></Card>
        ))}
      </div>
      <div className="flex justify-end items-center pt-5 mr-32">
        <Link to="/servicess">
          <button className="px-5 py-2 flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white rounded border-none font-semibold">
            See More <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
