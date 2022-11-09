import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/AuthContext/AuthContext";
import Reviews from "./Reviews";

const MyReview = () => {
  const { user } = useContext(UserContext);
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReview(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

    const handleDelete = (id) => {
        const agree = window.confirm('are your sure delete!!')
        if (agree) {
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
              if (data.deletedCount) {
                  alert('successfully delete')
                  const remaining = userReview.filter(usr => usr._id !== id)
                 setUserReview(remaining)
            } 
          })
          .catch((err) => console.log(err));
      }
    
  };

  return (
    <div className="py-10 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            {/* user reviews */}
            {userReview.length === 0 ? (
              <p className="text-md font-semibold italic text-gray-400">
                No reviews were added
              </p>
            ) : (
              <>
                {userReview.map((rev) => (
                  <Reviews
                    key={rev._id}
                    review={rev}
                    handleDelete={handleDelete}
                  ></Reviews>
                ))}
              </>
            )}

            {/* user reviews */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
