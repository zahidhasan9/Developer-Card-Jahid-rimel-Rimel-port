import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
     const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
     };

     return (
          <div>
               <div className="container">
                    <hr />
               </div>
               <section className="testimonials-section p-3 p-lg-5">
                    <div className="container">
                         <h2 className="section-title font-weight-bold mb-5">
                              Testimonials
                         </h2>

                         <Carousel activeIndex={index} onSelect={handleSelect}>
                              {/* <Carousel.Item >
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}

                              <Carousel.Item className="item">
                                   <div className="testiomonial-carousel-container">
                                        <div className="testimonial-carousel  tiny-slider">
                                             <div className="item-inner">
                                                  <div className="quote-holder">
                                                       <blockquote className="quote-content">
                                                            Simon is a brilliant
                                                            software engineer!
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetuer
                                                            adipiscing elit.
                                                            Aenean commodo
                                                            ligula eget dolor.
                                                            Aenean massa. Cum
                                                            sociis natoque
                                                            penatibus et magnis.
                                                       </blockquote>
                                                       <i className="fas fa-quote-left" />
                                                  </div>
                                                  {/*//quote-holder*/}
                                                  <div className="source-holder">
                                                       <div className="source-profile">
                                                            <img
                                                                 src="assets/images/clients/profile-2.png"
                                                                 alt="image"
                                                            />
                                                       </div>
                                                       <div className="meta">
                                                            <div className="name">
                                                                 Kate Sanders
                                                            </div>
                                                            <div className="info">
                                                                 Project
                                                                 Manager, Uber
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/*//item-inner*/}
                              </Carousel.Item>

                              <Carousel.Item className="">
                                   <div className="testiomonial-carousel-container">
                                        <div className="testimonial-carousel  tiny-slider">
                                             <div className="item-inner">
                                                  <div className="quote-holder">
                                                       <blockquote className="quote-content">
                                                            Simon is a brilliant
                                                            software engineer!
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetuer
                                                            adipiscing elit.
                                                            Aenean commodo
                                                            ligula eget dolor.
                                                            Aenean massa. Cum
                                                            sociis natoque
                                                            penatibus et magnis.
                                                       </blockquote>
                                                       <i className="fas fa-quote-left" />
                                                  </div>
                                                  {/*//quote-holder*/}
                                                  <div className="source-holder">
                                                       <div className="source-profile">
                                                            <img
                                                                 src="assets/images/clients/profile-2.png"
                                                                 alt="image"
                                                            />
                                                       </div>
                                                       <div className="meta">
                                                            <div className="name">
                                                                 Kate Sanders
                                                            </div>
                                                            <div className="info">
                                                                 Project
                                                                 Manager, Uber
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/*//item-inner*/}
                              </Carousel.Item>

                              <Carousel.Item className="">
                                   <div className="testiomonial-carousel-container">
                                        <div className="testimonial-carousel  tiny-slider">
                                             <div className="item-inner">
                                                  <div className="quote-holder">
                                                       <blockquote className="quote-content">
                                                            Simon is a brilliant
                                                            software engineer!
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetuer
                                                            adipiscing elit.
                                                            Aenean commodo
                                                            ligula eget dolor.
                                                            Aenean massa. Cum
                                                            sociis natoque
                                                            penatibus et magnis.
                                                       </blockquote>
                                                       <i className="fas fa-quote-left" />
                                                  </div>
                                                  {/*//quote-holder*/}
                                                  <div className="source-holder">
                                                       <div className="source-profile">
                                                            <img
                                                                 src="assets/images/clients/profile-4.png"
                                                                 alt="image"
                                                            />
                                                       </div>
                                                       <div className="meta">
                                                            <div className="name">
                                                                 James Lee
                                                            </div>
                                                            <div className="info">
                                                                 Product
                                                                 Manager, Amazon
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/*//item-inner*/}
                              </Carousel.Item>
                         </Carousel>
                    </div>
               </section>
          </div>
     );
}

export default Slider;
