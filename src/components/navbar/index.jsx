import React, { useState } from "react";

// Library npm >>>>
import * as HiIcons from "react-icons/hi";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

// react redux >>>>
import { useDispatch, useSelector } from "react-redux";

// All store to slice redux toolkit >>>>
import { fetchNotesAsync } from "../../features/fetchData/fetchDataSlice";

const Navbar = ({ setBurger }) => {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const [exitSearch, setExitSearch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(searchNotesAsync(keyword));

    setExitSearch(!exitSearch);

    setKeyword("");
  };

  const handleAllData = (e) => {
    e.preventDefault();

    dispatch(fetchNotesAsync());

    setExitSearch(!exitSearch);

    e.target.reset();
  };

  // handle show button
  const handleShowButton = () => {
    setBurger(true);
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <HiIcons.HiMenuAlt1
          onClick={handleShowButton}
          className="header-burger"
          color="white"
          size={24}
        />
        <form
          onSubmit={exitSearch ? handleAllData : handleSubmit}
          className="box-input-navbar"
        >
          <input
            type="text"
            placeholder="Search..."
            className="input-search-navbar"
            onChange={(e) => setKeyword(e.target.value)}
          />
          {exitSearch ? (
            <button type="submit" className="btn">
              <AiIcons.AiOutlineClose className="iconSearch" size={24} />
            </button>
          ) : (
            <button type="submit" className="btn">
              <BiIcons.BiSearch className="iconSearch" size={24} />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Navbar;
