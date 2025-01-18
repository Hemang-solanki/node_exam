import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo">
            <img
              src="https://demo.bootstrapdash.com/corona-free/jquery/template/assets/images/logo.svg"
              alt="logo"
            />
          </a>
          <a className="sidebar-brand brand-logo-mini">
            <img
              src="https://demo.bootstrapdash.com/corona-free/jquery/template/assets/images/logo-mini.svg"
              alt="logo"
            />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img
                    className="img-xs rounded-circle "
                    src="assets/images/faces/face15.jpg"
                    alt=""
                  />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                  <span>Gold Member</span>
                </div>
              </div>
              <a id="profile-dropdown" data-bs-toggle="dropdown">
                <i className="mdi mdi-dots-vertical"></i>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                aria-labelledby="profile-dropdown"
              >
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      Account settings
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      Change Password
                    </p>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">
                      To-do list
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">Navigation</span>
          </li>
          <li className="nav-item menu-items">
            <span className="nav-link">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
          <Link to={'/'}><span className="menu-title">home</span></Link>
            </span>
          </li>
          <li className="nav-item menu-items">
            <span className="nav-link">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <Link to={'/admin'}><span className="menu-title">Dashboard</span></Link>
            </span>
          </li>
          <li className="nav-item menu-items">
            <span className="nav-link">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <Link to={'/myblogs'}><span className="menu-title">myblog</span></Link>
            </span>
          </li>
          <li className="nav-item menu-items">
            <span className="nav-link">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <Link to={'/createblog'}><span className="menu-title">Create blog</span></Link>
            </span>
          </li>
          
          <li className="nav-item menu-items">
            <span className="nav-link">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
          <Link to={'/login'}><span className="menu-title">Login</span></Link>
            </span>
          </li>

          <li className="nav-item menu-items">
            <span className="nav-link">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
          <Link to={'/signup'}><span className="menu-title">Signup</span></Link>
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
