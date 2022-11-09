import React, { useState } from "react";

const AddServices = () => {
  const [services, setServices] = useState([]);

  const handlesubmit = (e) => {
      e.preventDefault();
      
      const addServices = {
        name: services.name,
        img: services.img,
        category: [services.img1, services.img2, services.img3, services.img4],
        price: services.price,
        details: services.details
      };

    fetch(`http://localhost:5000/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addServices),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  const handleBlur = (event) => {
    const name = event.target.name;
    const field = event.target.value;
    const newService = { ...services };
    newService[name] = field;
    setServices(newService);
  };

  return (
    <form
      onSubmit={handlesubmit}
      className="bg-gray-200 py-10 flex flex-col items-center justify-center"
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
              required
              onBlur={handleBlur}
              name="name"
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
              required
              onBlur={handleBlur}
              name="img"
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
              required
              onBlur={handleBlur}
              name="price"
              id="email1"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
              placeholder="service price "
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
            Image1
          </label>
          <div className="relative">
            <input
              required
              onBlur={handleBlur}
              name="img1"
              id="email1"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
              placeholder="image 1 URL"
            />
          </div>
        </div>
        {/* Code block ends */}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-9 md:grid-cols-2 items-center gap-5 ">
        {/* Code block starts */}
        <div className="flex flex-col ">
          <label
            htmlFor="email1"
            className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
          >
            Image2
          </label>
          <div className="relative">
            <input
              required
              onBlur={handleBlur}
              name="img2"
              id="email1"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
              placeholder="image 2 URL"
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
            Image3
          </label>
          <div className="relative">
            <input
              required
              onBlur={handleBlur}
              name="img3"
              id="email1"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
              placeholder="image 3 URL"
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
            Image4
          </label>
          <div className="relative">
            <input
              required
              onBlur={handleBlur}
              name="img4"
              id="email1"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center p-2 text-sm border-gray-300 rounded border shadow"
              placeholder="image 4 URL"
            />
          </div>
        </div>
        {/* Code block ends */}
      </div>
      {/* Code block starts */}
      <div className="flex flex-col mt-9 mx-auto w-3/4 ">
        <label
          htmlFor="email1"
          className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2"
        >
          Service Description
        </label>
        <div className="relative">
          <textarea
            required
            onBlur={handleBlur}
            name="details"
            className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-full p-2 text-sm border-gray-300 rounded border shadow"
            placeholder="service description"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      {/* Code block ends */}
      <input
        className="px-6 py-2 mt-5 rounded bg-blue-500 hover:bg-blue-700 text-white font-semibold border-none"
        type="submit"
        value="Add Service"
      />
    </form>
  );
};

export default AddServices;
