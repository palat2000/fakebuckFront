import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { addAccessToken } from "../utils/local-storage";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const login = async (credential) => {
    try {
      const { data } = await axios.post("/auth/login", credential);
      addAccessToken(data.accessToken);
      setAuthUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ login, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
