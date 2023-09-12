import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { logout } from "../services/auth-service";

const NavBar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="py-3 navbar d-flex bg-body-tertiary justify-content-start">
      <div className="container-fluid">
        <span className="navbar-text">Welcome, {user?.name}</span>
        <ul className="nav-list d-inline-block me-auto mb-2 mb-lg-0 list-inline">
          <li className="list-inline-item px-1">
            {user ? (
              <NavLink
                to="#"
                className="nav-link"
                onClick={() => {
                  logout();
                  window.location.href = "/login";
                }}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            )}
          </li>
          {!user && (
            <li className="list-inline-item px-1">
              <NavLink to="/login" className="list-inline-item nav-link">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
