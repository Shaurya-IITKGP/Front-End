import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import s from "./Navbar.module.css";

import logo from "../../assets/shauya22-.png";
const Menu = () => (
  <>
    <div className="  text-white">
      <div className="">
        <h1 className="my-2    ">
          <a href="#">Home</a>
        </h1>
        <h1 className="my-2   ">
          <a href="#">Events</a>
        </h1>
      </div>
      <div className="">
        <h1 className="my-2 ">
          <a href="#">Sponsors</a>
        </h1>

        <h1 className="my-2  ">
          <a href="#">Team</a>
        </h1>
      </div>
     
    </div>
  </>
);

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={"flex bg-black  text-orange-500  "}>
      <div className="flex items-center justify-between  w-full">
        <div>
          <h1>
            <img className={"w-20 ml-12 mb-2" + s.logo1} src={logo} alt="" />
          </h1>
        </div>
        <div
          className={"flex gap-32 items-center font-mono font-semibold pr-10"}
        >
          <h1 className={"my-6 hover:text-white hidden md:block"}>
            <a href="#">HOME</a>
          </h1>
          <h1 className={"my-6  hover:text-white hidden md:block"}>
            <a href="#">EVENTS</a>
          </h1>
          <h1 className={"my-6 hover:text-white hidden md:block"}>
            <a href="#">SPONSORS</a>
          </h1>
          <h1 className={"my-6  hover:text-white hidden md:block"}>
            <a href="#">TEAM</a>
          </h1>

          
        </div>
      </div>
      <div className={"absolute top-0 right-0 mt-7 " + s.hammenu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && <Menu />}
      </div>
    </div>
  );
}
