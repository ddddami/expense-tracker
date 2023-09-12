import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const NavBar = () => {
  const { user } = useContext(UserContext);
  return (
    <nav className="py-3 navbar d-flex bg-body-tertiary justify-content-start">
      <div className="container-fluid">
        <span className="navbar-text">Welcome, {user?.name}</span>
        <ul className="nav-list d-inline-block me-auto mb-2 mb-lg-0 list-inline">
          <li className="list-inline-item px-1">
            {user ? (
              <a className="nav-link">Logout</a>
            ) : (
              <a className="nav-link">Register</a>
            )}
          </li>
          {!user && (
            <li className="list-inline-item px-1">
              <a className="list-inline-item nav-link">Login</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
