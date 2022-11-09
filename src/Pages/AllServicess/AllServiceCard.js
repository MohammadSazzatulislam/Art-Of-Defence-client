import React from "react";
import { Link } from 'react-router-dom';

const AllServiceCard = ({ card }) => {
  const { name, img, details, _id, price } = card;
  return (
    <div className="w-80 p-4  rounded border hover:shadow-lg">
      <div className="flex justify-center items-center flex-col ">
        <img className="w-full h-60 rounded" src={img} alt="" />
        <div className="flex  flex-col mt-5 mb-5">
          <p className="text-sm lg:text-2xl md:text-md font-semibold leading-none text-gray-800">
            {name}
          </p>
          <p className="text-sm font-medium text-ellipsis text-gray-400 mt-3">
            {details.slice(0, 120)}...
          </p>
          <p className="text-md font-semibold flex gap-2 items-center  text-gray-700 mt-3">
            <span className="">Price :</span> {price}
          </p>
        </div>
      </div>
      <div className="w-full h-9 mx-auto">
        <Link to={`/details/${_id}`}>
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 w-full h-full py-3 px-20 bg-blue-100 border rounded border-gray-200">
            <p className="text-sm font-medium leading-none text-gray-600">
              Details
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllServiceCard;
