import React from 'react';

const AllReviews = ({ reviews }) => {
    const { photoURL, username, description } = reviews;
    return (
      <div className="w-full flex items-center justify-center">
        <div className=" w-full hover:shadow-2xl flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md">
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center">
              <img
                className="w-28 h-28 rounded-full "
                src={photoURL}
                alt="profile"
              />
              <p className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center">
                {username}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <p className=" font-semibold ">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default AllReviews;