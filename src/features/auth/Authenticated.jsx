import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

function Authenticated({ children }) {
  const { authUser } = useAuth();
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default Authenticated;
