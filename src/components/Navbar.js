import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav
        class="navbar navbar-expand-lg bg-dark fixed-top"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            AFYA-MTAANI
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/team" className="nav-link">
                  Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
