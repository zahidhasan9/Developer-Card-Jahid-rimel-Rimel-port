import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// image import
import Profile from "../Assets/img/Rimel3.jpg";

function About() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <div>
      <>
        <header className="header text-center">
          <div className="force-overflow">
            <h1 className="blog-name pt-lg-4 mb-0">
              <a className="no-text-decoration" href="index.html">
                Jahid Hasan Rimel
              </a>
            </h1>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button
                onClick={handleToggle}
                className="navbar-toggler Toggle navigation"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className={
                  isActive
                    ? "collapse navbar-collapse flex-column"
                    : "collapse navbar-collapse flex-column  show"
                }
              >
                <div className="profile-section pt-3 pt-lg-0">
                  <img
                    className="profile-image mb-3 rounded-circle mx-auto"
                    src={Profile}
                    alt="image"
                  />
                  <div className="bio mb-3">
                    Hi, my name is Jahid Hasan Rimel and I'm a Web Application Developer &#38; B.Sc in CSE
                    engineer. Welcome to my personal website!
                  </div>
                  {/*//bio*/}
                  <ul className="social-list list-inline py-2 mx-auto">
                    <li className="list-inline-item">
                      <a href="https://twitter.com/Jahid_Rimel_">
                        <i className="fab fa-twitter fa-fw" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/in/jahid-hasan-rimel/">
                        <i className="fab fa-linkedin-in fa-fw" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://github.com/zahidhasan9">
                        <i className="fab fa-github-alt fa-fw" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://stackoverflow.com/users/16868988/jahid-hasan-rimel">
                        <i className="fab fa-stack-overflow fa-fw" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-codepen fa-fw" />
                      </a>
                    </li>
                  </ul>
                  {/*//social-list*/}
                  <hr />
                </div>
                {/*//profile-section*/}
                <ul className="navbar-nav flex-column text-start">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="activeLink"
                      to="/"
                    >
                      <i className="fas fa-user fa-fw me-2" />
                      About Me
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="activeLink"
                      to="/portfolio"
                    >
                      <i className="fas fa-laptop-code fa-fw me-2" />
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="activeLink"
                      to="/resume"
                    >
                      <i className="fas fa-file-alt fa-fw me-2" />
                      Resume
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="activeLink"
                      to="/contact"
                    >
                      <i className="fas fa-envelope-open-text fa-fw me-2" />
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown"></li>
                </ul>
                <div className="my-2">
                  <a
                    className="btn btn-primary"
                    href="/contact"
                    
                  >
                    <i className="fas fa-paper-plane me-2" />
                    Hire Me
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* ***** pre Developed By Jahidhasan Rimel ****** */}
      </>
    </div>
  );
}

export default About;
