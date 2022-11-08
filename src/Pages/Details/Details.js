import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const { name, details, img, price, category } = useLoaderData();


  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-10 lg:px-20 md:py-5 md:px-3 py-2 px-2 ">
        <div className="flex justify-center items-center lg:flex-row flex-col-reverse gap-6">
          {/* <!-- Description Div --> */}

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
              {name}
            </h2>
            <h2 className="font-semibold lg:text-xl text-lg lg:leading-9 leading-7 text-gray-800 mt-4">
              {details}
            </h2>
            <div className=" text-md font-semibold lg:text-md leading-6  mt-4">
              {category.map((detail, _index) => (
                <ul className="list-disc pl-7" key={_index}>
                  <li> {detail}</li>
                </ul>
              ))}
            </div>

            <p className=" flex gap-3 items-center font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              <span>Price : </span> {price}
            </p>
          </div>

          {/* <!-- Preview Images Div For larger Screen--> */}

          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-3 gap-2">
            <div className=" w-full bg-gray-100 flex justify-center items-center">
              <img className="h-full" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Details;
