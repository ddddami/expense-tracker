import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      //   { index: true, element: <Navigate to="/movies" /> },
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
      //   {
      //     element: <PrivateRoutes />,
      //     children: [{ path: "/movies/:id", element: <MovieForm /> }],
      //   },
    ],
  },
]);

export default router;
