import React from "react";

const Card = ({ service }) => {
    
    const {img, name, details} = service

  return (
    <div>
      <div className="w-80 p-4  rounded border hover:shadow-lg">
        <div className="flex justify-center items-center flex-col ">
          <img className="w-full h-60 rounded" src={img} alt="" />
          <div className="flex justify-center items-center flex-col mt-5 mb-5">
            <p className="text-sm lg:text-2xl md:text-md font-semibold leading-none text-gray-800">
              {name}
            </p>
            <p className="text-sm font-medium text-ellipsis text-gray-400 mt-3">
             {details.slice(0,120)}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
