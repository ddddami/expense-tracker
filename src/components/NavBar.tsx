const NavBar = () => {
  return (
    <nav className="py-3 navbar d-flex bg-body-tertiary justify-content-start">
      <div className="container-fluid">
        <span className="navbar-text">Welcome, Dami</span>
        <ul className="nav-list d-inline-block me-auto mb-2 mb-lg-0 list-inline">
          <li className="list-inline-item px-1">
            <a className="nav-link">Register</a>
          </li>
          <li className="list-inline-item px-1">
            <a className="nav-link">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
