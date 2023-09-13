import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./pages/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/home" /> },

      { path: "/register", element: <RegisterForm /> },
      { path: "/login", element: <LoginForm /> },
      {
        element: <PrivateRoutes />,
        children: [{ path: "/home", element: <HomePage /> }],
      },
    ],
  },
]);

export default router;
