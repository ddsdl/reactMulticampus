import React from 'react'
import { Link } from 'react-router-dom';

function SwiperImages() {
  return (
    <div className="intro intro-carousel swiper position-relative">
      <div className="swiper-wrapper">
        <div
          className="swiper-slide carousel-item-a intro-item bg-image"
          style={{ 'backgroundImage': 'url(images/slide-1.jpg)' }}
        >
          <div className="overlay overlay-a"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="intro-body">
                      <p className="intro-title-top">
                        Doral, Florida <br />
                        78345
                      </p>
                      <h1 className="intro-title mb-4">
                        <span className="color-b">204 </span> Mount <br />
                        Olive Road Two
                      </h1>
                      <p className="intro-subtitle intro-price">
                        <Link href="#"><span className="price-a">rent | $ 12.000</span></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide carousel-item-a intro-item bg-image"
          style={{ 'backgroundImage': 'url(images/slide-2.jpg)' }}
        >
          <div className="overlay overlay-a"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="intro-body">
                      <p className="intro-title-top">
                        Doral, Florida <br />
                        78345
                      </p>
                      <h1 className="intro-title mb-4">
                        <span className="color-b">204 </span> Rino <br />
                        Venda Road Five
                      </h1>
                      <p className="intro-subtitle intro-price">
                        <Link href="#"><span className="price-a">rent | $ 12.000</span></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="swiper-slide carousel-item-a intro-item bg-image"
          style={{ 'backgroundImage': 'url(images/slide-3.jpg)' }}
        >
          <div className="overlay overlay-a"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="intro-body">
                      <p className="intro-title-top">
                        Doral, Florida <br />
                        78345
                      </p>
                      <h1 className="intro-title mb-4">
                        <span className="color-b">204 </span> Alira <br />
                        Roan Road One
                      </h1>
                      <p className="intro-subtitle intro-price">
                        <Link href="#"><span className="price-a">rent | $ 12.000</span></Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  )
}

export default SwiperImages;
