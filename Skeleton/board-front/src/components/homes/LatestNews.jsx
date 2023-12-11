import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

function LatestNews() {
  return (
    <section className="section-news section-t8">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-wrap d-flex justify-content-between">
              <div className="title-box">
                <h2 className="title-a">Latest News</h2>
              </div>
              <div className="title-link">
                <a href="blog-grid.html">All News
                  <span className="bi bi-chevron-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* import { Autoplay, FreeMode, Pagination } from 'swiper/modules' */}
        <div id="news-carousel" className="swiper">
          <div className="swiper-wrapper intro">
            <Swiper slidesPerView={3} spaceBetween={30} freeMode={true}
              autoplay={{ delay: 3500, disableOnInteraction: false, }}
              pagination={{ clickable: true, }}
              modules={[Autoplay, FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="carousel-item-c swiper-slide">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="images/post-2.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <Link href="#" className="category-b">House</Link>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item-c swiper-slide">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="images/post-5.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <Link href="#" className="category-b">Travel</Link>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item-c swiper-slide">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="images/post-7.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <Link href="#" className="category-b">Park</Link>
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
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-item-c swiper-slide">
                  <div className="card-box-b card-shadow news-box">
                    <div className="img-box-b">
                      <img src="images/post-3.jpg" alt="" className="img-b img-fluid" />
                    </div>
                    <div className="card-overlay">
                      <div className="card-header-b">
                        <div className="card-category-b">
                          <Link href="#" className="category-b">Travel</Link>
                        </div>
                        <div className="card-title-b">
                          <h2 className="title-2">
                            <Link href="#">Travel is comming <br />
                              new</Link>
                          </h2>
                        </div>
                        <div className="card-date">
                          <span className="date-b">18 Sep. 2017</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews;
