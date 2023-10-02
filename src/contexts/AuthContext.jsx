import { useState, createContext } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken } from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => setAuthUser(res.data.user))
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credential) => {
    const { data } = await axios.post("/auth/login", credential);
    addAccessToken(data.accessToken);
    setAuthUser(data.user);
  };

  const register = async (credential) => {
    const { data } = await axios.post("/auth/register", credential);
    addAccessToken(data.accessToken);
    setAuthUser(data.user);
  };

  return (
    <AuthContext.Provider value={{ login, authUser, initialLoading, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
