import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const PrivateRoutes = () => {
  const { user } = useContext(UserContext);

  if (user) return <Outlet />;
  return <Navigate to="/login" />;
};

export default PrivateRoutes;
