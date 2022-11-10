import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/AuthContext/AuthContext";
import logo from "../../images/logo.jpg";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [show, setshow] = useState(false);

  const { user, signOutUser } = useContext(UserContext);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" bg-white ">
      <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
        {/* For large and Medium-sized Screen */}
        <div className=" flex justify-between items-center gap-2 ">
          <div className=" flex gap-1 items-center">
            <img className="w-12 p-0 m-0 rounded-full" src={logo} alt="" />
            <Link to="/">
              <h1 className=" font-semibold text-2xl leading-6 text-gray-800">
                Art Of Defensee
              </h1>
            </Link>
          </div>

          <div className="hidden font-semibold text-md  sm:flex flex-row items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/addService"> Add Service</Link>
            <Link to="/myReview">My Reviews</Link>
          </div>

          <div className="hidden sm:flex flex-row justify-center items-center space-x-4">
            {user?.uid ? (
              <>
                {user?.photoURL ? (
                  <div className="w-12 h-12 rounded-full border">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 border rounded-full flex justify-center items-center">
                    <FaUser></FaUser>
                  </div>
                )}

                <Link to="/">
                  <button
                    onClick={handleLogOut}
                    className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center"
                  >
                    Log Out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
          {/* Burger Icon */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2   focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
          >
            <svg
              className={`${show ? "hidden" : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=" transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className=" transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              className={`${show ? "block" : "hidden"}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Mobile and small-screen devices (toggle Menu) */}
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-col font-semibold text-md justify-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/addService"> Add Service</Link>
            <Link to="/myReview">My Reviews</Link>
          </div>
          <div className="flex flex-col gap-4 mt-4 w-80  ">
            {user?.uid ? (
              <>
                {user?.photoURL ? (
                  <div className="w-12 h-12 rounded-full border">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 border rounded-full flex justify-center items-center">
                    <FaUser></FaUser>
                  </div>
                )}

                <Link to="/">
                  <button
                    onClick={handleLogOut}
                    className="rounded-md flex space-x-2 w-20 h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center"
                  >
                    Log Out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin">
                  <button className="rounded-md flex space-x-2 w-20 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
                    Sign In
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
