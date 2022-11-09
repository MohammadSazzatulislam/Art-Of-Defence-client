import React from "react";

const MyReview = () => {
  return (
    <div className="py-10 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            {/* user reviews */}
            <div className="mt-4 p-3  md:mt-6 flex border-b border-gray-300 flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
              <div className="w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                  alt="dress"
                />
              </div>
              <div className=" md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    Premium Quaility Dress
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm leading-none  text-gray-800">
                      <span className="text-gray-300">Style: </span> Italic
                      Minimal Design
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base xl:text-lg leading-6">$36.00</p>
                  <button className="text-base xl:text-lg leading-6 text-gray-800">
                    Edit
                  </button>
                  <button className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3  md:mt-6 flex border-b border-gray-300 flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
              <div className="w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                  alt="dress"
                />
              </div>
              <div className=" md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    Premium Quaility Dress
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm leading-none  text-gray-800">
                      <span className="text-gray-300">Style: </span> Italic
                      Minimal Design
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base xl:text-lg leading-6">$36.00</p>
                  <button className="text-base xl:text-lg leading-6 text-gray-800">
                    Edit
                  </button>
                  <button className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3  md:mt-6 flex border-b border-gray-300 flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
              <div className="w-full md:w-40">
                <img
                  className="w-full hidden md:block"
                  src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                  alt="dress"
                />
                <img
                  className="w-full md:hidden"
                  src="https://i.ibb.co/L039qbN/Rectangle-10.png"
                  alt="dress"
                />
              </div>
              <div className=" md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    Premium Quaility Dress
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm leading-none  text-gray-800">
                      <span className="text-gray-300">Style: </span> Italic
                      Minimal Design
                    </p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base xl:text-lg leading-6">$36.00</p>
                  <button className="text-base xl:text-lg leading-6 text-gray-800">
                    Edit
                  </button>
                  <button className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                    Delete
                  </button>
                </div>
              </div>
            </div>
            {/* user reviews */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
