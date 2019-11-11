import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../auth/Session';
import SignOutButton from '../auth/SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser}/>
      ) : (
        <NavigationNonAuth/>
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <div>

    <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
      <a className="navbar-brand mr-1" href="#">
        Start Bootstrap
      </a>
      {/* Navbar Search */}
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            style={{marginTop:"13px"}}
            type="text"
            className="form-control"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search"/>
            </button>
          </div>
        </div>
      </form>
      {/* Navbar */}
      <ul className="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-bell fa-fw"/>
            <span className="badge badge-danger">9+</span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="alertsDropdown"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider"/>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-envelope fa-fw"/>
            <span className="badge badge-danger">7</span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="messagesDropdown"
          >
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <div className="dropdown-divider"/>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user-circle fa-fw"/>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              Settings
            </a>
            <a className="dropdown-item" href="#">
              Activity Log
            </a>
            <div className="dropdown-divider"/>
            <SignOutButton />
          </div>
        </li>
      </ul>
    </nav>
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
