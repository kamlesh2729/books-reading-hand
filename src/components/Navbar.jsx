import { Link } from 'react-router-dom';

import Logo from '../assets/website/logo.png'

const logo = {
  height: "50px",
  width: "50px",
};

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid px-4">
            <Link className="navbar-brand" to="/">
              <img
                src={Logo}
                style={logo}
                alt="readinghandbook- logo"
              />
              Book
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav w-75 d-flex justify-content-center ps-3 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/about">
                    About
                  </Link>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/#BestBooks">
                    Best Books
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/#NewArrivals">
                    New Arrrivals
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/products">
                    books
                  </Link>
                </li>
              </ul>
              <form className="d-flex justify-content-end w-25" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
};

export default Navbar;
