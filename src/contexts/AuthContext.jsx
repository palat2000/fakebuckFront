import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { addAccessToken } from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    axios
      .get("/auth/me")
      .then((res) => setAuthUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

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
