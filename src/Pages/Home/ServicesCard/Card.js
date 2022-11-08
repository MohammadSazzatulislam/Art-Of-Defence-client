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
        {/* <div className="w-full h-9 mx-auto">
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 w-full h-full py-3 px-20 bg-blue-100 border rounded border-gray-200">
            <p className="text-sm font-medium leading-none text-gray-600">
              Details
            </p>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Card;
