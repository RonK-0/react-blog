import { FaBloggerB } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineCalendar, HiOutlineDocument } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
import { LiaSignalSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { FaStar, FaUser } from "react-icons/fa";

const Navigation = ({menu}) => {
  return (
    <aside className="px-4 py-6 w-[250px] h-screen border-r-2 border-line fixed top-0 left-0">
      <div className="flex items-center gap-4">
        <FaStar />
        <h2 className="mb-0 mt-0.5">Purtfulioe</h2>
      </div>

      <ul className="nav">
        <li className="nav-link">
          <Link to={"/"}>
            <FaBloggerB /> Blog
          </Link>
        </li>

        <li className="nav-link ">
          <Link to="#">
            <MdOutlineDashboard />
            Dashboard
          </Link>
        </li>

        <li className={`nav-link ${menu === "posts" ? "active" : ""}`}>
          <Link to={"/dash/posts"}>
            <RxDashboard /> Posts
          </Link>
        </li>

        <li className={`nav-link ${menu === "category" ? "active" : ""}`}>
          <Link to="/dash/category">
            <MdOutlineDashboard />
            Category
          </Link>
        </li>
        
        <li className={`nav-link ${menu === "tag" ? "active" : ""}`}>
          <Link to="/dash/tag">
            <MdOutlineDashboard />
            Tag
          </Link>
        </li>

        {/* <li className='nav-link'><Link to={'#'}><FaUser /> Users</Link></li>
            <li className='nav-link'><Link to={'#'}><HiOutlineCalendar /> Calendar</Link></li>
            <li className='nav-link'><Link to={'#'}><HiOutlineDocument /> Database</Link></li>
            <li className='nav-link'><Link to={'#'}><LiaSignalSolid /> Attendance</Link></li>
            <li className='nav-link'><Link to={'#'}><CiSettings /> Settings</Link></li> */}
      </ul>
    </aside>
  );
};

export default Navigation;
