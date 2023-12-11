import React from 'react'
import { Link } from 'react-router-dom';

import SubIntroSingle from '@components/SubIntroSingle';

function Signup() {
  return (
    <main id="main">
      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title="We Do Great Design For Creative Folks"
        pathName="User"
      ></SubIntroSingle>

      {/* ======= About Section ======= */}
      <section className="section-about">
        <div className="container">
          <form className="row">
            <div className="col-sm-12 position-relative form-group mb-3">
              <label htmlFor="email" className="form-label">E-Mail</label>
              <input type="text" className="form-control" id="email" name="email" />
            </div>
            <div className="col-sm-12 position-relative form-group mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" name="password" />
            </div>
            <div className="col-sm-12 position-relative form-group mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="col-sm-12 position-relative form-group">
              <button type="submit" className="btn btn-danger btn-sm">SEND</button>{' '}
              <button type="reset" className="btn btn-primary btn-sm">RESET</button>
            </div>
          </form>
        </div>
      </section>

      {/* =======Team Section ======= */}
      <section className="section-agents section-t8" style={{ padding: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between" style={{ paddingBottom: '20px' }}>
                <div className="title-box">
                  <h2 className="title-a">Meet Our Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card-box-d">
                <div className="card-img-d">
                  <img src="images/agent-7.jpg" alt="" className="img-d img-fluid" />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <a href="agent-single.html" className="link-two">Margaret Sotillo
                          <br /> Escala</a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
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
                  <img src="images/agent-6.jpg" alt="" className="img-d img-fluid" />
                </div>
                <div className="card-overlay card-overlay-hover">
                  <div className="card-header-d">
                    <div className="card-title-d align-self-center">
                      <h3 className="title-d">
                        <a href="agent-single.html" className="link-two">Stiven Spilver
                          <br /> Darw</a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
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
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-dribbble" aria-hidden="true"></i>
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
                        <a href="agent-single.html" className="link-two">Emma Toledo
                          <br /> Cascada</a>
                      </h3>
                    </div>
                  </div>
                  <div className="card-body-d">
                    <p className="content-d color-text-a">
                      Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.
                    </p>
                    <div className="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
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
                        <li className="list-inline-item">
                          <Link href="#" className="link-one">
                            <i className="bi bi-dribbble" aria-hidden="true"></i>
                          </Link>
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

    </main>
  )
}

export default Signup;

Signup.defaultProps = {
  sub: ''
};