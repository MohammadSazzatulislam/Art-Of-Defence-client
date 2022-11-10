import React, { useContext } from 'react';
import { UserContext } from '../../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const { loading, user } = useContext(UserContext);
      const location = useLocation();

    if (loading) {
      return <p>loading ....</p>;
    }

    if (!user?.uid) {
         return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children
   
};

export default PrivateRoute;