import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsFillBuildingFill,
} from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFillBuildingFill className="icon_header" /> Indian Institute of
          Technology Kharagpur
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <BsGrid1X2Fill className="icon" /> IITKGP@112###82109
        </li>
        <li className="sidebar-list-item">
          <BsFillArchiveFill className="icon" /> gvkucwyhbrilv@iitkgp.ac.in
        </li>
        <li className="sidebar-list-item">
          <BsFillGrid3X3GapFill className="icon" /> 02222-2333-2233
        </li>

        <div className="sidebar-list-item">
          <BiLogOut className="logouticon" />
          <buttom>Log Out</buttom>
        </div>
      </ul>
    </aside>
  );
}

export default Sidebar;
