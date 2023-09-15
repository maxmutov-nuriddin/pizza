import { Fragment } from "react";
import { Outlet } from "react-router-dom";


import Header from "../header/Header";
import HeaderBottom from "../header/HeaderBottom";
import Footer from "../footer/Footer";


const Layout = () => {
  return (
    <Fragment>
      <Header />
      <HeaderBottom />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
