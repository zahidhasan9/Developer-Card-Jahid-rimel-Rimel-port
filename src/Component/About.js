import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Slider from "./slider";
import { NavLink } from "react-router-dom";

function About() {
  
  return (
    <div>
      <>
        <div className="main-wrapper">
          <section className="about-me-section p-3 p-lg-5 theme-bg-light">
            <div className="container">
              <div className="profile-teaser row">
                <div className="col">
                  <h2 className="name font-weight-bold mb-1">
                    Jahid Hasan Rimel
                  </h2>
                  <div className="tagline mb-3">
                    Web Application Developmer (MERN)
                  </div>
                  <div className="bio mb-4">
                    I am a ReactJs developer with polished skills in all of its
                    major libraries such as React-Redux, React Router, Ant
                    design, Material UI, etc. I have also a strong grip over
                    React Hooks. I have developed several websites. I am also a
                    NodeJs developer. I have completed 20+ Projects of Web
                    development.
                    <a className="text-link" href="blog-home.html">
                      my blog
                    </a>
                    . Want to know how I may help your project? Check out my
                    project{" "}
                    <NavLink className="text-link" to="/portfolio">
                      portfolio
                    </NavLink>{" "}
                    and{" "}
                    <NavLink className="text-link" to="/resume">
                      online resume
                    </NavLink>
                    .
                  </div>
                  {/*//bio*/}
                  <div className="mb-4">
                    <NavLink
                      className="btn btn-primary me-2 mb-3"
                      to="/portfolio"
                    >
                      <i className="fas fa-arrow-alt-circle-right me-2" />
                      <span className="d-none d-md-inline">View</span> Portfolio
                    </NavLink>
                    <NavLink className="btn btn-secondary mb-3" to="/resume">
                      <i className="fas fa-file-alt me-2" />
                      <span className="d-none d-md-inline">View</span> Resume
                    </NavLink>
                  </div>
                </div>
                {/*//col*/}
                <div className="col-md-5 col-lg-5">
                  <img
                    className="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
                    src="assets/images/profile-lg.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/*//about-me-section*/}
          <section className="overview-section p-3 p-lg-5">
            <div className="container">
              <h2 className="section-title font-weight-bold mb-3">What I do</h2>
              <div className="section-intro mb-5">
                I have built a real-time chat application in ReactJs similar to
                web WhatsApp, I have also developed an invoicing system in
                ReactJs with API integration, I have developed many landing
                pages, I have developed a complete frontend of several websites
                from UI / UX to logic, API implementation. And much more, I am
                available for long term projects.I have proven skills in the
                following technologies.
              </div>
              <div className="row">
                <div className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      <i className="fab fa-js-square" />
                    </div>
                    <h3 className="item-title">Vanilla JavaScript</h3>
                  </div>
                  {/*//item-inner*/}
                </div>
                {/*//item*/}
                <div className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      {/* <i className="fab fa-angular me-2" /> */}
                      <i className="fab fa-react me-2" />
                      <i className="fab fa-vuejs" />
                    </div>
                    <h3 className="item-title"> React &amp; Vue</h3>
                  </div>
                  {/*//item-inner*/}
                </div>
                {/*//item*/}
                <div className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      <i className="fab fa-node-js" />
                    </div>
                    <h3 className="item-title">Node.js</h3>
                  </div>
                  {/*//item-inner*/}
                </div>
                {/*//item*/}
                <div className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      <i className="fab fa-python" />
                    </div>
                    <h3 className="item-title">Python </h3>
                  </div>
                  {/*//item-inner*/}
                </div>
                {/*//item*/}
                <div className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      <i className="fab fa-php" />
                    </div>
                    <h3 className="item-title">PHP</h3>
                  </div>
                  {/*//item-inner*/}
                </div>
                {/*//item*/}
                <div className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      <i className="fab fa-npm me-2" />
                    </div>
                    <h3 className="item-title">npm</h3>
                  </div>
                  {/*//item-inner*/}
                </div>
                {/*//item*/}
                <div className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      <i className="fab fa-html5 me-2" />
                      <i className="fab fa-css3-alt" />
                    </div>
                    <h3 className="item-title">HTML &amp; CSS</h3>
                  </div>
                  {/*//item-inner*/}
                </div>
                {/*//item*/}
                <div className="item col-6 col-lg-3">
                  <div className="item-inner">
                    <div className="item-icon">
                      <i className="fab fa-sass me-2" />
                      <i className="fab fa-less" />
                    </div>
                    <h3 className="item-title">Sass &amp; LESS</h3>
                  </div>
                  {/*//item-inner*/}
                </div>
                {/*//item*/}
              </div>
              {/*//row*/}
            </div>
            {/*//container*/}
          </section>
          <div className="container">
            <hr />
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
