import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <FooterTop />
      <FooterBottom />
    </>
  )
}

export default Layout;
