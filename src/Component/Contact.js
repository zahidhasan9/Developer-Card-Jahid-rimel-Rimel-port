import React from 'react'

function Contact() {
  return (

        <>
         
      
          <div className="main-wrapper">
            <section className="cta-section theme-bg-light py-5">
              <div className="container text-center single-col-max-width">
                <h2 className="heading">Contact</h2>
                <div className="intro">
                  <p>
                    Interested in hiring me for your project or just want to say hi?
                    You can fill in the contact form below or send me an email to{" "}
                    <a className="text-link" href="mailto:#">
                    zmzahidhasan181@gmail.com
                    </a>
                  </p>
                  <p>
                    Want to get connected? Follow me on the social channels below.
                  </p>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mb-3">
                      <a className="twitter" href="https://twitter.com/Jahid_Rimel_">
                        <i className="fab fa-twitter fa-fw fa-lg" />
                      </a>
                    </li>
                    <li className="list-inline-item mb-3">
                      <a className="linkedin" href="https://www.linkedin.com/in/jahid-hasan-rimel/">
                        <i className="fab fa-linkedin-in fa-fw fa-lg" />
                      </a>
                    </li>
                    <li className="list-inline-item mb-3">
                      <a className="github" href="https://github.com/zahidhasan9">
                        <i className="fab fa-github-alt fa-fw fa-lg" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="instagram" href="https://www.instagram.com/zahidha6057/">
                        <i className="fab fa-instagram fa-fw fa-lg" />
                      </a>
                    </li>
                    <li className="list-inline-item mb-3">
                      <a className="stack-overflow" href="https://stackoverflow.com/users/16868988/jahid-hasan-rimel">
                        <i className="fab fa-stack-overflow fa-fw fa-lg" />
                      </a>
                    </li>
                    <li className="list-inline-item mb-3">
                      <a className="medium" href="#">
                        <i className="fab fa-medium-m fa-fw fa-lg" />
                      </a>
                    </li>
                    <li className="list-inline-item mb-3">
                      <a className="codepen" href="#">
                        <i className="fab fa-codepen fa-fw fa-lg" />
                      </a>
                    </li>
                    {/*<li class="list-inline-item mb-3"><a class="facebook" href="#"><i class="fab fa-facebook-f fa-fw fa-lg"></i></a></li>*/}
                  </ul>
                  {/*//social-list*/}
                </div>
                {/*//container*/}
              </div>
            </section>
            <section className="contact-section px-3 py-5 p-md-5">
              <div className="container">
                <form
                  id="contact-form"
                  className="contact-form col-lg-8 mx-lg-auto"
                  method="post"
                  action=""
                >
                  <h3 className="text-center mb-3">Get In Touch</h3>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="sr-only" htmlFor="cname">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cname"
                        name="name"
                        placeholder="Name"
                        minLength={2}
                        required=""
                        aria-required="true"
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="sr-only" htmlFor="cemail">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="cemail"
                        name="email"
                        placeholder="Email"
                        required=""
                        aria-required="true"
                      />
                    </div>
                    <div className="col-12">
                      <select id="services" className="form-select" name="services">
                        <option selected="">
                          Select a service package you're interested in...
                        </option>
                        <option value="basic">Basic</option>
                        <option value="standard">Standard</option>
                        <option value="premium">Premium</option>
                        <option value="not sure">Not sure</option>
                      </select>
                      <div className="mt-2">
                        <small className="form-text text-muted pt-1">
                          <i className="fas fa-info-circle me-2 text-primary" />
                          Want to know what's included in each package? Check the{" "}
                          <a
                            className="text-link"
                            href="services.html"
                            target="_blank"
                          >
                            Services &amp; Pricing
                          </a>{" "}
                          page.
                        </small>
                      </div>
                    </div>
                    <div className="col-12">
                      <label className="sr-only" htmlFor="cmessage">
                        Your message
                      </label>
                      <textarea
                        className="form-control"
                        id="cmessage"
                        name="message"
                        placeholder="Enter your message"
                        rows={10}
                        required=""
                        aria-required="true"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group col-12">
                      <button
                        type="submit"
                        className="btn btn-block btn-primary py-2"
                      >
                        Send Now
                      </button>
                    </div>
                  </div>
                  {/*//form-row*/}
                </form>
              </div>
              {/*//container*/}
            </section>

          </div>
          {/*//main-wrapper*/}
          {/* *****CONFIGURE STYLE (REMOVE ON YOUR PRODUCTION SITE)****** */}
          <div
            id="config-panel"
            className="config-panel config-panel-hide d-none d-lg-block"
          >
            <div className="panel-inner">
              <a id="config-trigger" className="config-trigger text-center" href="#">
                <i className="fas fa-cog mx-auto" data-fa-transform="down-6" />
              </a>
              <h5 className="panel-title">Choose Colour</h5>
              <ul id="color-options" className="list-inline mb-0">
                <li className="theme-1 active list-inline-item">
                  <a data-style="assets/css/theme-1.css" href="#" />
                </li>
                <li className="theme-2  list-inline-item">
                  <a data-style="assets/css/theme-2.css" href="#" />
                </li>
                <li className="theme-3  list-inline-item">
                  <a data-style="assets/css/theme-3.css" href="#" />
                </li>
                <li className="theme-4  list-inline-item">
                  <a data-style="assets/css/theme-4.css" href="#" />
                </li>
                <li className="theme-5  list-inline-item">
                  <a data-style="assets/css/theme-5.css" href="#" />
                </li>
                <li className="theme-6  list-inline-item">
                  <a data-style="assets/css/theme-6.css" href="#" />
                </li>
                <li className="theme-7  list-inline-item">
                  <a data-style="assets/css/theme-7.css" href="#" />
                </li>
                <li className="theme-8  list-inline-item">
                  <a data-style="assets/css/theme-8.css" href="#" />
                </li>
                <li className="theme-9  list-inline-item">
                  <a data-style="assets/css/theme-9.css" href="#" />
                </li>
                <li className="theme-10  list-inline-item">
                  <a data-style="assets/css/theme-10.css" href="#" />
                </li>
              </ul>
              <a id="config-close" className="close" href="#">
                <i className="fa fa-times-circle" />
              </a>
            </div>
            {/*//panel-inner*/}
          </div>
          {/*//configure-panel*/}
          {/* Javascript */}
          {/* Dark Mode */}
          {/* Style Switcher (REMOVE ON YOUR PRODUCTION SITE) */}
        </>
    
      
  )
}

export default Contact