import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-full flex-auto flex justify-stretch items-stretch">
        <Outlet />
      </div>
    </div>
  );
}
