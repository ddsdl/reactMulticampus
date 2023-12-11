import React from 'react'
import { Link } from 'react-router-dom';

import SwiperImages from '@components/homes/SwiperImages';
import OurServices from '@components/homes/OurServices';
import LatestProperties from '@components/homes/LatestProperties';

function Home() {
  return (
    <>
      {/* 스크롤 메인 이미지 */}
      <SwiperImages />

      <main id="main">
        {/* <!-- ======= Services Section ======= --> */}
        <OurServices></OurServices>

        {/* <!-- End Services Section --> */}
        <LatestProperties></LatestProperties>
        {/* <!-- ======= Latest Properties Section ======= --> */}

        {/* <!-- End Latest Properties Section --> */}

        {/* <!-- ======= Agents Section ======= --> */}
        <section className="section-agents section-t8">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-wrap d-flex justify-content-between">
                  <div className="title-box">
                    <h2 className="title-a">Best Agents</h2>
                  </div>
                  <div className="title-link">
                    <a href="agents-grid.html"
                    >All Agents
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img src="images/agent-4.jpg" alt="" className="img-d img-fluid" />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="agent-single.html" className="link-two"
                          >Margaret Sotillo <br />
                            Escala</a
                          >
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p><strong>Phone: </strong> +54 356 945234</p>
                        <p><strong>Email: </strong> agents@example.com</p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <Link href="#" className="link-one">
                              <i className="bi bi-facebook" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="#" className="link-one">
                              <i className="bi bi-instagram" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="#" className="link-one">
                              <i className="bi bi-linkedin" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img src="images/agent-1.jpg" alt="" className="img-d img-fluid" />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="agent-single.html" className="link-two"
                          >Stiven Spilver <br />
                            Darw</a
                          >
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p><strong>Phone: </strong> +54 356 945234</p>
                        <p><strong>Email: </strong> agents@example.com</p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <Link href="#" className="link-one">
                              <i className="bi bi-facebook" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="#" className="link-one">
                              <i className="bi bi-instagram" aria-hidden="true"></i>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link href="#" className="link-one">
                              <i className="bi bi-linkedin" aria-hidden="true"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-box-d">
                  <div className="card-img-d">
                    <img src="images/agent-5.jpg" alt="" className="img-d img-fluid" />
                  </div>
                  <div className="card-overlay card-overlay-hover">
                    <div className="card-header-d">
                      <div className="card-title-d align-self-center">
                        <h3 className="title-d">
                          <a href="agent-single.html" className="link-two"
                          >Emma Toledo <br />
                            Cascada</a
                          >
                        </h3>
                      </div>
                    </div>
                    <div className="card-body-d">
                      <p className="content-d color-text-a">
                        Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                      </p>
                      <div className="info-agents color-a">
                        <p><strong>Phone: </strong> +54 356 945234</p>
                        <p><strong>Email: </strong> agents@example.com</p>
                      </div>
                    </div>
                    <div className="card-footer-d">
                      <div className="socials-footer d-flex justify-content-center">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-facebook" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-linkedin" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Agents Section --> */}

        {/* <!-- ======= Latest News Section ======= --> */}
        <section className="section-news section-t8">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-wrap d-flex justify-content-between">
                  <div className="title-box">
                    <h2 className="title-a">Latest News</h2>
                  </div>
                  <div className="title-link">
                    <a href="blog-grid.html"
                    >All News
                      <span className="bi bi-chevron-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="news-carousel" className="swiper">
              <div className="swiper-wrapper">
                <div className="carousel-item-c swiper-slide">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="images/post-2.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">House</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href="blog-single.html"
                            >House is comming <br />
                              new</a
                            >
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End carousel item --> */}

                <div className="carousel-item-c swiper-slide">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="images/post-5.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">Travel</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href="blog-single.html"
                            >Travel is comming <br />
                              new</a
                            >
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End carousel item --> */}

                <div className="carousel-item-c swiper-slide">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="images/post-7.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">Park</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href="blog-single.html"
                            >Park is comming <br />
                              new</a
                            >
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End carousel item --> */}

                <div className="carousel-item-c swiper-slide">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="images/post-3.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <a href="#" className="category-b">Travel</a>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <a href="#"
                            >Travel is comming <br />
                              new</a
                            >
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End carousel item --> */}
              </div>
            </div>

            <div className="news-carousel-pagination carousel-pagination"></div>
          </div>
        </section>
        {/* <!-- End Latest News Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section className="section-testimonials section-t8 nav-arrow-a">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-wrap d-flex justify-content-between">
                  <div className="title-box">
                    <h2 className="title-a">Testimonials</h2>
                  </div>
                </div>
              </div>
            </div>

            <div id="testimonial-carousel" className="swiper">
              <div className="swiper-wrapper">
                <div className="carousel-item-a swiper-slide">
                  <div className="testimonials-box">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-img">
                          <img src="images/testimonial-1.jpg" alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-ico">
                          <i className="bi bi-chat-quote-fill"></i>
                        </div>
                        <div className="testimonials-content">
                          <p className="testimonial-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
                            cupiditate ea nam praesentium debitis hic ber quibusdam voluptatibus
                            officia expedita corpori.
                          </p>
                        </div>
                        <div className="testimonial-author-box">
                          <img src="images/mini-testimonial-1.jpg" alt="이미지"
                            className="testimonial-avatar"
                          />
                          <h5 className="testimonial-author">Albert & Erika</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End carousel item --> */}

                <div className="carousel-item-a swiper-slide">
                  <div className="testimonials-box">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-img">
                          <img src="images/testimonial-2.jpg" alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div className="testimonial-ico">
                          <i className="bi bi-chat-quote-fill"></i>
                        </div>
                        <div className="testimonials-content">
                          <p className="testimonial-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
                            cupiditate ea nam praesentium debitis hic ber quibusdam voluptatibus
                            officia expedita corpori.
                          </p>
                        </div>
                        <div className="testimonial-author-box">
                          <img
                            src="images/mini-testimonial-2.jpg"
                            alt=""
                            className="testimonial-avatar"
                          />
                          <h5 className="testimonial-author">Pablo & Emma</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End carousel item --> */}
              </div>
            </div>
            <div className="testimonial-carousel-pagination carousel-pagination"></div>
          </div>
        </section>
        {/* <!-- End Testimonials Section --> */}
      </main>
    </>
  )
}

export default Home;
