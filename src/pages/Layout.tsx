import { useEffect, useState, useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";

import UserContext from "../contexts/UserContext";
import userService from "../services/user-service";

interface User {
  id: number;
  name: string;
}

const Layout = () => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    userService
      .getUser()
      .then((res) => {
        setLoading(true);
        setUser(res.data);
        setLoading(false);
      })
      .catch((ex) => setLoading(false));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <>
        <NavBar />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <main className="container mt-4">
            <Outlet />
          </main>
        )}
      </>
    </UserContext.Provider>
  );
};

export default Layout;
