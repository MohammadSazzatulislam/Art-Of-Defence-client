import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  signInWithPopup,
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

  const passwordReset = (email) => {
        setLoading(true);
      return sendPasswordResetEmail(auth, email)
    }

    const upDateProfile = (name, photoURL) => {
            setLoading(true);
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
  }
  
  const googleSignIn = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
    
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
    passwordReset,
    googleSignIn,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
