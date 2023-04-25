import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./button/Button";
import IconDarkmode from "./icons/IconDarkmode";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [toggleIcon, setToggleIcon] = useState(false);
  const handleDarkmode = () => {
    setDarkMode(!darkMode);
    setToggleIcon(!toggleIcon);
  };
  console.log(toggleIcon);
  const sidebarLink = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About Us",
      url: "/about",
    },
    {
      title: " Brands",
      url: "thuonghieu",
    },
    {
      title: "Promos",
      url: "/khuyenmai",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      icon: (
        <IconDarkmode dark={toggleIcon} onClick={handleDarkmode}></IconDarkmode>
      ),
      title: "darkmode",
      url: "/#",
      onClick: () => handleDarkmode(),
    },
  ];

  return (
    <div className="fixed w-full h-[64px] bg-white  dark:bg-slate-800 flex items-center justify-between  z-100">
      <h1 className="text-primary font-bold text-3xl pl-16">deliany</h1>
      <div className="flex items-center gap-x-10 mr-16 dark:text-white text-black cursor-pointer font-medium text-lg">
        {sidebarLink.map((link) => {
          if (link.onClick) {
            return (
              <div
                key={link.title}
                onClick={link?.onClick}
                className="dark:text-white "
              >
                <span className="hidden">{link.title}</span>
                <span>{link.icon}</span>
              </div>
            );
          }
          return (
            <NavLink
              to={link.url}
              key={link.title}
              className={({ isActive }) => (isActive ? ` text-primary ` : ``)}
            >
              <span>{link.title}</span>
            </NavLink>
          );
        })}
        <Link to="/login">
          <Button type="button" className="bg-gray-300 dark:bg-slate-700 py-1">
            Đăng nhập
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
