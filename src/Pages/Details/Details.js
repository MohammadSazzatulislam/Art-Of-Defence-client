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

      {/* another section */}
      <div>
        <form>
          <div className="bg-gray-300 mx-auto w-1/2 mb-5 h-1"></div>
          <div className="lg:w-4/5 md:w-4/5 w-full p-2 mx-auto gap-3 flex ">
            <div className="lg:w-1/2 w-full mx-auto">
              <label className="text-sm leading-none text-gray-800" id="Name">
                Name
              </label>
              <input
                type="name"
                tabindex="0"
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="firstName"
                placeholder="your Name"
              />
            </div>
            <div className="lg:w-1/2 w-full mx-auto ">
              <label className="text-sm leading-none text-gray-800" id="email">
                Your Email
              </label>
              <input
                type="email"
                readOnly
                tabindex="0"
                className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                aria-labelledby="lastName"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="lg:w-4/5 md:w-4/5 w-full mx-auto p-2">
            <label
              className="text-sm leading-none text-gray-800"
              id="firstName"
            >
              Description
            </label>
            <textarea
              className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="start type here..."
            ></textarea>
          </div>
          <div className="lg:w-4/5 md:w-4/5 w-full mx-auto p-2">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 w-full h-full py-3 px-20 bg-blue-100 border rounded border-gray-200">
              <p className="text-sm font-medium leading-none text-gray-600">
                Submit
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
