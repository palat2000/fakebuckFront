import { useState, createContext } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
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

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  const updateProfile = async (data) => {
    const response = await axios.patch("/user", data);
    setAuthUser({ ...authUser, ...response.data });
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        initialLoading,
        register,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
