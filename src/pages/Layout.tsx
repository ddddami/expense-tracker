import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import userService from "../services/user-service";
import UserContext from "../contexts/UserContext";

interface User {
  id: number;
  name: string;
}

const Layout = () => {
  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    userService
      .getUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavBar />
      <main className="container mt-4">
        <Outlet />
      </main>
    </UserContext.Provider>
  );
};

export default Layout;
