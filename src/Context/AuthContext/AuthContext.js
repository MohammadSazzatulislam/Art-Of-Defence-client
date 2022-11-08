import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const createNewUserSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const createExistingUserSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    };

    const upDateProfile = (name, photoURL) => {
            setLoading(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
    }
    
    const signOutUser = () => {
         setLoading(true);
        return signOut(auth)
    }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);
 
    
  const authInfo = {
    user,
    createNewUserSignUp,
    createExistingUserSignIn,
    loading,
    setLoading,
    signOutUser,
    upDateProfile,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
