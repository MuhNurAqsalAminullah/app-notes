import React from "react";
import { Link } from "react-router-dom";

// import image
import logo from "../../assets/image/pngwing.com.png";

// Library npm >>>>
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

const Sidebar = ({ burger, setBurger }) => {
  // handle hidden buttons
  const handleHiddenButton = () => {
    setBurger(false);
  };

  return (
    <div className={burger ? "sidebar-aktif" : "sidebar"}>
      {/* Header sidebar */}
      <div className="header-sidebar">
        <img src={logo} className="logo-header-sidebar" alt="" />
        <h3 className="title-header-sidebar">Notes Me</h3>

        <HiIcons.HiMenuAlt1
          onClick={handleHiddenButton}
          className="header-burger"
          color="white"
          size={24}
        />
      </div>

      {/* Content sidebar */}
      <ul className="content-sidebar">
        <li>
          <Link to={"/"} className="item-content-sidebar side-style-item">
            <AiIcons.AiOutlineHome size={24} color={"white"} />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to={"form-input-notes"} className="item-content-sidebar">
            <AiIcons.AiOutlinePlusSquare size={24} color={"white"} />
            <p>Add Notes</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
