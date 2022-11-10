import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/AuthContext/AuthContext";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UpDateReviews = () => {
  const { user } = useContext(UserContext);

  const review = useLoaderData();

  const navigate = useNavigate()

  const [reviews, setReviews] = useState(review);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://art-of-defensee-server.vercel.app/reviews/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully updated!");
          navigate("/myReview");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleBlur = (event) => {
    const name = event.target.name;
    const field = event.target.value;
    const newReviews = { ...reviews };
    newReviews[name] = field;
    setReviews(newReviews);
  };

  return (
    <div>
      <Helmet>
        <title>Art Of Defensee-UpDateReviews</title>
      </Helmet>
      <form id="reviewSubmitFrom" onSubmit={handleSubmit}>
        <div className="lg:w-4/5 md:w-4/5 w-full p-2 mx-auto gap-3 flex ">
          <div className="lg:w-1/2 w-full mx-auto">
            <label className="text-sm leading-none text-gray-800" id="Name">
              Name
            </label>
            <input
              required
              defaultValue={review.username}
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
            <label className="text-sm leading-none text-gray-800" id="email">
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
          <label className="text-sm leading-none text-gray-800" id="firstName">
            Description
          </label>
          <textarea
            required
            defaultValue={review.description}
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
          <input
            className=" text-sm font-medium leading-none text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100 w-full h-full py-3 px-20 bg-blue-100 border rounded border-gray-200"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UpDateReviews;
