import React from "react";
import Profile from "../Assets/img/Rimel.jpg";

function Resume() {
  console.log("active-in oyt");

  return (
    <div>
      <>
        <div className="main-wrapper">
          <section className="cta-section theme-bg-light py-5">
            <div className="container text-center single-col-max-width">
              <h2 className="heading mb-3">Online Resume</h2>
              <a
                className="btn btn-primary"
                href="https://docs.google.com/document/d/1unvwBb8W30IvAQmRE_Vhodr-5tqZCVqW/edit?usp=share_link&ouid=107183701790810350747&rtpof=true&sd=true"
                target="_blank"
              >
                <i className="fas fa-file-pdf me-2" />
                Download CV
              </a>
            </div>
            {/*//container*/}
          </section>
          <div className="container resume-container px-3 px-lg-5">
            <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
              <div className="resume-header">
                <div className="row align-items-center">
                  <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                    <h2 className="resume-name mb-0 text-uppercase">
                      Jahid Hasan Rimel
                    </h2>
                    <div className="resume-tagline mb-3 mb-md-0">
                      Web Application Developmer (MERN)
                    </div>
                  </div>
                  {/*//resume-title*/}
                  <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2">
                        <i className="fas fa-phone-square fa-fw fa-lg me-2 " />
                        <a className="resume-link" href="tel:#">
                          017 2882 7813
                        </a>
                      </li>
                      <li className="mb-2">
                        <i className="fas fa-envelope-square fa-fw fa-lg me-2" />
                        <a className="resume-link" href="mailto:#">
                          zmzahidhasan181@gmail.com
                        </a>
                      </li>
                      {/* <li className="mb-2">
                      <i className="fas fa-globe fa-fw fa-lg me-2" />
                      <a className="resume-link" href="#">
                        www.yourwebsite.com
                      </a>
                    </li> */}

                      <li className="mb-2">
                        <i className="fab fa-linkedin fa-fw fa-lg me-2" />
                        <a
                          className="resume-link"
                          href="https://www.linkedin.com/in/jahid-hasan-rimel/"
                          target="_blank"
                        >
                          www.linkedin.com/in/jahid-hasan-rimel
                        </a>
                      </li>
                      <li className="mb-0">
                        <i className="fas fa-map-marker-alt fa-fw fa-lg me-2" />
                        Sylhet, Bangladesh, Po:3101
                      </li>
                    </ul>
                  </div>
                  {/*//resume-contact*/}
                </div>
                {/*//row*/}
              </div>
              {/*//resume-header*/}
              <hr />
              <div className="resume-intro py-3">
                <div className="row align-items-center">
                  <div className="col-12 col-md-3 col-xl-2 text-center">
                    <img
                      className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded mx-auto"
                      src={Profile}
                      alt="image"
                    />
                  </div>
                  <div className="col text-start">
                    <p className="mb-0">
                      <b href="" style={{ fontSize: "20px" }}>
                        Objective: <hr />
                      </b>
                      Looking for an opportunity as a Full Stack Web Application
                      Developer where I can utilize my interest, skills,
                      knowledge, education, and experience. I am technically
                      strong, dedicated, quick learner, configuration and
                      troubleshooting of computer-related issues to obtain
                      maximum performance and willing to bring all of this to
                      your organization and continue growing in my career
                    </p>
                  </div>
                  {/*//col*/}
                </div>
              </div>
              {/*//resume-intro*/}
              <hr />
              <div className="resume-body">
                <div className="row">
                  <div className="resume-main col-12 col-lg-8 col-xl-9   pe-0   pe-lg-5">
                    <section className="work-section py-3">
                      <h3 className="text-uppercase resume-section-heading mb-4">
                        Work Experiences
                      </h3>
                      <div className="item mb-3">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Web Application Developmer
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                            Easy Shop IT | 2023 - Present
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                            I have always had an interest in programming and
                            learning different frameworks and from that interest
                            I have been learning web application development for
                            the past one year and five months and have created
                            many projects as a hobby and my latest project was
                            the university computer club.
                          </p>
                          <ul className="resume-list">
                            <li>
                              Leading University, Sylhet; Undergraduate Final
                              Year, 15.08.21- 25.08.22Leading University
                              Computer Clubs have been created using Mongodb,
                              React Redux, Express JS, ReactJS and NodeJS.
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*//item*/}
                      <div className="item mb-3">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Leadership
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                            Leading University | 15.08.21- 25.08.22
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                            Leading University Computer Clubs, Recruited members
                          </p>
                          <ul className="resume-list">
                            <li> Lead weekly meetings and discussed topics.</li>
                            <li>Organized data.</li>
                            <li>Recruited members.</li>
                          </ul>
                        </div>
                      </div>
                      {/*//item*/}
                      {/* <div className="item mb-3">
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                          Senior Software Developer
                        </h4>
                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                          Dropbox | 2014 - 2016
                        </div>
                      </div>
                      <div className="item-content">
                        <p>
                          Role description goes here ipsum dolor sit amet,
                          consectetuer adipiscing elit. Aenean commodo ligula eget
                          dolor. Aenean massa. Cum sociis natoque penatibus et
                          magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                      </div>
                    </div> */}
                      {/*//item*/}
                      {/* <div className="item">
                      <div className="item-heading row align-items-center mb-2">
                        <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                          Senior Developer
                        </h4>
                        <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                          Uber | 2013 - 2014
                        </div>
                      </div>
                      <div className="item-content">
                        <p>
                          Role description goes here ipsum dolor sit amet,
                          consectetuer adipiscing elit. Aenean commodo ligula eget
                          dolor. Aenean massa. Cum sociis natoque penatibus.{" "}
                        </p>
                      </div>
                    </div> */}
                      {/*//item*/}
                      <div className="item">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Frontend Developement
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                            2020 - Present
                          </div>
                        </div>
                        <div className="item-content">
                          <ul className="resume-list">
                            <li> React JS.</li>
                            <li> Material-UI.</li>
                            <li> bootstrap.</li>
                            <li> Redux.</li>
                            <li> Material Table</li>
                            <li> Php (Basic). </li>
                            <li> Figma. </li>
                          </ul>
                        </div>
                      </div>
                      {/*//item*/}
                      <div className="item">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Backend Developement
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                            2021 - Present
                          </div>
                        </div>
                        <div className="item-content">
                          <p></p>
                          <ul className="resume-list">
                            <li> Node Js.</li>
                            <li> Express JS.</li>
                            <li> Mongo DB.</li>
                            <li> Cors.</li>
                            <li> Laravel</li>
                            <li> SQL</li>
                          </ul>
                        </div>
                      </div>
                      {/*//item*/}
                    </section>
                    {/*//work-section*/}
                    <section className="project-section py-3">
                      <h3 className="text-uppercase resume-section-heading mb-4">
                        Projects
                      </h3>
                      <div className="item mb-3">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Leading University Computer Club
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                            Open Source
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                          This project is developed by using React js, Node js, Express js, Mongo db, Redux js, cors, JWT token and also includes authorization, authentication-based and has validation, verification.

                            {/* <a href="#" className="theme-link">
                              provide a project link here
                            </a>{" "} */}
                            <ul className="resume-list">
                            <li> This project has dashboard for admin amd user  </li>
                            <li> Also have authentication and authorization where three type of users access be provided.</li>
                            <li> Here user can create account but user need to active their account by admin.  </li>
                            <li> This project has special features which are blood donetion system, can create event for clube and manage the all event.  </li>
                            <li> Additionally this projrct has munlti functional table which are created by react material table, where each kind of user can search any data by perticular field.  </li>
                            <li> Besides that here use JWT token which proviedes stong security to all users.  </li>
                           </ul>
                          </p>
                        </div>
                      </div>
                      {/*//item*/}
                      {/* <div className="item">
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            Project Sed Fringilla
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-start text-md-end">
                            Open Source
                          </div>
                        </div>
                        <div className="item-content">
                          <p>
                            You can use this section for your side projects.
                            Cras dapibus. Vivamus elementum semper nisi. Aenean
                            vulputate eleifend tellus. Aenean leo ligula,
                            porttitor eu, consequat vitae, eleifend ac, enim.
                          </p>
                        </div>
                      </div> */}
                      {/*//item*/}
                     
                     
                    </section>
                    {/*//project-section*/}
                  </div>
                  {/*//resume-main*/}
                  <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                    <section className="skills-section py-3">
                      <h3 className="text-uppercase resume-section-heading mb-4">
                        Skills
                      </h3>
                      <div className="item">
                        <h4 className="item-title">Technical</h4>
                        <ul className="list-unstyled resume-skills-list">
                          <li className="mb-2">JavaScript/React/Vue</li>
                          <li className="mb-2">Python/PHP</li>
                          <li></li>
                          <li className="mb-2">Node js/Express js</li>
                          <li className="mb-2">MongoDb/MySQL</li>
                          <li className="mb-2">Object-oriented design</li>
                          <li className="mb-2">
                            Design and implement database structures
                          </li>
                          <li>Lead and deliver complex web application systems</li>
                        </ul>
                      </div>
                      {/*//item*/}
                      <div className="item">
                        <h4 className="item-title">Professional</h4>
                        <ul className="list-unstyled resume-skills-list">
                          <li className="mb-2">Effective communication</li>
                          <li className="mb-2">Team player</li>
                          <li></li>
                          <li className="mb-2">Strong problem solver</li>
                          <li>Good time management</li>
                        </ul>
                      </div>
                      {/*//item*/}
                    </section>
                    {/*//skills-section*/}
                    <section className="education-section py-3">
                      <h3 className="text-uppercase resume-section-heading mb-4">
                        Education
                      </h3>
                      <ul className="list-unstyled resume-education-list">
                        <li className="mb-3">
                          <div className="resume-degree font-weight-bold">
                            BSc in Computer Science
                          </div>
                          <div className="resume-degree-org text-muted">
                            Leading University Sylhet
                          </div>
                          <div className="resume-degree-time text-muted">
                          Cumulative GPA: 3.51/4.0
                          </div>
                          <div className="resume-degree-time text-muted">
                            2018 - 2022
                          </div>
                        </li>
                      </ul>
                    </section>
                    {/*//education-section*/}
                    {/* <section className="education-section py-3">
                      <h3 className="text-uppercase resume-section-heading mb-4">
                        Awards
                      </h3>
                      <ul className="list-unstyled resume-awards-list">
                        <li className="mb-3">
                          <div className="font-weight-bold">
                            Award Lorem Ipsum
                          </div>
                          <div className="text-muted">
                            Microsoft lorem ipsum (2019)
                          </div>
                        </li>
                        <li>
                          <div className="font-weight-bold">
                            Award Donec Sodales
                          </div>
                          <div className="text-muted">Oracle Aenean (2017)</div>
                        </li>
                      </ul>
                    </section> */}
                    {/*//education-section*/}
                    <section className="skills-section py-3">
                      <h3 className="text-uppercase resume-section-heading mb-4">
                        Languages
                      </h3>
                      <ul className="list-unstyled resume-lang-list">
                        <li className="mb-2">
                          English <span className="text-muted">(Professional)</span>
                        </li>
                        <li>
                          Bangali{" "}
                          <span className="text-muted">(Native)</span>
                        </li>
                      </ul>
                    </section>
                    {/*//certificates-section*/}
                    {/* <section className="skills-section py-3">
                      <h3 className="text-uppercase resume-section-heading mb-4">
                        Interests
                      </h3>
                      <ul className="list-unstyled resume-interests-list mb-0">
                        <li className="mb-2">Climbing</li>
                        <li className="mb-2">Snowboarding</li>
                        <li className="mb-2">Photography</li>
                        <li>Travelling</li>
                      </ul>
                    </section> */}
                    {/*//certificates-section*/}
                  </aside>
                  {/*//resume-aside*/}
                </div>
                {/*//row*/}
              </div>
              {/*//resume-body*/}
              <hr />
              <div className="resume-footer text-center">
                <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                  <li className="list-inline-item mb-lg-0 me-3">
                    <a className="resume-link" href="https://github.com/zahidhasan9" target={"_blank"}>
                      <i
                        className="fab fa-github-square fa-2x me-2"
                        data-fa-transform="down-4"
                      />
                      <a className="d-none d-lg-inline-block text-muted" href="https://github.com/zahidhasan9" >
                        github.com/username
                      </a>
                    </a>
                  </li>
                  <li className="list-inline-item mb-lg-0 me-3">
                    <a className="resume-link" href="https://www.linkedin.com/in/jahid-hasan-rimel/"target={"_blank"}>
                      <i
                        className="fab fa-linkedin fa-2x me-2"
                        data-fa-transform="down-4"
                      />
                      <span className="d-none d-lg-inline-block text-muted">
                        linkedin.com/in/username
                      </span>
                    </a>
                  </li>
                  <li className="list-inline-item mb-lg-0 me-lg-3">
                    <a className="resume-link" href="https://twitter.com/Jahid_Rimel_" target={"_blank"}>
                      <i
                        className="fab fa-twitter-square fa-2x me-2"
                        data-fa-transform="down-4"
                      />
                      <a className="d-none d-lg-inline-block text-muted">
                        @twittername
                      </a>
                    </a>
                  </li>
                </ul>
              </div>
              {/*//resume-footer*/}
            </article>
          </div>
          {/*//container*/}
        </div>
        {/*//main-wrapper*/}
        {/* *****CONFIGURE STYLE (REMOVE ON YOUR PRODUCTION SITE)****** */}
      
      </>
    </div>
  );
}

export default Resume;
