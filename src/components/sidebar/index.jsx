import React from "react";
import { Link } from "react-router-dom";

// Library npm >>>>
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

// react redux >>>>
// import { useDispatch, useSelector } from "react-redux";

// All store to slice redux toolkit >>>>
// import { hiddenButton } from "../../features/Menu/MenuSlice";
// import { useState } from "react";

const Sidebar = ({ burger, setBurger }) => {
  // const dispatch = useDispatch();

  // Styling Value
  // const isValueButtonBurger = useSelector((state) => state.menu.burger);

  // handle hidden buttons
  const handleHiddenButton = () => {
    setBurger(false);
  };

  return (
    <div className={burger ? "sidebar-aktif" : "sidebar"}>
      {/* Header sidebar */}
      <div className="header-sidebar">
        <img
          src={require("../../assets/image/pngwing.com.png")}
          className="logo-header-sidebar"
          alt=""
        />
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
