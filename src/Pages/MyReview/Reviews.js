import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


const Reviews = ({ review, handleDelete }) => {
  const { _id, img, name, username, description } = review;

  return (
    <div
      className="mt-4 p-3  md:mt-6 flex border-b border-gray-300 flex-col md:flex-row 
    
    justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
    >
      <div className="w-full md:w-40">
        <img className="w-full hidden md:block" src={img} alt="" />
        <img className="w-full md:hidden" src={img} alt="" />
      </div>
      <div className=" md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-4">
          <h3 className="text-xl xl:text-2xl font-semibold leading-2 pt-3 text-black">
            {name}
          </h3>
          <div className="flex justify-start items-start flex-col space-y-2">
            <p className="text-sm leading-none  text-gray-800">
              <span className="text-black font-bold">By</span> : {username}
            </p>
            <p className="text-sm leading-none flex gap-2 items-center text-yellow-500  ">
              <span className="text-black font-bold">Raiting :</span>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
            </p>
            <p className="text-sm leading-none  text-gray-800">{description}</p>
          </div>
        </div>
        <div className="flex justify-end space-x-8 w-full">
          <Link to={`/update/${_id}`} >
            <button className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="text-base xl:text-lg font-semibold leading-6 text-gray-800"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
