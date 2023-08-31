import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";

import logo from "../../assets/shauya22-.png";
const Menu = () => (
  <>
    <div className="  text-white">
      <div className="">
        <h1 className="my-2   ">
          <Link to="/events">Events</Link>
        </h1>
      </div>
      <div className="">
        <h1 className="my-2 ">
          <Link to="/sponsors">Sponsors</Link>
        </h1>

        <h1 className="my-2  ">
          <Link to="/teams">Team</Link>
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
          className={"flex gap-20 items-center font-mono font-semibold pr-10"}
        >
          <h1 className={"my-6  hover:text-white hidden md:block"}>
            <Link to="/events">EVENTS</Link>
          </h1>
          <h1 className={"my-6 hover:text-white hidden md:block"}>
            <Link to="/sponsors">SPONSORS</Link>
          </h1>
          <h1 className={"my-6  hover:text-white hidden md:block"}>
            <Link to="/teams">TEAM</Link>
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
