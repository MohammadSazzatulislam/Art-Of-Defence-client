import React, { useContext } from "react";
import { FaStar, FaUser, FaStarHalfAlt } from "react-icons/fa";
import { UserContext } from "../../../Context/AuthContext/AuthContext";

const AllReviews = ({ reviews }) => {
  const { user } = useContext(UserContext);
  const { photoURL, username, description } = reviews;
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" w-full hover:shadow-2xl flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            {user.photoURL ? (
              <img
                className="w-28 h-28 rounded-full "
                src={photoURL}
                alt="profile"
              />
            ) : (
              <FaUser></FaUser>
            )}

            <p className="mt-2 text-md font-semibold text-center">{username}</p>
            <p className="mt-2 flex gap-2 items-center text-yellow-500 text-xs sm:text-sm md:text-base font-semibold text-center">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStarHalfAlt></FaStarHalfAlt>
            </p>
          </div>
        </div>
        <div className="mt-3">
          <p className=" ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
