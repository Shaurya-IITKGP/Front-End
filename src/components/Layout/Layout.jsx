import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import s from "./LayoutStyle.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../AppContext/AppContext";

export default function Layout() {
  const [clx, setClx] = useState(s.homePage);
  const location = useLocation();
  const scrollRef = useRef(null);
  const { setChevVisible } = useContext(AppContext);

  useEffect(() => {
    if (location.pathname == "/") {
      setClx(s.homePage);
    } else if (location.pathname == "/events") {
      setClx(s.eventsPage);
    } else if (location.pathname == "/teams") {
      setClx(s.teamsPage);
    } else if (location.pathname == "/sponsors") {
      setClx(s.sponsPage);
    } else if (
      location.pathname == "/login" ||
      location.pathname == "/dashboard"
    ) {
      setClx(s.loginPage);
    }
  }, [location]);

  useEffect(() => {
    scrollRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      scrollRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollPosition = scrollRef.current.scrollTop;
    const disableHeight = 100;
    if (scrollPosition > disableHeight) {
      setChevVisible(false);
    } else {
      setChevVisible(true);
    }
  }

  return (
    <div
      ref={scrollRef}
      className={"flex flex-col h-screen overflow-auto " + clx}
    >
      <Navbar />
      <div className="h-full flex-auto flex justify-stretch items-stretch">
        <Outlet />
      </div>
    </div>
  );
}
