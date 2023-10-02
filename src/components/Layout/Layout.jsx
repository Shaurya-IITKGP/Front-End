import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import s from "./LayoutStyle.module.css";
import { useEffect, useState } from "react";

export default function Layout() {
  const [clx, setClx] = useState(s.homePage);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setClx(s.homePage);
    } else if (location.pathname == "/events") {
      setClx(s.eventsPage);
    } else if (location.pathname == "/teams") {
      setClx(s.teamsPage);
    } else if (location.pathname == "/sponsors") {
      setClx(s.sponsPage);
    } else if (location.pathname == "/login" || location.pathname == "/dashboard") {
      setClx(s.loginPage);
    }
  }, [location]);

  return (
    <div className={"flex flex-col h-screen overflow-scroll " + clx}>
      <Navbar />
      <div className="h-full flex-auto flex justify-stretch items-stretch">
        <Outlet />
      </div>
    </div>
  );
}
