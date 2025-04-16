import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom container">
        <div className="col-md-3 mb-2 mb-md-0">
          <NavLink to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
            <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
            <span className="ms-2 fs-4 fw-bold">bookstore</span>
          </NavLink>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-3 text-primary fw-semibold border-bottom border-2 border-primary"
                  : "nav-link px-3 text-dark fw-medium hover-text-primary"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-3 text-primary fw-semibold border-bottom border-2 border-primary"
                  : "nav-link px-3 text-dark fw-medium hover-text-primary"
              }
            >
              Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-3 text-primary fw-semibold border-bottom border-2 border-primary"
                  : "nav-link px-3 text-dark fw-medium hover-text-primary"
              }
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "nav-link px-3 text-primary fw-semibold border-bottom border-2 border-primary"
                  : "nav-link px-3 text-dark fw-medium hover-text-primary"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link to="/login">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
          </Link>
          <Link to="/register">
            <button type="button" className="btn btn-primary">Register</button>
          </Link>
        </div>
      </header>
    </>
  );
}
