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
    try {
      setInitialLoading(true);
      const { data } = await axios.post("/auth/login", credential);
      addAccessToken(data.accessToken);
      setAuthUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setInitialLoading(false);
    }
  };

  const register = async (credential) => {
    try {
      setInitialLoading(true);
      const { data } = await axios.post("/auth/register", credential);
      addAccessToken(data.accessToken);
      setAuthUser(data.user);
    } catch (err) {
      console.log(err);
    } finally {
      setInitialLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ login, authUser, initialLoading, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
