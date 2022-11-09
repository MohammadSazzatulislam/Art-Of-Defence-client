import React from 'react';

const AddServices = () => {
    return (
      <div
        className="bg-gray-200 py-10 flex items-center justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center gap-5 ">
          {/* Code block starts */}
          <div className="flex flex-col ">
            <label
              htmlFor="srvname"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Services Name
            </label>
            <div className="relative">
              <input
                id="srvname"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
                placeholder="service name"
              />
            </div>
          </div>
          {/* Code block ends */}
          {/* Code block starts */}
          <div className="flex flex-col">
            <label
              htmlFor="email1"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Service Image
            </label>
            <div className="relative">
              <input
                id="email1"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
                placeholder="service imageURL"
              />
            </div>
          </div>
          {/* Code block ends */}
          {/* Code block starts */}
          <div className="flex flex-col ">
            <label
              htmlFor="email1"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Service Price
            </label>
            <div className="relative">
              <input
                id="email1"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
                placeholder="service price $"
              />
            </div>
          </div>
          {/* Code block ends */}
          {/* Code block starts */}
          <div className="flex flex-col ">
            <label
              htmlFor="email1"
              className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              Email
            </label>
            <div className="relative">
              <input
                id="email1"
                className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
                placeholder="Placeholder"
              />
            </div>
          </div>
          {/* Code block ends */}
        </div>
      </div>
    );
};

export default AddServices;