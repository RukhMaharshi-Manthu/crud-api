import React from "react";
import { Link } from "react-router-dom";
import AccountIcon from "@material-ui/icons/AccountCircle";
export function NavBar({ setdisplay }) {
  return (
    <header className="nav-bar">
      <div className="container">
        <ul className="flex menu">
          <li>
            <Link to="/">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/listusers">
              <b>List Users</b>
            </Link>
          </li>

          <li>
            <Link to="/adduser">
              <b>Add Users</b>
            </Link>
          </li>

          <li>
            <Link to="/profile">
              {" "}
              <AccountIcon />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
