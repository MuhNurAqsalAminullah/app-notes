import React, { useEffect } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

// Library npm >>>>
import moment from "moment";
import TruncateMarkup from "react-truncate-markup";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

// component >>>>
import Navbar from "../../components/navbar";

// react redux >>>>
import { useSelector, useDispatch } from "react-redux";

// All store to slice redux toolkit >>>>
import {
  deleteNotesAsync,
  fetchNotesAsync,
} from "../../features/fetchData/fetchDataSlice";

const Home = ({ setBurger }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.fetchData.list);
  const status = useSelector((state) => state.fetchData.status);
  const error = useSelector((state) => state.fetchData.error);

  // Get data list notes >>>>
  useEffect(() => {
    dispatch(fetchNotesAsync());
  }, [dispatch]);

  // handle Delete Notes >>>>
  const handleDeleteNotes = (id) => {
    dispatch(deleteNotesAsync(id));
  };

  // hendle detail notes >>>>
  const handleDetail = (id) => {
    navigate(`detai-notes/${id}`);
    console.log(id);
  };

  return (
    <Fragment>
      <Navbar setBurger={setBurger} />
      <div className="container">
        <div className="pin-add-title-notes">
          <RiIcons.RiListCheck2 className="icon-pin-notes" />
          <p className="title-pin-notes">All Notes List</p>
        </div>

        {notes && (
          <div className="box-content-notes">
            {status === "failed" && <p>Error: {error}</p>}

            {notes && notes.length > 0 ? (
              notes.map((item) => (
                <div key={item.id} className="card-size">
                  <div className="card-notes">
                    <div className="box-tgl-notes">
                      <p className="tgl-notes">
                        {moment(item.createdAt).format("LL")}
                      </p>
                      <div className="box-icon-notes">
                        <AiIcons.AiFillPushpin className="icon-pin-notes" />
                        <MdIcons.MdDelete
                          onClick={() => handleDeleteNotes(item.id)}
                          className="icon-delete-notes"
                        />
                      </div>
                    </div>

                    <div
                      className="cars-transform"
                      onClick={() => handleDetail(item.id)}
                    >
                      <TruncateMarkup lines={2}>
                        <h5 className="title-notes">{item.name}</h5>
                      </TruncateMarkup>
                      <TruncateMarkup lines={10}>
                        <p className="text-notes">{item.deskripsi}</p>
                      </TruncateMarkup>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>{status === "loading" && <p>Loading...</p>}</div>
            )}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
