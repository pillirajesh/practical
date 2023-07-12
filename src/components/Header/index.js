import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h6>Left Menu</h6>
            <ul className="unorder-list">
              <li className="nav-item">
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userdata" className="link">
                  User Data List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
