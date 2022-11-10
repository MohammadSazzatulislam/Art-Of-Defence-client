import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/AuthContext/AuthContext";
import Reviews from "./Reviews";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Helmet } from "react-helmet-async";

const MyReview = () => {
  const Swal = require("sweetalert2");
  const { user, signOutUser } = useContext(UserContext);
  const [userReview, setUserReview] = useState([]);

  useEffect(() => {
    fetch(
      `https://art-of-defensee-server.vercel.app/review?email=${user?.email}`,
      {
        headers: {
          authorization: localStorage.getItem("jwt-token"),
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return signOutUser();
        }
        return res.json();
      })
      .then((data) => {
        setUserReview(data);
      })
      .catch((err) => console.log(err));
  }, [user?.email, signOutUser]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-of-defensee-server.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = userReview.filter((usr) => usr._id !== id);
            setUserReview(remaining);
          })
          .catch((err) => console.log(err));

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="py-10 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <Helmet>
        <title>Art Of Defensee-MyReview</title>
      </Helmet>
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
