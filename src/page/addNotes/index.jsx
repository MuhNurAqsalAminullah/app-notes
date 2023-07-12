import React, { useState, Fragment } from "react";

// Library npm >>>>
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

// react redux >>>>
import { useDispatch } from "react-redux";

// All store to slice redux toolkit >>>>
// import { showButton } from "../../features/Menu/MenuSlice";
import { createNotesAsync } from "../../features/fetchData/fetchDataSlice";
import { useNavigate } from "react-router-dom";

const AddNotes = ({ setBurger }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  // handle add notes
  const handleSubmit = (e, id) => {
    e.preventDefault();

    const notesData = {
      title,
      deskripsi,
    };

    dispatch(createNotesAsync(notesData));
    alert("Notes added Successfully");
    navigate("/");
    // window.location.reload();

    setTitle("");
    setDeskripsi("");
  };

  // handle burger menu (menu akan terlihat saat responsive mobile only)
  const handleShowButton = () => {
    setBurger(true);
  };
  return (
    <Fragment>
      <div className="container2">
        <div className="box-navbar-add-notes">
          <HiIcons.HiMenuAlt1
            onClick={handleShowButton}
            className="header-burger"
            color="#006fff"
            size={24}
          />
        </div>
        <div className="box-content-add-notes">
          <div className="pin-add-title-notes">
            <AiIcons.AiOutlineAppstoreAdd className="icon-pin-notes" />
            <p className="title-pin-notes">Add new notes</p>
          </div>

          <form onSubmit={handleSubmit} className="form-add-notes">
            <div className="box-form-add-notes">
              <div className="add-input-1">
                <label className="form-label-add-notes">Judul Notes</label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Masukkan judul..."
                  className="form-title-add-notes"
                />
              </div>

              <div>
                <label className="form-label-add-notes">Text Notes</label>
                <br />
                <textarea
                  type="text"
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Masukkan text..."
                  className="form-textarea-add-notes"
                />
              </div>
            </div>

            <div className="box-btn-add-note">
              <button type="submit" className="btn-add-notes">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddNotes;
