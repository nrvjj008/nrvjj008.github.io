import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {  menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav
          className={`px-4 sm:p-12 w-full py-3 fixed top-0 z-20 flex justify-end`}
      >
        <div className='bg-slate-500/50 flex justify-end sm:justify-center items-center  backdrop-blur-3xl  shadow-2xl  sm:bg-slate-300/70  py-2 rounded-full w-fit px-12  sm:mx-auto'>

          <ul className='list-none hidden sm:flex flex-row gap-10 justify-center '>
            {navLinks.map((nav) => (
                <li
                    key={nav.id}
                    className={`${
                        active === nav.title ? "text-black" : "text-slate-700"
                    } hover:text-black text-xl font-bold cursor-pointer`}
                    onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            ))}
          </ul>

          <div className='sm:hidden justify-end items-center w-fit'>
            <img
                src={toggle ? close : menu}
                alt='menu'
                className='w-[28px] h-[28px] object-contain'
                onClick={() => setToggle(!toggle)}
            />

            <div
                className={`${
                    !toggle ? "hidden" : "flex"
                } p-4 bg-slate-200 shadow-2xl shadow-slate-500 absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-3xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px] ${
                            active === nav.title ? "text-black" : "text-slate-500"
                        }`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
