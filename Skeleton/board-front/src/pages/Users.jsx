import React, { useCallback, useEffect, useState } from 'react'

import SubIntroSingle from '@components/SubIntroSingle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginAction } from './../stores/userStore'
import axios from 'axios';

function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({ email: '', password: '' });
  const changeData = useCallback((evt) => {
    setData((data) => ({ ...data, [evt.target.name]: evt.target.value }));
  }, []);

  const login = useCallback(async (evt) => {
    evt.preventDefault();
    const resp = await axios.post('http://localhost:8000/users/login', data);
    console.log(resp.data);
    if (resp.data.status === 500) window.alert(resp.data.message);
    else {
      const storage = window.sessionStorage;
      storage.setItem('name', resp.data.data.name);
      storage.setItem('email', resp.data.data.email);
      storage.setItem('id', resp.data.data.id);
      dispatch(loginAction(resp.data.data));
      navigate('/boards');
    }
  }, [data, navigate, dispatch]);

  const { name, email } = useSelector(state => state.userStore);

  /*
  // redux-thunk
  const login = useCallback((evt) => {
    evt.preventDefault();
    dispatch(loginAction(data));
  }, [dispatch, data]);
  */

  useEffect(() => {
    if (name) navigate('/boards');
  }, [navigate, name])

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
          <div className="row">
            <div className="col-sm-12 position-relative">
              <div className="about-img-box">
                <img src="images/slide-about-1.jpg" alt="" className="img-fluid" />
              </div>
              <div className="sinse-box">
                <h3 className="sinse-title">EstateAgency
                  <span></span>
                  <br />
                  Sinse 2017
                </h3>
                <p>Art & Creative</p>
              </div>
            </div>
            <div className="col-md-12 section-t8 position-relative">
              <div className="row">
                <div className="col-md-6 col-lg-5">
                  <img src="images/about-2.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-2  d-none d-lg-block position-relative">
                  <div className="title-vertical d-flex justify-content-start">
                    <span>EstateAgency Exclusive Property</span>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5 section-md-t3">
                  <div className="title-box-d">
                    <h3 className="title-d">Sed
                      <span className="color-d">porttitor</span> lectus
                      <br /> nibh.
                    </h3>
                  </div>
                  <p className="color-text-a">
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget
                    consectetur sed, convallis
                    at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                    neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                  </p>
                  <p className="color-text-a">
                    Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                    Mauris blandit aliquet
                    elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed,
                    convallis at tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======Team Section ======= */}
      <section className="section-agents section-t8" style={{ paddingTop: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title-wrap d-flex justify-content-between" style={{ paddingBottom: '15px' }}>
                <div className="title-box">
                  <h2 className="title-a">LOGIN</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <form className="col-sm-12">
              <div className="col-sm-12 position-relative form-group mb-3">
                <label htmlFor="email" className="form-label">E-Mail</label>
                <input type="text" className="form-control" id="email" name="email"
                  value={data.email} onChange={changeData} />
              </div>
              <div className="col-sm-12 position-relative form-group mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password"
                  value={data.password} onChange={changeData} />
              </div>

              <div className="col-sm-12 position-relative form-group">
                <button type="submit" className="btn btn-danger btn-sm" onClick={login}>SEND</button>{' '}
                <button type="reset" className="btn btn-primary btn-sm">RESET</button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Users;

Users.defaultProps = {
  sub: ''
};