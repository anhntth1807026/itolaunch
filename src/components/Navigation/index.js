import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../constants/routes';

const Navigation = ({ authUser }) => (
    <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
            <a className="navbar-brand mr-1" href="index.html">Itolaunch</a>
            {/* Navbar Search */}
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input type="text" className="form-control mar" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </form>
            {/* Navbar */}
            <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-bell fa-fw" />
                        <span className="badge badge-danger">9+</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow mx-1">
                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-envelope fa-fw" />
                        <span className="badge badge-danger">7</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user-circle fa-fw" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">Settings</a>
                        <a className="dropdown-item" href="#">Activity Log</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item"><SignOutButton/></a>
                    </div>
                </li>
            </ul>
        </nav>
        {/*<ul>*/}
        {/*    <li>*/}
        {/*        <Link to={ROUTES.LANDING}>Landing</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <Link to={ROUTES.HOME}>Home</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <Link to={ROUTES.ACCOUNT}>Account</Link>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*        <SignOutButton />*/}
        {/*    </li>*/}
        {/*</ul>*/}
    </div>

);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

export default Navigation;