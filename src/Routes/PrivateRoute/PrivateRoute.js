import React, { useContext } from "react";
import { UserContext } from "../../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center">
        <div className="w-16  h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
      </div>
    );
  }

  if (!user?.uid) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
