import { useEffect, useRef, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import shauryaLogo from "../../assets/logo-shaurya.png";
import kgpLogo from "../../assets/kgp-logo.png";

// TODO : Close Modal on clicking outside

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const location = useLocation();
  const mobileNavRef = useRef(null);

  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  return (
    <>
      {toggleMenu && (
        <div className="bg-[#000d] backdrop-blur-sm fixed z-50 w-screen h-screen flex justify-center items-center">
          <div
            ref={mobileNavRef}
            className={
              "w-full h-full relative flex justify-center items-center"
            }
          >
            <div className="text-orange-500 absolute right-4 top-4">
              <RiCloseLine onClick={() => setToggleMenu(false)} size={40} />
            </div>
            <div className="flex flex-col gap-4 px-10 py-10">
              <Link
                className="text-orange-500 font-bold text-2xl hover:text-white transition-all"
                to="/"
              >
                HOME
              </Link>
              <Link
                className="text-orange-500 font-bold text-2xl hover:text-white transition-all"
                to="/events"
              >
                EVENTS
              </Link>
              <Link
                className="text-orange-500 font-bold text-2xl hover:text-white transition-all"
                to="/sponsors"
              >
                SPONSORS
              </Link>
              <Link
                className="text-orange-500 font-bold text-2xl hover:text-white transition-all"
                to="/teams"
              >
                TEAM
              </Link>
            </div>
          </div>
        </div>
      )}
      <div
        className={
          "sticky top-0 z-20 shadow-[#222] shadow-sm flex items-center w-full md:justify-between bg-black md:px-16 px-4 py-4 text-orange-500"
        }
      >
        <Link
          to="/"
          className="md:border-none md:pr-0 md:mr-0 pr-4 mr-4 border-r-2 border-white cursor-pointer"
        >
          <img
            className={"w-32"}
            src={shauryaLogo}
            alt="SHAURYA - IIT Kharagpur"
          />
        </Link>
        <div className={"flex gap-10 items-center font-mono font-semibold"}>
          <Link
            className="transition-all hover:text-white hidden md:block"
            to="/"
          >
            HOME
          </Link>
          <Link
            className={"transition-all hover:text-white hidden md:block"}
            to="/events"
          >
            EVENTS
          </Link>
          <Link
            className={"transition-all hover:text-white hidden md:block"}
            to="/sponsors"
          >
            SPONSORS
          </Link>
          <Link
            className={"transition-all hover:text-white hidden md:block"}
            to="/teams"
          >
            TEAM
          </Link>
        </div>
        <a
          href="https://www.iitkgp.ac.in/"
          className="cursor-pointer"
          target="_blank"
        >
          <img className={"w-12"} src={kgpLogo} alt="SHAURYA - IIT Kharagpur" />
        </a>
        <div className="md:hidden flex justify-end w-full">
          <RiMenu3Line
            onClick={() => {
              setToggleMenu(true);
            }}
            size={30}
          />
        </div>
      </div>
    </>
  );
}
