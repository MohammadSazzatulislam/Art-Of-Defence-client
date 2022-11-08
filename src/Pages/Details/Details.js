import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext/AuthContext";
import { Link } from "react-router-dom";

const Details = () => {
  const { user } = useContext(UserContext);

  const { _id,  name, details, img, price, category } = useLoaderData();

  const [reviews, setReviews] = useState(user);
  
  const userReview = {
    reviewId: _id,
    name: reviews.name,
    email: reviews.email,
    description: reviews.description,
    photoURL:user.photoURL
  };

  const handleSubmit = e => {
    e.preventDefault()

console.log(reviews)

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    });


    e.target.reset()
  }

  const handleBlur = event => {
    const name = event.target.name
    const field = event.target.value
    const newReviews = { ...reviews }
    newReviews[name] =field
    setReviews(newReviews);
}



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

      {/* review  section */}
      <div className="flex justify-between items-center p-5">
        <h1 className="text-md font-bold lg:text-2xl border-l-4 border-blue-500 ">
          Reviews
        </h1>
        {user?.uid ? (
          <h3 className="font-bold text-yellow-600 pr-5 italic text-md">
            Add Review
          </h3>
        ) : (
          <Link to="/signin">
            <h2 className="font-semibold hover:underline">
              Please login to add a review{" "}
            </h2>
          </Link>
        )}
      </div>

      <div className="grid lg:grid-cols-4 gap-5 p-5 mb-5 md:grid-cols-3 gird-cols-1 mx-auto items-center justify-center ">
        <div className="w-full flex items-center justify-center">
          <div className=" w-full hover:shadow-2xl flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md">
            <div className="w-full flex items-center justify-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.tuk.dev/assets/templates/olympus/profile.png"
                  alt="profile"
                />
                <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
                  Ricardo Boveta
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p className=" font-semibold ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                alias.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* review form section */}
      {user?.uid && (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="bg-gray-300 mx-auto w-1/2 mb-5 h-1"></div>
            <div className="lg:w-4/5 md:w-4/5 w-full p-2 mx-auto gap-3 flex ">
              <div className="lg:w-1/2 w-full mx-auto">
                <label className="text-sm leading-none text-gray-800" id="Name">
                  Name
                </label>
                <input
                  onBlur={handleBlur}
                  name="name"
                  type="text"
                  tabindex="0"
                  className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                  aria-labelledby="firstName"
                  placeholder="your Name"
                />
              </div>
              <div className="lg:w-1/2 w-full mx-auto ">
                <label
                  className="text-sm leading-none text-gray-800"
                  id="email"
                >
                  Your Email
                </label>
                <input
                  type="text"
                  defaultValue={user?.email}
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
                onBlur={handleBlur}
                name="description"
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
      )}
    </div>
  );
};

export default Details;
