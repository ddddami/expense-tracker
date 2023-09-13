import { Ring } from "@uiball/loaders";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import UserContext from "../contexts/UserContext";
import userService from "../services/user-service";
import { getToken } from "../services/auth-service";

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
        {getToken() && isLoading ? (
          <div className="m-auto w-50 p-5 text-center">
            <Ring size={40} lineWeight={5} speed={2} color="black" />
          </div>
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
