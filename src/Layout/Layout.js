import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col  w-full h-full min-h-screen">
      <Header></Header>
      <div className="mt-[64px] bg-bg dark:bg-dark h-full">{children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
