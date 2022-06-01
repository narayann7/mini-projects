import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();
const useAuthContext = () => {
  return useContext(AuthContext);
};

function AuthProvider(props) {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const value = {
    isLoggedIn,
    setisLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export { AuthProvider, useAuthContext, AuthContext };
