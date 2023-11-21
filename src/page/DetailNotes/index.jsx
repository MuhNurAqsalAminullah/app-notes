import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Library npm >>>>
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";

// react redux >>>>
import { useDispatch, useSelector } from "react-redux";

// All store to slice redux toolkit >>>>
import {
  fetchNoteByIdAsync,
  updateNotesAsync,
} from "../../features/fetchData/fetchDataSlice";

const DetailNotes = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const note = useSelector((state) => state.fetchData.note);
  const status = useSelector((state) => state.fetchData.status);
  const error = useSelector((state) => state.fetchData.error);

  const [name, setName] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  useEffect(() => {
    dispatch(fetchNoteByIdAsync(id));

    setName(name || "");
    setDeskripsi(deskripsi || "");
  }, [dispatch, id]);

  useEffect(() => {
    if (note) {
      setName(note.name);
      setDeskripsi(note.deskripsi);
    }
  }, [note]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedNote = {
      id,
      name,
      deskripsi,
    };

    dispatch(updateNotesAsync(updatedNote));
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);

    setName("");
    setDeskripsi("");
  };

  return (
    <Fragment>
      <form onSubmit={handleUpdate} className="container2">
        <div className="container-top-detail">
          <Link to={"/"} className="box-navbar-add-notes">
            <AiIcons.AiOutlineArrowLeft
              className="header-burger"
              color="#006fff"
              size={24}
            />
          </Link>
          <div className="box-btn-action-notes">
            <button type="submit" className="box-navbar-edit-notes">
              <BiIcons.BiEdit className="icon-pin-notes" />
              <p className="edit-title-notes">Simpan</p>
            </button>
          </div>
        </div>

        <div className="box-content-add-notes">
          <div className="pin-add-title-notes">
            <BiIcons.BiShow className="icon-pin-notes" />
            <p className="title-pin-notes">Detail notes</p>
          </div>

          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>Error: {error}</div>}

          {status === "success" && (
            <div className="box-content-detail">
              <input
                type="text"
                className="title-notes-deskripsi"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                className="detail-deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              ></textarea>
            </div>
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default DetailNotes;
